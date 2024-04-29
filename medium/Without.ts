// type Without<
//   T extends any[],
//   U extends number | number[],
//   Res extends any[] = []
// > = T extends [infer Head, ...infer Tail]
//   ? Head extends U[keyof U]
//     ? [...Res, ...Without<Tail, U>]
//     : [...Res, Head, ...Without<Tail, U>]
//   : Res;

type ToUnion<T> = T extends any[] ? T[number] : T;
type Without<T, U> = T extends [infer R, ...infer F]
  ? R extends ToUnion<U>
    ? Without<F, U>
    : [R, ...Without<F, U>]
  : T;

type Res = Without<[1, 2], 1>; // expected to be [2]
type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []
