const reg = /\w+: (Cleidson|Milena)/; // Nome: O nome...

console.log(reg.test("Nome: Cleidson"));
console.log(reg.test("Nome: Milena"));
console.log(reg.test("Nome: Fias"));