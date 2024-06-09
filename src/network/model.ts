export type PublicAPIResponse<T> = {
  success?: boolean;
  result: T;
  message?: string;
};
