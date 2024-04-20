type Include<T extends any[], X> = T extends [infer R, ...infer M]
  ? Equal<X, R> extends true
    ? true
    : Include<M, X>
  : false;
type Unique<T extends any[], Res extends any[] = []> = T extends [
  infer R,
  ...infer X
]
  ? Include<Res, R> extends true
    ? Unique<X, Res>
    : Unique<X, [...Res, R]>
  : Res;

type Res = Unique<[1, 1, 2, 2, 3, 3]>; // expected to be [1, 2, 3]
type Res1 = Unique<[1, 2, 3, 4, 4, 5, 6, 7]>; // expected to be [1, 2, 3, 4, 5, 6, 7]
type Res2 = Unique<[1, "a", 2, "b", 2, "a"]>; // expected to be [1, "a", 2, "b"]
type Res3 = Unique<[string, number, 1, "a", 1, string, 2, "b", 2, number]>; // expected to be [string, number, 1, "a", 2, "b"]
type Res4 = Unique<[unknown, unknown, any, any, never, never]>; // expected to be [unknown, any, never]

type mrvwo = Include<["a"], "a">;
type mrvwofe = Include<["a", "b", "c"], "t">;
