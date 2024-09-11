// A variable declared with the let keyword is limited to the block-scoped only.
let greeter = "hey hi";  
let times = 5;  
if (times > 3) {  
   let hello = " Hello Vaibhav";   
   console.log(hello) // Output: Say Hello JavaTpoint  
//    let greeter="hello sir ji"
//    console.log(greeter);
}  
// Compile error: greeter is not defined  
//console.log(hello) 
 console.log(greeter);

// Example (With Block Scope)
 function testLet() {
    let x = 10;
    if (true) {
        let x = 20;  // Different variable (block-scoped)
        console.log(x); // 20
    }
    console.log(x); // 10 (outer block)
}
testLet();


//console.log(b); // Error: Cannot access 'b' before initialization
let b = 10;

//using let in loop
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);  // Logs 0, 1, 2 (due to block scope of `let`)
    }, 1000);
}


//in condition(if/else)
let score = 85;
if (score >= 90) {
    let grade = "A";
} else if (score >= 80) {
    let grade = "B";
}
console.log(grade);  // Error: `grade` is block-scoped

