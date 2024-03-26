// type ParseInt<T extends string> = T extends `${infer Digit extends number}`
//   ? Digit
//   : never;
// type ReverseString<S extends string> = S extends `${infer First}${infer Rest}`
//   ? `${ReverseString<Rest>}${First}`
//   : "";
// type RemoveLeadingZeros<S extends string> = S extends "0"
//   ? S
//   : S extends `${"0"}${infer R}`
//   ? RemoveLeadingZeros<R>
//   : S;
// type InternalMinusOne<S extends string> =
//   S extends `${infer Digit extends number}${infer Rest}`
//     ? Digit extends 0
//       ? `9${InternalMinusOne<Rest>}`
//       : `${[9, 0, 1, 2, 3, 4, 5, 6, 7, 8][Digit]}${Rest}`
//     : never;
// type MinusOne<T extends number> = ParseInt<
//   RemoveLeadingZeros<ReverseString<InternalMinusOne<ReverseString<`${T}`>>>>
// >;

// ------------------------------------------------------------------
type Pop<T extends any[]> = T extends [...infer R, 0] ? R["length"] : 0;
type MinusOne<
  T extends number,
  Arr extends number[] = []
> = T extends Arr["length"] ? Pop<Arr> : MinusOne<T, [...Arr, 0]>;

// ------------------------------------------------------------------
// type test = MinusOne<9007199254740992>;
type Zero = MinusOne<1>; // 0
type FiftyFour = MinusOne<55>; // 54
