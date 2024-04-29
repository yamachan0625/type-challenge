type Assignable<X, Y> = X extends Y ? true : false;

type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;

type X1 = { a: string; b?: boolean };
type X2 = { a: string; c?: number };

class A {}

type AssignableRes = Assignable<X1, X2>; // true
type EqualRes = Equal<X1, X2>; // false
type EqualA = Equal<A, A>; // false
