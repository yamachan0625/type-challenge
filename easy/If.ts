// type Ifを実装してください。
type If<Joken, A, B> = Joken extends true ? A :B

type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'
