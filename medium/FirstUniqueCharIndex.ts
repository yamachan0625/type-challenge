type FirstUniqueCharIndex<C, R extends any[] = []> = C extends ""
  ? -1
  : C extends `${infer H}${infer T}`
  ? T extends `${string}${H}${string}`
    ? FirstUniqueCharIndex<T, [...R, H]>
    : H extends R[number]
    ? FirstUniqueCharIndex<T, [...R, H]>
    : R["length"]
  : never;

// type FirstUniqueCharIndex<
//   T extends string,
//   _Acc extends string[] = []
// > = T extends ""
//   ? -1
//   : T extends `${infer Head}${infer Rest}`
//   ? Head extends _Acc[number]
//     ? FirstUniqueCharIndex<Rest, [..._Acc, Head]>
//     : Rest extends `${string}${Head}${string}`
//     ? FirstUniqueCharIndex<Rest, [..._Acc, Head]>
//     : _Acc["length"]
//   : never;

type FirstUniqueCharIndex1 = FirstUniqueCharIndex<"leetcode">; // 0
type FirstUniqueCharIndex2 = FirstUniqueCharIndex<"loveleetcode">; // 2>>,
type FirstUniqueCharIndex3 = FirstUniqueCharIndex<"aabb">; // -1>>;
type FirstUniqueCharIndex4 = FirstUniqueCharIndex<"aabe">; // -1>>;
