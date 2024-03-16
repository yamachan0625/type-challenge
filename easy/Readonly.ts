// MyReadonly<T>を実装してください
// MyReadonlyは、Tのプロパティをすべて読み取り専用にする型です
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

interface TodoA {
  title: string;
  description: string;
}

const todo10: MyReadonly<TodoA> = {
  title: "Hey",
  description: "foobar",
};
