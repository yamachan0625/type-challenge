// この型を実装してください
// type DeepReadonly<T extends Record<string,any>> = {
//   readonly [Key in keyof T]: T[Key]
// }
type DeepReadonly<T extends Record<string, any>> = {
  readonly [Key in keyof T]: T[Key] extends object
    ? DeepReadonly<T[Key]>
    : T[Key];
};

type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: "hi";
  };
  readonly y: "hey";
};

type Todo = DeepReadonly<X>; // should be same as `Expected`
