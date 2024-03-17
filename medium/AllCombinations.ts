// AllCombinations型を定義してください。
// この型は、文字列を受け取り、その文字列の組み合わせをすべて列挙する型です。
type StringToUnionX<T extends string> = T extends `${infer U}${infer V}`
  ? U | StringToUnionX<V>
  : never;

type AllCombinations<
  STR extends string,
  UNION extends string = StringToUnionX<STR>
> = [UNION] extends [never]
  ? ""
  :
      | ""
      | {
          [K in UNION]: `${K}${AllCombinations<never, Exclude<UNION, K>>}`;
        }[UNION];

// type AllCombinations<T extends string> = T extends `${infer U}${infer V}`
//   ? U | AllCombinations<V> | `${U}${AllCombinations<V>}`
//   : T;

type AllCombinations_ABC = AllCombinations<"ABC">;
// should be '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'
