// この型を定義してください
type DeepPick<T extends Record<string, any>, U extends Record<string, any>> = {
  [key in keyof U]: key extends keyof T
    ? U[key] extends true
      ? T[key]
      : DeepPick<T[key], U[key]>
    : never;
};

type Person = {
  name: string;
  age: number;
  address: {
    country: string;
    houseNumber: number;
  };
};

// 期待される結果
// type Result = {
//   name: string;
//   address: {
//     country: string;
//   };
// }
type ResultDeepPick = DeepPick<
  Person,
  {
    name: true;
    address: {
      country: true;
    };
  }
>;
