type ParseUrlParams<T> = T extends `${infer B}:${infer C}`
  ? C extends `${infer D}/${infer E}`
    ? D | ParseUrlParams<E>
    : C
  : never;

type ParseUrlParams1 = ParseUrlParams<":id">; // id
type ParseUrlParams2 = ParseUrlParams<"posts/:id">; // id
type ParseUrlParams3 = ParseUrlParams<"posts/:id/:user">; // id | user
