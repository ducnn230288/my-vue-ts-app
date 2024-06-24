export interface IResponses<T> {
  statusCode?: 200 | 201 | 500 | 404;
  message?: string;
  data?: T;
  meta?: {
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
  };
}
