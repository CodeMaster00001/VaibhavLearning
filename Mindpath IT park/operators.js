// Strict Equal (===)
console.log(5 === 5);      // true
console.log(5 === '5');    // false (different types)


// Equal (==)
console.log(5 == 5);      // true
console.log(5 == '5');    // true (type coercion happens)


// Not Equal (!=)
console.log(5 != '5');    // false (values are equal after coercion)
console.log(5 != 6);      // true


// Strict Not Equal (!==)
console.log(5 !== '5');   // true (different types)
console.log(5 !== 5);     // false


// Logical AND (&&)
console.log(true && true);   // true
console.log(true && false);  // false


// Logical OR (||)
console.log(true || false);  // true
console.log(false || false); // false


// Logical NOT (!)
console.log(!true);    // false
console.log(!false);   // true


// Exponentiation Operator(**)
console.log(3 ** 4);
// Expected output: 81
console.log(10 ** -2);
// Expected output: 0.01
console.log(2 ** (3 ** 2));
// Expected output: 512
console.log((2 ** 3) ** 2);
// Expected output: 64