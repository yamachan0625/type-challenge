type NumberLengthArray<
  T extends number,
  Res extends any[] = []
> = Res["length"] extends T ? Res : NumberLengthArray<T, [...Res, unknown]>;

type NumberRange<
  Start extends number,
  End extends number,
  Arr extends any[] = NumberLengthArray<Start>
> = Arr["length"] extends End
  ? Arr["length"]
  : Arr["length"] | NumberRange<Start, End, [...Arr, unknown]>;

type resultNumberRange = NumberRange<2, 9>; //  | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
