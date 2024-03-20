// type を実装しますIsUnion。これは入力型を受け取りT、T共用体型に解決されるかどうかを返します。

// type IsUnion<T, K = T, Arr extends any[] = []> = [T] extends [never]
//   ? Arr["length"] extends 1
//     ? false
//     : true
//   : K extends K
//   ? [...Arr, K, IsUnion<Exclude<T, K>>]
//   : false;

type IsUnion<T, C extends T = T> = (
  T extends T ? (C extends T ? true : unknown) : never
) extends true
  ? false
  : true;

type case1 = IsUnion<string>; // false
type case2 = IsUnion<string | number>; // true
type case3 = IsUnion<[string | number]>; // false
