export interface IResponse<T> {
    success: boolean;
    message: string;
    error: Error;
    result: T;
}