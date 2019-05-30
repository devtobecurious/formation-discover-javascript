
var reponse = confirm('Alors ca va toujours ?');

if(reponse) {
    console.log('Ah oui, il va bien !');
} else {
    console.log('Ah flute, que pasa ?');
}

var resultat = reponse ? console.log('Ternaire ok') : 
                         console.log('pas ok');


var reponseTextuelle = prompt('Quel âge as-tu ?');
switch (reponseTextuelle) {
    case '18':
        console.log('Tu es trop jeune !');
        break;

        case 25:
            console.log('Tu es trop jeune !');
        break;

    default:
        console.log('Tu es trop vieux !');
        break;
}

// est-ce égal ?
var var1 = 1;

console.log(var1 == 1);
console.log(var1 === 1);

console.log(var1 == '1');
console.log(var1 === '1');

