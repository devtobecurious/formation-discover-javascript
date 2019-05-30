// "use strict";

var maVariableQueJaime = 8;

function afficherLaVariable(unParametre) {
    var uneAutreVariable = 'ca va ?';
    var uneVariableIntrusive = 'je suis un malin';
    console.log(unParametre, maVariableQueJaime, uneAutreVariable);

    if(true) {
        var uneVariableDansLeIf = 'test dans le if';
        console.log(uneVariableDansLeIf);
    }
    console.log(uneVariableDansLeIf);
}

afficherLaVariable('coucou');
// console.log(uneAutreVariable);
// console.log(uneVariableIntrusive);

// decouverte let et const
function utiliserLetEtConst(isOk) {
    if(isOk) {
        let uneVariable = 1;
        console.log(uneVariable);

        uneVariable = 3;

        const uneConstante = 8;
        //uneConstante = 9;
    }
    //console.log(uneVariable);
}

utiliserLetEtConst(true);


// this et scope
var prenomWookie = 'Chewie';

function afficher() {
    console.log(prenomWookie);
}

afficher();

function unTestThis() {
    console.log(this);
    setTimeout(() => {
        console.log(this);
    }, 1000);
}

unTestThis();
