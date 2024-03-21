type RemoveIndexSignature<T, P = PropertyKey> = {
  [K in keyof T as P extends K ? never : K extends P ? K : never]: T[K];
};

type Foo = {
  [key: string]: any;
  foo(): void;
};
type ARemoveIndexSignature = RemoveIndexSignature<Foo>; // expected { foo(): void }
