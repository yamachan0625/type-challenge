type CheckRepeatedChars<T extends string> = T extends `${infer F}${infer E}`
  ? E extends `${string}${F}${string}`
    ? true
    : CheckRepeatedChars<E>
  : false;

type CheckRepeatedChars1 = CheckRepeatedChars<"abc">; // false
type CheckRepeatedChars2 = CheckRepeatedChars<"aba">; // true
