type IsTuple<T> = T extends readonly any[]
  ? number extends T["length"]
    ? false
    : true
  : false;

type case1 = IsTuple<[number]>; // true
type case2 = IsTuple<readonly [number]>; // true
type case3 = IsTuple<number[]>; // false

type niuvre = [number]["length"]; // 1
type niuvre2 = number[]["length"]; // number
type niuvre3 = number extends 1 ? true : false; // false
