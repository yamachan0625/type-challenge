// type ObjectEntries<T extends Record<string, any>> = [keyof T, T[keyof T]];

type ObjectEntries<T> = {
  [K in keyof T]-?: [K, T[K]];
}[keyof T];

type ObjectToUnion<T> = keyof T;

interface ObjectEntriesModel {
  name: string;
  age: number;
  locations: string[] | null;
}
type modelEntries = ObjectEntries<ObjectEntriesModel>; // ['name', string] | ['age', number] | ['locations', string[] | null];
type aaaaaa = ObjectToUnion<ObjectEntriesModel>;
