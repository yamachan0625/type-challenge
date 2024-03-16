// Last型を実装してください。
// Last型は、配列の最後の要素の型を返す型です。
type Last<T> = T extends [...any, infer R] ? R : never;

type arr11 = ["a", "b", "c"];
type arr22 = [3, 2, 1];

type tail1 = Last<arr11>; // expected to be 'c'
type tail2 = Last<arr22>; // expected to be 1
