type TestAAAAAAAAA = {
  firstName: string;
  lastName: string;
  readonly age: number;
};

// この型を実装してください
type IfNotEquals<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
  T
>() => T extends Y ? 1 : 2
  ? false
  : true;

type IsPropertyReadonly<T, K extends keyof T> = IfNotEquals<
  { [P in K]: T[P] },
  { -readonly [P in K]: T[P] }
>;

type Result = IsPropertyReadonly<TestAAAAAAAAA, "firstName">; // expected to be `false`
type Result2 = IsPropertyReadonly<TestAAAAAAAAA, "lastName">; // expected to be `false`
type Result3 = IsPropertyReadonly<TestAAAAAAAAA, "age">; // expected to be `true`
