export interface IRequestState<T> {
  isLoading: boolean;
  isError: boolean;
  error?: string;
  data?: T
}
