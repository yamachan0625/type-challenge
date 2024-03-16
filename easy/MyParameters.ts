// MyParametersを実装してください
// MyParametersは関数の引数の型をタプルで返す型です
type MyParameters<T> = T extends (...args: infer R) => any ? [...R] : never;

const foo = (arg1: string, arg2: number): void => {};

type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]
