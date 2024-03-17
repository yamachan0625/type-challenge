// 文字列をUnion型に変換するStringToUnion<T>を実装してください。
type StringToUnion<T extends string> = T extends `${infer R}${infer X}`
  ? R | StringToUnion<X>
  : never;
// type StringToUnion<T extends string> = T extends `${infer R}${infer X}` ? X:never // "23"

type Test = "123";
type ResultStringToUnion = StringToUnion<Test>; // expected to be "1" | "2" | "3"
