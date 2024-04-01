type ArrayWithLength<
  T extends number,
  U extends any[] = []
> = U["length"] extends T ? U : ArrayWithLength<T, [true, ...U]>;
type GreaterThan<
  T extends number,
  U extends number
> = ArrayWithLength<U> extends [...ArrayWithLength<T>, ...infer _]
  ? false
  : true;

type aGreaterThan = GreaterThan<2, 1>; //should be true
type bGreaterThan = GreaterThan<1, 1>; //should be false
type cGreaterThan = GreaterThan<10, 100>; //should be false
type dGreaterThan = GreaterThan<111, 11>; //should be true
