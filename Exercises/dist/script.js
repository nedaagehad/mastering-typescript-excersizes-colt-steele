"use strict";
function sum(a, b) {
    return a + b;
}
function returnRandomItem(arr) {
    const randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
}
