type OmitByType<T extends Record<string, any>, K extends T[keyof T]> = {
  [key in keyof T as T[key] extends K ? never : key]: T[key];
};

type OmitBoolean = OmitByType<
  {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  },
  boolean
>; // { name: string; count: number }
