"use strict";

// Event loop

console.log("log 1")

setTimeout(() => console.log("from STO"));

Promise.resolve().then(() => console.log("2"));
Promise.resolve().then(() => console.log("2_"));
Promise.resolve().then(() => setTimeout(console.log("3 time")));
Promise.resolve().then((() => console.log("4")));
Promise.resolve().then(() => console.log("4_"));

console.log("log 5")