// type Zip<T extends any[], X extends any[]> = T extends [infer H, ...infer R]
//   ? X extends [infer H1, ...infer R1]
//     ? [[H, H1], ...Zip<R, R1>]
//     : []
//   : [];

type Zip<
  A extends any[],
  B extends any[],
  L extends any[] = []
> = L["length"] extends A["length"] | B["length"]
  ? L
  : Zip<A, B, [...L, [A[L["length"]], B[L["length"]]]]>;

type exp = Zip<[1, 2], [true, false]>; // expected to be [[1, true], [2, false]]
