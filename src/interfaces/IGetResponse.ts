export interface IGetResponse<T> {
    success: boolean;
    message: string;
    error: Error;
    result: T;
}