// IsAnyを実装してください
// type IsAny<T> = 0 extends 1 & T ? true : false;
type IsAny<T> = "a" extends "b" & T ? true : false;

type A = IsAny<string>; // false
type B = IsAny<any>; // true

// IsAny<T> の型エイリアスは、これらの特性を利用しています。
//具体的には、0 extends 1 & T ? true : false は、「もし 0 型が 1 & T 型に割り当て可能であれば true を、
// そうでなければ false を返す」という条件型です。通常、0 は 1 に割り当て可能ではないため、1 & T が 1 以外の何かであれば、
// この条件は false を返します。しかし、T が any の場合、1 & any は any になり、0 extends any は true と評価されます。
// これは、any がどんな型とも互換性があるためです。
