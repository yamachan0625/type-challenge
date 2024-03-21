// type DropChar<
//   T,
//   U extends string,
//   X extends string = ""
// > = T extends `${infer F}${U}${infer R}` ? DropChar<`${F}${X}${R}`, U, X> : T;

type DropChar<S, C extends string> = S extends `${infer L}${C}${infer R}`
  ? DropChar<`${L}${R}`, C>
  : S;

type Butterfly = DropChar<" b u t t e r f l y ! ", " ">; // 'butterfly!'

type NNNNN<
  T extends string,
  U extends string
> = T extends `${infer F}${U}${infer N}` ? `${F}${N}` : "";

type CCCCCCC = NNNNN<"abcdefg", "d">;
