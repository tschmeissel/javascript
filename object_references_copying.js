// https://javascript.info/object-copy
// primitives get copied by value
let statement: boolean = true;
let o = { a: 1, b: statement };
console.log(o);
// has no effect to o.b because primitives get copied by value
statement = false;
console.log(o);

let p = { name: 'Hansen', context: {} };
p.context = o;
console.log(p);
console.log("p.context ? o", p.context === o)
// fails because of type checking
//p = {...p, o}
// works and copies o by value
//p = Object.assign(p, o)
// works and would copy by reference
p = Object.assign(p, { o: o});
o.a = 2;
console.log(p);
