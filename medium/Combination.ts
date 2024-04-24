type Combination<
  T extends string[],
  All = T[number],
  Item = All
> = Item extends string
  ? Item | `${Item} ${Combination<[], Exclude<All, Item>>}`
  : never;

type abrebre = ["foo", "bar", "baz"][number];
type bteebre = Exclude<abrebre, "foo">;
// expected to be `"foo" | "bar" | "baz" | "foo bar" | "foo bar baz" | "foo baz" | "foo baz bar" | "bar foo" | "bar foo baz" | "bar baz" | "bar baz foo" | "baz foo" | "baz foo bar" | "baz bar" | "baz bar foo"`
type Keys = Combination<["foo", "bar", "baz"]>;
