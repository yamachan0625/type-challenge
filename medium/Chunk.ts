// type Chunk<
//   T extends any[],
//   U extends number,
//   Arr extends any[][] = []
// > = T extends [infer H, ...infer T]
//   ? Arr["length"] extends U
//     ? Arr
//     : Chunk<T, U, []>
//   : Arr;

// type Chunk<
//   T extends any[],
//   U extends number,
//   Arr extends any[] = [],
//   Res extends any[][] = []
// > = T extends [infer H, ...infer Tail]
//   ? Arr["length"] extends U
//     ? Chunk<Tail, U, [], [...Res, Arr]>
//     : Chunk<Tail, U, [...Arr, H], Res>
//   : [...Res, Arr];

type Chunk<
  T extends any[],
  N extends number,
  Swap extends any[] = []
> = Swap["length"] extends N
  ? [Swap, ...Chunk<T, N>]
  : T extends [infer K, ...infer L]
  ? Chunk<L, N, [...Swap, K]>
  : Swap extends []
  ? Swap
  : [Swap];

type exp1 = Chunk<[1, 2, 3], 2>; // expected to be [[1, 2], [3]]
type exp2 = Chunk<[1, 2, 3], 4>; // expected to be [[1, 2, 3]]
type exp3 = Chunk<[1, 2, 3], 1>; // expected to be [[1], [2], [3]]
