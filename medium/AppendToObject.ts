type AppendToObject<Obj, Key extends string, Value> = {
  [key in keyof Obj | Key]: key extends keyof Obj ? Obj[key] : Value;
};
type TestAppendToObject = { id: "1" };
type ResultAppendToObject = AppendToObject<TestAppendToObject, "value", 4>; // expected to be { id: '1', value: 4 }
