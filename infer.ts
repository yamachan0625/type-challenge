type StringInfer<T> = T extends `${infer U}${infer V}`
  ? "string"
  : "not string";

type StringInfer_ABC = StringInfer<"ABC">; // "string"
type StringInfer_123 = StringInfer<"">;
