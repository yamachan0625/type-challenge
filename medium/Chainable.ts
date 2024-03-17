type Chainable<T = {}> = {
  option<K extends string, V>(key: K, val: V): Chainable<T & Record<K, V>>;
  get(): T;
};

declare const config: Chainable;

const result = config
  .option("foo", 123)
  .option("name", "type-challenges")
  .option("bar", { value: "Hello World" })
  .get();

// expect the type of result to be:
interface ResultChainable {
  foo: number;
  name: string;
  bar: {
    value: string;
  };
}
const a = {
  foo: "number",
  name: "string",
  bar: {
    value: "string",
  },
};
