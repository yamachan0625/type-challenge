// type MapTypes<
//   T extends { [key in string]: any },
//   U extends { mapFrom: any; mapTo: any }
// > = { [key in keyof T]: T[key] extends U["mapFrom"] ? U["mapTo"] : T[key] };

type MapTypes<T, R extends { mapFrom: any; mapTo: any }> = {
  [K in keyof T]: T[K] extends R["mapFrom"]
    ? R extends { mapFrom: T[K] } // Rがunionであるためこのチェックも必要？
      ? R["mapTo"]
      : never
    : T[K];
};

type StringToNumber = { mapFrom: string; mapTo: number };
type MapTypes1 = MapTypes<{ iWillBeANumberOneDay: string }, StringToNumber>; // gives { iWillBeANumberOneDay: number; }

type StringToDate = { mapFrom: string; mapTo: Date };
type MapTypes2 = MapTypes<
  { iWillBeNumberOrDate: string },
  StringToDate | StringToNumber
>; // gives { iWillBeNumberOrDate: number | Date; }

type MapTypes3 = MapTypes<
  { iWillBeANumberOneDay: string; iWillStayTheSame: Function },
  StringToNumber
>; // // gives { iWillBeANumberOneDay: number, iWillStayTheSame: Function }
