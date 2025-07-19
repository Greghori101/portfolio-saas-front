import { cookies } from "next/headers"

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api"

type FetcherOptions = {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
  query?: Record<string, string | number | boolean | undefined>
  body?: any
  headers?: HeadersInit
  withAuth?: boolean
  token?: string | null
  cache?: RequestCache
  next?: number | null
  signal?: AbortSignal | null
}

export async function fetcher<T = any>(
  endpoint: string,
  {
    method = "GET",
    query = {},
    body = null,
    headers = {},
    withAuth = false,
    token = null,
    cache = "no-store",
    next = null,
    signal = null,
  }: FetcherOptions = {}
): Promise<T> {
  const queryString = Object.entries(query)
    .filter(([, v]) => v !== undefined)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
    .join("&")

  const url = `${BASE_URL}${endpoint}${queryString ? `?${queryString}` : ""}`

  const defaultHeaders: HeadersInit = {
    Accept: "application/json",
    "Content-Type": "application/json",
  }

  if (withAuth) {
    const cookieStore = await cookies()
    const finalToken = token || cookieStore.get("token")?.value
    if (finalToken) {
      defaultHeaders["Authorization"] = `Bearer ${finalToken}`
    }
  }

  const options: RequestInit & { next?: { revalidate: number } } = {
    method,
    headers: {
      ...defaultHeaders,
      ...headers,
    },
    cache,
    signal: signal ?? undefined,
  }

  if (body) {
    options.body = JSON.stringify(body)
  }

  if (next !== null) {
    options.next = { revalidate: next }
  }

  try {
    const res = await fetch(url, options)
    if (!res.ok) {
      const errData = await parseResponse(res)
      const error = new Error((errData as any)?.message || res.statusText) as Error & {
        status?: number
        data?: any
      }
      error.status = res.status
      error.data = errData
      throw error
    }

    return await parseResponse(res)
  } catch (error) {
    console.error(`[fetcher] ${method} ${url} →`, error)
    throw error
  }
}

async function parseResponse(res: Response): Promise<any> {
  const contentType = res.headers.get("content-type")
  if (contentType?.includes("application/json")) {
    return res.json()
  }
  return res.text()
}
