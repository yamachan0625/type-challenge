type MyAwaited<T extends Promise<any>> = T extends Promise<infer R> ? R : never;
type ExampleType = Promise<string>;

type Resulta = MyAwaited<ExampleType>; // string
