"use strict";

let some = ['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'];



function p(num) {
    if(num<=1) return false;
    let val = Math.sqrt(num);

    let ar = Array(val).fill().map((x, i) => i);
    ar.shift();
    ar.shift();
    let ar2 =ar.filter(n => n % 2 !== 0),
    ar3 =ar2.filter(n => n % 3 !== 0),
    ar4 = ar3.filter(n => n % 5 !== 0),
    ar5 = ar4.filter(n => n % 7 !== 0),
    ar6 = ar5.filter(n => n % 11 !== 0);

}

function s(num) {
    if (num <= 1) return false;
    if (num == 2) return true;

    let val = Math.sqrt(num);
    let ar = Array(Math.round(val)).fill().map((x, i) => i);
    ar.shift();
    ar.shift();
    if(num%2==0) return false;
    let ar2 =ar.filter(n => n % 2 !== 0);
    if(num%3==0) return false;
    let ar3 =ar2.filter(n => n % 3 !== 0);
    if(num%5==0) return false;
    let ar4 = ar3.filter(n => n % 5 !== 0);
    if(num%7==0) return false;
    let ar5 = ar4.filter(n => n % 7 !== 0);
    if(num%11==0) return false;
    let ar6 = ar5.filter(n => n % 11 !== 0);
    console.log(ar6);
    for (let i of ar) {
        if (num%i ==0) return false;
    } return true;
}


console.log(s(344213809));