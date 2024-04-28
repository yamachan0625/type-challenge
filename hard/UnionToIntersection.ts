// UnionToIntersection<T>を実装してください。
type UnionToIntersection１<T> = (
  T extends any ? (arg: T) => void : never
) extends (arg: infer U) => void
  ? U
  : never;

type UnionToIntersection<U> = (
  U extends any ? (arg: U) => any : never
) extends (arg: infer I) => void
  ? I
  : never;

type I = UnionToIntersection<"foo" | 42 | true>; // never
type II = Omit<UnionToIntersection<{ a: "aa" } | { b: "aa" }>, never>; // expected to be 'foo' & 42 & true
