// Pop型を実装してください。
// Pop型は、配列の最後の要素を削除した配列を返す型です。
type Pop<Arr extends any[]> = Arr extends [...infer R, any] ? R : never;

type arr111 = ["a", "b", "c", "d"];
type arr222 = [3, 2, 1];

type re1 = Pop<arr111>; // expected to be ['a', 'b', 'c']
type re2 = Pop<arr222>; // expected to be [3, 2]
