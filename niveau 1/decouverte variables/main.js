var maVariable = 12;

console .log('La valeur est ', maVariable);

maVariable = '12';

console .log('La valeur est ', maVariable);


maVariable = 'coucou';
console .log('La valeur est ', maVariable);


var maData = new Date();
console .log('La valeur est ', maData);

maData = new Date(1983, 9, 25);
console .log('Ma date de naissance est ', maData);

maData.setDate(12);

console.log(maData.getDate());

console.log(maData.toLocaleDateString('ko-KR'));



maVariableSansVar = 13;

var maVariableSansVar = 14;

console.log(maVariableSansVar);

// undefined ici
var uneVar;
console.log(uneVar);


uneVarEntiere = parseInt( prompt('Un chiffre svp') );
console.log(uneVarEntiere); // si pas nombre : NaN

if(Number.isInteger(12.0003)) {
    console.log('Pas un nombre');
}


var uneChaine = 'coucou' + ' ca va ?';
uneChaine += maVariableSansVar + '.';



// Interpolation 
var uneChaine2 = `coucou cava ${maVariableSansVar}. ${uneVarEntiere}`;


