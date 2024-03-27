type StringInfer<T> = T extends `${infer U}${infer V}` ? U : never;

type StringInfer_ABC = StringInfer<"ABC">; // "string"
type StringInfer_123 = StringInfer<"">;
