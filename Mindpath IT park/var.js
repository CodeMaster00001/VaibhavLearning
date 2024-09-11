//The var statement is used to declare a variable in JavaScript. A variable declared with the var keyword is defined throughout the program.
var greeter="hey hi";
var times=5;
if(times>3){
var greeter="I am the new statement of greeter in place of 'hey hi' ";
console.log(greeter);
}
console.log(greeter);

// Example (With Function Scope)
function testVar() {
    var x = 10;
    if (true) {
        var x = 20;  // Same variable, `x` is re-assigned
        console.log(x); // 20
    }
    console.log(x); // 20 (function-scoped)
}
testVar();


console.log(a); // undefined (hoisted, but not initialized)
var a = 5;


//using Var in loop
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);  // Logs 3, 3, 3 (due to function scope of `var`)
    }, 1000);
}


var count = 10;
for (var i = 0; i < count; i++) {
    if (i % 2 === 0) {
        console.log("Even:", i);
    }
}

