// Flattenを実装してください。
type Flatten<T extends any[], X extends any[] = []> = T extends [
  infer R,
  ...infer U
]
  ? R extends any[]
    ? Flatten<[...R, ...U], X>
    : Flatten<U, [...X, R]>
  : X;

type flatten = Flatten<[1, 2, [3, 4], [[5]]]>; // [1, 2, 3, 4, 5]
