export default interface IAsyncState<T> {
    loading: boolean;
    data: T | null;
    error: string | boolean;
}
