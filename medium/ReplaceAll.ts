type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer A}${From}${infer B}`
  ? ReplaceAll<`${A}${To}${B}`, From, To>
  : S;
type replaced2 = ReplaceAll<"t y p e s", " ", "">; // expected to be 'types'
