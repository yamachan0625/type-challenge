// type Fill<
//   T extends unknown[],
//   N,
//   Start extends number = 0,
//   End extends number = T["length"],
//   Res extends any[] = [],
//   Flag extends boolean = false
// > = T extends [infer Head, ...infer Tail]
//   ? Start extends Res["length"]
//     ? Fill<Tail, N, Start, End, [...Res, N], true>
//     : End extends Res["length"]
//     ? Fill<Tail, N, Start, End, [...Res, Head], false>
//     : Fill<Tail, N, Start, End, [...Res, Head]>
//   : Res;

type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T["length"],
  Count extends any[] = [],
  Flag extends boolean = Count["length"] extends Start ? true : false
> = Count["length"] extends End
  ? T
  : T extends [infer R, ...infer U]
  ? Flag extends false
    ? [R, ...Fill<U, N, Start, End, [...Count, 0]>]
    : [N, ...Fill<U, N, Start, End, [...Count, 0], Flag>]
  : T;

type expa = Fill<[1, 2, 3], 0>; // expected to be [0, 0, 0]
type expb = Fill<[1, 2, 3], 0, 0, 0>; // [1, 2, 3]
type expc = Fill<[1, 2, 3], 0, 2, 2>; // [1, 2, 3]
type expg = Fill<[1, 2, 3, 4, 5], 0, 2, 4>; // [1, 2, 0, 0, 5]
type expe = Fill<[1, 2, 3], true>; // [true, true, true]
