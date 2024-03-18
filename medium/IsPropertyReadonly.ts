type Test = {
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

type Result = IsPropertyReadonly<Test, "firstName">; // expected to be `false`
type Result2 = IsPropertyReadonly<Test, "lastName">; // expected to be `false`
type Result3 = IsPropertyReadonly<Test, "age">; // expected to be `true`
