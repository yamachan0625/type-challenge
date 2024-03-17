// Permutation型を定義してください
type Permutation<T, K = T> = [K] extends [never]
  ? []
  : K extends K
  ? [K, ...Permutation<Exclude<T, K>>]
  : never;
// type Permutation<T, K = T> = [T] extends [never]
//   ? []
//   : Exclude<T, K>
type perm = Permutation<"A" | "B" | "C">; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']
