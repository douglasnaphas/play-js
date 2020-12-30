type t1 = { a: () => string };
let t1a: t1 = { a: () => "ay" };
console.log(t1a.a());

type OptionType = { [string]: any };
