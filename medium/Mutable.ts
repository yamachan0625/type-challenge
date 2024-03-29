type Mutable<T extends Record<string, any>> = {
  -readonly [key in keyof T]: T[key];
};

interface IMutableTodo {
  readonly title: string;
  readonly description: string;
  readonly completed: boolean;
}

type MutableTodo = Mutable<IMutableTodo>; // { title: string; description: string; completed: boolean; }
