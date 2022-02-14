export interface IAsyncState<T> {
    loading: boolean;
    data: T | null;
    error: string | boolean;
}

export interface IPayload {
    data: any;
    status: string;
    message: string;
}
