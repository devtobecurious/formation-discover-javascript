"use strict";

// function parent(enfant) {
//     console.log('2', this);

//     return function () {
//         this.name = 'coucou';
//         return this;
//     };
// }

// // we need to define a context, with "use strict", without : this will be undefined
// var par = window.parent(() => {
//     console.log('1.', this);
// });

// console.log(window.par()); // OK : same context : window


// -------
const context1 = {
    name: 'Wookie',
    size: 2.5
};

const name = 'Yoda';

function callThis() {
    console.log(this.name);
}

window.callThis();
window.callThis.call(context1);