export interface ResponseData < T > {
  success: boolean;
  status: number;
  message: string;
  error: Error;
  result: T;
}
