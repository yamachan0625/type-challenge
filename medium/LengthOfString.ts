type ALengthOfString = ["a", "b", "c"]["length"];
// type StringToArray<
//   T extends string,
//   Arr extends [] = []
// > = T extends `${infer A}${infer B}`
//   ? A extends string
//     ? [...Arr, A, ...StringToArray<B>]
//     : Arr
//   : Arr;
type StringToArray<T extends string> = T extends `${infer A}${infer B}`
  ? [A, ...StringToArray<B>]
  : [];
type LengthOfString<T extends string> = StringToArray<T>["length"];

type TestLengthOfString = "123";
type ResultLengthOfString = LengthOfString<TestLengthOfString>; // expected to be 3
