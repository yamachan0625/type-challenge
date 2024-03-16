// MyReturnTypeを実装してください。
// MyReturnTypeは、関数の戻り値の型を返す型です。
type MyReturnType<T> = T extends (arg: any) => infer R ? R : never;

const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type a = MyReturnType<typeof fn>; // should be "1 | 2"
