type PartialByKeys<T extends Record<string, any>, K extends keyof T> = {
  [key in K]?: T[key];
} & Omit<T, K>;

interface User {
  name: string;
  age: number;
  address: string;
}

type UserPartialName = PartialByKeys<User, "name">; // { name?:string; age:number; address:string }
const aho: UserPartialName = {
  name: "aaa",
  age: 2,
  address: "string",
};
