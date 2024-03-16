// Merge型を実装してください。
// Merge型は、2つのオブジェクト型を受け取り、それらをマージした型を返す型です。
// type Merge<T extends Record<string, any>, U extends Record<string, any>> = {
//   [Key in keyof T | keyof U]: Key extends keyof T
//     ? T[Key]
//     : Key extends keyof U
//     ? U[Key]
//     : never;
// };

// type Merge<F, S> = {
//   [K in keyof F | keyof S]: K extends keyof S
//     ? S[K]
//     : K extends keyof F
//     ? F[K]
//     : never;
// };

// type Merge<T, U> = {
//     [K in keyof T | keyof U]: K extends keyof U ? U[K] : K extends keyof T ? T[K] : never;
// };

type Merge<T extends Record<string, any>, U extends Record<string, any>> = {
  [Key in keyof T | keyof U]: Key extends keyof U
    ? U[Key]
    : Key extends keyof T
    ? T[Key]
    : never;
};

type foo = {
  name: string;
  age: string;
};
type coo = {
  age: number;
  sex: string;
};

type ResultMerge = Merge<foo, coo>; // expected to be {name: string, age: number, sex: string}
