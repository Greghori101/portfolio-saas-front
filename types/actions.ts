export interface ActionResponse {
	data?: any |null | undefined
	success: boolean
	errors?: Record<string, any> | null
	message: string | null | undefined
}
