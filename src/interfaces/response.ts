export interface ResponseData<T> {
    success: boolean;
    message: string;
    error: Error;
    result: T;
}