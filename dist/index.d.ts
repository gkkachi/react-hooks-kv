interface IKV<V> {
    [path: string]: V;
}
declare const myUseReducer: <T>() => [IKV<T>, (k: string, v: T) => void, (k: string) => void];
export default myUseReducer;
