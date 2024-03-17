type MyCapitalize<T extends string> = T extends `${infer Head}${infer Tail}`
  ? `${Uppercase<Head>}${Tail}`
  : T;
type capitalized = MyCapitalize<"hello world">; // expected to be 'Hello world'
