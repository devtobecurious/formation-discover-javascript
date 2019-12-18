// 1° façon de créer un objet
// ici, voulu var : pour montrer après l'inteeret du const
var wookie = function (name) {
    this.name = name;
};

// façon d'ajouter une méthode à une classe
wookie.prototype.hurler = function () {
    console.log('roaaar');
};

wookie.prototype.donnerTaille = function () {
    return 3.50; // Attention, c'est du hard coding ici : la taille est fixé pour tout jamais
};

// ajout d'un nouvel attribut
wookie.prototype.nombreDePoils = 350000;

var monObjet = new wookie('chewie');
var monSecondObjet = new wookie('turloff');

console.log(monObjet.name);
console.log(monSecondObjet.name);

monObjet.hurler();

console.log(monObjet.nombreDePoils);
console.log(monObjet.donnerTaille());


// --------------------------------------------
// 2° façon : façon json
// https://fr.wikipedia.org/wiki/JavaScript_Object_Notation
// instancié et déclaré en même temps
var jedi = {
    name: 'luke',
    manierSabre: function () {
        console.log('Je sais manier le sabre');
    }
};
jedi.manierSabre();

// ajout d'une nouvelle méthode à l'objet
jedi.utiliserLaForce = function () {
    console.log('Vive la force !');
};
jedi.utiliserLaForce();

// on crée une instance et une seule d'un objet, sans attribut ni méthode
// on va les ajouter après
const unObjetVide = {};

// ici, on ajoute une nouvelle méthode et en plus
// on utilise les lambdas
unObjetVide.voler = () => {
    console.log('I believe I can fly');
    // attention ici, le this c'est le window ! :O
};
unObjetVide.voler();


// recupérer un objet depuis une chaine json
// les guillemets autour de name sont obligatoires
var objetParse = JSON.parse('{ "name": "coucou" }');
console.log(objetParse.name);

// ----------------------------------------------------
// 3° façon : version ES6 (ECMA 6)
class Vaisseau {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }

    // méthode publique : plus besoin de function
    fly() {
        console.log(`${this.name} vole`);
        console.log(name); // ca fait quoi ici ??
    }

    // getter :  renvoie soit l'attribut : encapsulation, et peut améliorer l'attribut avant renvoie
    get monNom() {
        return this.name + '...';
    }
    set monNom(value) {
        this.name = value;
    }
}
const monVaisseau = new Vaisseau('X-Wing', 120);
monVaisseau.fly();

monVaisseau.monNom = 'ma Valeur';
console.log(monVaisseau.monNom);

// ne fonctionne pas
//monVaisseau = new Vaisseau('', 19);

let monVaisseau2 = new Vaisseau();
monVaisseau2 = new Vaisseau();


// 4° façpn de créer un objet en js
var monObjetCree = Object.create(null);
monObjetCree.direBonjour = function () {
    console.log('hello');
};

monObjetCree.direBonjour();

// Tester la création d'un vaisseau bis avec 
// le prototype de la classe Vaisseau ?


// heritage
class Vaisseau3 extends  Vaisseau {

}

const vais3 = new Vaisseau3('e', 12);

class Vaisseau2 extends Vaisseau {
    constructor(name, size, color) {
        super(name, size);
        this.color = color;
    }

    // override : polymorphisme
    fly() {
        super.fly();
        console.log('I believe I can fly again');
    }
}

const unVaisseauEnfant = new Vaisseau2('Falcon', 120, 'blue');
unVaisseauEnfant.fly();


// try catch
try {
    //throw new Error('error');
    throw "une exception";
} catch (error) {
    console.log(error);
} finally {
    // traitement final
}

// parcours des propriétés
const jarjar = {
    nom: 'binks',
    nbOreilles: 2
};

for (var maPropriete in jarjar) {
    console.log(maPropriete);
    console.log(jarjar[maPropriete]);
}


class Timer {
    execute(duration, callback) {
        setTimeout(() => {
            // pas mal de code
            console.log(`je lance du code après ${duration} `);

            callback();

        }, duration * 1000);
    }
}

const unTimer = new Timer();
unTimer.execute(2, () => {
    console.log('exécutée, après !');
});

unTimer.execute(3, function () {
    console.log('exécutée, après !');
});


var unObj = {};

// code qui fonctionne
// unObj.uneNouvellMethode = () => {
//     alert('coucou');
// };

// unObj.uneNouvellMethode();

// code qui ne fonctionne pas
// unObj = Object.create(null).uneNouvellMethode = () => {
//     alert('coucou');
// };

// code qui fonctionne : en 2 étapes
unObj = Object.create(null);
unObj.uneNouvellMethode = () => {
    alert('coucou');
};

unObj.uneNouvellMethode();