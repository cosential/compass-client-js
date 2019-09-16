export interface ResponseData < T > {
  success: boolean;
  status: number;
  message: string;
  error: any;
  result: T;
}
