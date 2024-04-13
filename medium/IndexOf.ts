type IndexOf<
  T extends any[],
  U extends number,
  Res extends any[] = []
> = T extends [infer Head, ...infer Tail]
  ? Head extends U
    ? Res["length"]
    : IndexOf<Tail, U, [...Res, Head]>
  : -1;

type ResIndexOf = IndexOf<[1, 2, 3], 2>; // expected to be 1
type Res1IndexOf = IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>; // expected to be 2
type Res2IndexOf = IndexOf<[0, 0, 0], 2>; // expected to be -1
