type ToNumber<
  S extends string,
  T extends any[] = []
> = S extends `${T["length"]}`
  ? T["length"]
  : T["length"] extends 100
  ? never // ここで終了条件を追加
  : ToNumber<S, [...T, ""]>;

type Test1 = ToNumber<"10">; // 3 と評価されます（期待通り）
type Test2 = ToNumber<"aaa">; // never と評価されます（数値以外の文字列）
