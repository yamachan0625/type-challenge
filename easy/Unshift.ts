// Unshiftを実装してください
type Unshift<T extends number[], U extends number> = [U,...T]

type Result2 = Unshift<[1, 2], 0>; // [0, 1, 2,]
