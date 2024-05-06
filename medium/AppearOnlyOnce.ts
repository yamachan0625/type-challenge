// type Include<Target, H extends any[]> = Target extends H[number] ? true : false;

// type FindEles<T extends any[], R extends any[] = []> = T extends [
//   infer H,
//   ...infer B
// ]
//   ? FindEles<B, Include<H, R> extends true ? R : [...R, H]>
//   : R;

// type FindEles<T extends any[], R extends any[] = []> = T extends [
//   infer H,
//   ...infer X
// ]
//   ? H extends X[number] | R[number]
//     ? FindEles<X, R>
//     : FindEles<X, [...R, H]>
//   : R;

type FindEles<T extends any[], Duplicates = never> = T extends [
  infer F,
  ...infer R
]
  ? F extends Duplicates
    ? FindEles<R, Duplicates>
    : F extends R[number]
    ? FindEles<R, Duplicates | F>
    : [F, ...FindEles<R, Duplicates>]
  : [];

type FindEles1 = FindEles<[1, 2, 2, 3, 3, 4, 5, 6, 6, 6]>; // [1, 4, 5]
type FindEles2 = FindEles<[2, 2, 3, 3, 6, 6, 6]>; // []
type FindEles3 = FindEles<[1, 2, 3]>; //[1, 2, 3]
