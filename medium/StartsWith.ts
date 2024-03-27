// type StartsWith<
//   T extends string,
//   U extends string
// > = U extends `${infer H}${infer R}`
//   ? T extends `${infer H2}${infer R2}`
//     ? H extends H2
//       ? StartsWith<R2, R>
//       : false
//     : false
//   : true;

type StartsWith<T extends string, U extends string> = T extends `${U}${string}`
  ? true
  : false;

type a = StartsWith<"abc", "ac">; // expected to be false
type b = StartsWith<"abc", "ab">; // expected to be true
type c = StartsWith<"abc", "abcd">; // expected to be false
type e = StartsWith<"abc", "a">; // expected to be true
type f = StartsWith<"abc", "">; // expected to be true
