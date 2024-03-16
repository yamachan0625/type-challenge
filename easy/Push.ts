// Push型を定義してください
// 例えば、Push<[1, 2], '3'>は[1, 2, '3']を返します
type Push<T extends number[], U extends string> = [...T, U];

type Result = Push<[1, 2], "3">; // [1, 2, '3']
