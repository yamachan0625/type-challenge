type EndsWith<T extends string, U extends string> = T extends `${string}${U}`
  ? true
  : false;

type a2 = EndsWith<"abc", "bc">; // expected to be true
type b2 = EndsWith<"abc", "abc">; // expected to be true
type c2 = EndsWith<"abc", "d">; // expected to be false
type d2 = EndsWith<"abc", "c">; // expected to be false
