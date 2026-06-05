/* 9. Fibonacci Series with Limit
Write a program that:

Prints the Fibonacci series up to N terms
Example: 0, 1, 1, 2, 3, 5...
Use for loop */

let a:number = 0;
let b:number = 1;
let n:number = 10;
let i:number;
for(i = 1; i <= n; i++){
    console.log(a);
    let c:number = a + b; 
    a = b;
    b = c;
}

/* 0
1
1
2
3
5
8
13
21
34 */