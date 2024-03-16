interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }
  
  /* _____________ ここにコードを記入 _____________ */
  
  type MyPick<T extends Record<string, any>, K extends string> = {
    [Key in K]: Key extends keyof T ? T[Key]:never
  }
  
  
  
  type TodoPreview = MyPick<Todo, "title" | "completed">;
  
  const todo2: TodoPreview = {
    title: "Clean room",
    completed: false,
  };
  