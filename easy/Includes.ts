// Includesを実装してください
type Includes<Arr extends any[], K extends string> = K extends Arr[number] ? true:false
type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Santana">; // expected to be `false`
