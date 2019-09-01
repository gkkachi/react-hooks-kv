interface IKV<V> {
    [path: string]: V;
}
export declare const useKV: <T>() => [IKV<T>, (k: string, v: T) => void, (k: string) => void];
export {};
