"use strict";


/// using call to set the context of this

var uneClass = function uneFonction(checkNumber) {
    console.log(checkNumber);
    console.log('1' + '_' + (checkNumber ? checkNumber : ''), this instanceof uneFonction, this);

    return function() {
        console.log('2', this instanceof Window); // here this is window
    };
};

(function uneAutreFonction() {
    console.log('3', this instanceof Window);
}).call(this);

const unObjet = new uneClass();
unObjet.call(this); // here, we define the Window context
unObjet.call(unObjet); // here, we define the unObjet context


/// using bind to set the context
const callingOne = uneClass.bind(this, 10); // bind to this will be Window
console.log('callingOne');
callingOne()(); // call instance and returning function


