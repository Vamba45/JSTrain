"use strict";

console.log("first message");

(function LIFE() {
    var a = 15;

    console.log("LIFE in code");
})();

a = "change var outside LIFE";

console.log(a);