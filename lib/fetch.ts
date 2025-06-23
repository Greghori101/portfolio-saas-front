type FetchOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  headers?: HeadersInit
  query?: Record<string, string | number | boolean>
  body?: Record<string, any> | FormData
  token?: string | null
  next?: NextFetchRequestConfig  // for SSR/ISR caching control
}

export async function fetcher<T = any>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const {
    method = 'GET',
    headers = {},
    query,
    body,
    token,
    next
  } = options

  const baseUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || ''
  const url = new URL(endpoint, baseUrl)

  // Add query params
  if (query) {
    Object.entries(query).forEach(([key, value]) =>
      url.searchParams.append(key, String(value))
    )
  }

  const fetchOptions: RequestInit = {
    method,
    headers: {
      ...headers,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(body && !(body instanceof FormData) ? { 'Content-Type': 'application/json' } : {})
    },
    ...(body ? { body: body instanceof FormData ? body : JSON.stringify(body) } : {})
  }

  // Add Next.js-specific options if in server component
  if (next) {
    // @ts-ignore
    fetchOptions.next = next
  }

  try {
    const res = await fetch(url.toString(), fetchOptions)

    if (!res.ok) {
      const errorBody = await res.text()
      throw new Error(`Fetch error: ${res.status} ${res.statusText} — ${errorBody}`)
    }

    const contentType = res.headers.get('content-type')
    if (contentType && contentType.includes('application/json')) {
      return res.json() as Promise<T>
    } else {
      return res.text() as unknown as T
    }
  } catch (err: any) {
    console.error(`[fetcher] ${method} ${url}:`, err.message)
    throw err
  }
}
