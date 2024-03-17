// Replace型を実装してください。
// Replace型は、文字列型Sのうち、文字列型Tにマッチする部分を文字列型Uに置換した型を返します。
type Replace<
  S extends string,
  T extends string,
  U extends string
> = S extends `${infer A}${T}${infer B}` ? `${A}${U}${B}` : "";

type replaced = Replace<"types are fun!", "fun", "awesome">; // expected to be 'types are awesome!'
