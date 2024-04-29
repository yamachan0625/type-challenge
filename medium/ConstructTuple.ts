type ConstructTuple<
  T extends number,
  Res extends any[] = []
> = Res["length"] extends T ? Res : ConstructTuple<T, [...Res, unknown]>;

type ConstructTupleresult = ConstructTuple<2>; // expect to be [unknown, unkonwn]
type ConstructTupleresult2 = ConstructTuple<999>["length"];
