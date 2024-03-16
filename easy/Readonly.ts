// MyReadonly<T>を実装してください
// MyReadonlyは、Tのプロパティをすべて読み取り専用にする型です
type MyReadonly<T> = {
    readonly [K in keyof T]:T[K]
  }
  
  interface Todo {
    title: string;
    description: string;
  }
  
  const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar",
  };
  