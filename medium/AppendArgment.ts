type AppendArgument<Fn, T> = Fn extends (...arg: infer X) => infer R
  ? (...arg: [...X, x: T]) => R
  : Fn;

type Fn = (a: number, b: string) => number;

type ResultAppendArgument = AppendArgument<Fn, boolean>;
// expected be (a: number, b: string, x: boolean) => number
