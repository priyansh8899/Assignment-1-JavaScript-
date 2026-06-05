"use strict";
/* 5. Multiplication Table with Condition
Write a program that:

Prints the table of a number (e.g., 7)
If the number is negative → show "Invalid Input."
Use for loop + if */
let num = 7;
let i;
if (num < 0) {
    console.log("Invalid Output !!! Enter the Positive Number.");
}
else {
    console.log('====================================');
    for (i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
    console.log('====================================');
}
/*
====================================
7 * 1 = 7
7 * 2 = 14
7 * 3 = 21
7 * 4 = 28
7 * 5 = 35
7 * 6 = 42
7 * 7 = 49
7 * 8 = 56
7 * 9 = 63
7 * 10 = 70
====================================
Invalid Output !!! Enter the Positive Number. */ 