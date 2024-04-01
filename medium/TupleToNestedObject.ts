type TupleToNestedObject<T extends string[], K> = T extends [
  infer Head extends string,
  ...infer Tail extends string[]
]
  ? { [key in Head]: TupleToNestedObject<Tail, K> }
  : K;

type a = TupleToNestedObject<["a"], string>; // {a: string}
type b = TupleToNestedObject<["a", "b"], number>; // {a: {b: number}}
type c = TupleToNestedObject<["a", "b", "c"], number>; // {a: {b: {c: number}}}
type d = TupleToNestedObject<[], boolean>; // boolean. if the tuple is empty, just return the U type
