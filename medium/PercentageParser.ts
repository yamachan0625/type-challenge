type PString1 = "";
type PString2 = "+85%";
type PString3 = "-85%";
type PString4 = "85%";
type PString5 = "85";

// type PercentageParser<T> = T extends `${infer U}${infer V}%`
//   ? [U extends "+" | "-" ? U : "", V, "%"]
//   : ["", T, ""];

type CheckPrefix<T> = T extends "+" | "-" ? T : never;
type CheckSuffix<T> = T extends `${infer P}%` ? [P, "%"] : [T, ""];
type PercentageParser<A extends string> = A extends `${CheckPrefix<
  infer L
>}${infer R}`
  ? [L, ...CheckSuffix<R>]
  : ["", ...CheckSuffix<A>];

type R1 = PercentageParser<PString1>; // expected ['', '', '']
type R2 = PercentageParser<PString2>; // expected ["+", "85", "%"]
type R3 = PercentageParser<PString3>; // expected ["-", "85", "%"]
type R4 = PercentageParser<PString4>; // expected ["", "85", "%"]
type R5 = PercentageParser<PString5>; // expected ["", "85", ""]
