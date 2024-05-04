type GetMiddleElement<T extends any[]> = T extends [
  infer H,
  ...infer X,
  infer Y
]
  ? X["length"] extends 0
    ? [H, Y]
    : GetMiddleElement<X>
  : T;

type simple1 = GetMiddleElement<[1, 2, 3, 4, 5]>; // expected to be [3]
type simple2 = GetMiddleElement<[1, 2, 3, 4, 5, 6]>; // expected to be [3, 4]
type simple3 = GetMiddleElement<[3, 4]>; // expected to be [3, 4]
type simple4 = GetMiddleElement<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]>;
type simple5 = GetMiddleElement<[]>;
