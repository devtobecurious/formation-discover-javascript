"use strict";

const obj1 = {
    a: 1,
};

const obj2 = {
    a: 2,
    b: 3
}


const obj = Object.assign({}, obj1, obj2);

console.log(obj.a, obj.b);