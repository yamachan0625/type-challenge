const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

type AAAAAA = Awaited<typeof promise1>;

declare function PromiseAll<T extends any[]>(
  values: T
): Promise<{
  [P in keyof T]: Awaited<T[P]>;
}>;

// declare function PromiseAll<T extends any[]>(args: readonly [...T]): Promise<any>

// expected to be `Promise<[number, 42, string]>`
// const p = PromiseAll([promise1, promise2, promise3] as const);
const p = PromiseAll([promise1, promise2, promise3] as const);

type TestAAAAAAA<T extends any[]> = {
  [P in keyof T]: T[P] extends "a" ? "b" : "c";
};
type TestBBBBBBB = TestAAAAAAA<["a", "b", "c"]>;
