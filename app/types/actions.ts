export type ActionResponse =
  | { data: any }
  | { error: { fieldErrors?: Record<string, string[]>; formErrors?: string[] } }
