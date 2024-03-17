// 文字列から両端の空白を削除した新しい文字列を返すTrim<T>を実装してください。
type Trim<T> = T extends `${" "}${infer B}` | `${infer B}${" "}` ? Trim<B> : T;

type trimed = Trim<"  Hello World  ">; // expected to be 'Hello World'
