// TupleToUnionを実装してください
// type TupleToUnion<T> = T extends [infer R, ...infer U] ? R | TupleToUnion<U> :never
type TupleToUnion<T extends any[]> = T[number]; // extends any[]が重要

type Arr = ["1", "2", "3"];

type TupleToUnionR = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'
