// MyOmit型を定義してください
// MyOmitは、第二引数で指定したキーを除外した型を返す型です
type MyOmit<T extends Record<string, any>, OmitKey extends T[keyof T]> = {
  [Key in Exclude<keyof T, OmitKey>]: T[Key];
};

interface Todo6 {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview2 = MyOmit<Todo6, "description" | "title">;

const todo: TodoPreview2 = {
  completed: false,
};
