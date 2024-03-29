// type RequiredByKeys<T extends Record<string, any>, K extends keyof T> = Omit<
//   T,
//   K
// > & { [key in K]-?: T[key] };

// type RequiredByKeys<T, K = keyof T> = {
//   [P in keyof T as P extends K ? never : P]: T[P];
// } & {
//   [P in keyof T as P extends K ? P : never]-?: T[P];
// } extends infer I
//   ? { [P in keyof I]: I[P] }
//   : never;

type RequiredByKeys<T, K extends keyof T = keyof T> = Omit<
  T & Required<Pick<T, K>>,
  never
>;
type RequiredByKeys2<T, K extends keyof T = keyof T> = T & Required<Pick<T, K>>;

type N<T> = keyof T;
type a = N<{ name?: string }>;

interface User2 {
  name?: string;
  age?: number;
  address?: string;
}
interface User3 {
  phone?: string;
  height?: number;
}
interface User4 {
  hair?: string;
}
type User23 = Omit<User2 & User3, never>;
type User234 = User2 & User3;
type User2345 = Omit<User234, never>;

type UserRequiredName = RequiredByKeys<User2, "name">; // { name: string; age?: number; address?: string }
