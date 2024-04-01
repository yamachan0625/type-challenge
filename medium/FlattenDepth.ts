// type FlattenDepth<
//   T extends any[],
//   N extends number = 1,
//   Arr extends any[] = []
// > = T extends [infer H, ...infer X] ? (H extends any[] ? [N] : [H]) : Arr;

type FlattenDepth<
  T extends any[],
  N extends number = 1,
  Arr extends any[] = []
> = Arr["length"] extends N
  ? T
  : T extends [infer H, ...infer X]
  ? H extends any[]
    ? [...FlattenDepth<H, N, [...Arr, 1]>, ...FlattenDepth<X, N, Arr>]
    : [H, ...FlattenDepth<X, N, Arr>]
  : T;

type aFlattenDepth = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>; // [1, 2, 3, 4, [5]]. flattern 2 times
type bFlattenDepth = FlattenDepth<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1
type cFlattenDepth = FlattenDepth<[1, 2, [3, 4], [[[[[[[5]]]]]]]], 5>; // [1, 2, 3, 4, [5]]. flattern 2 times
