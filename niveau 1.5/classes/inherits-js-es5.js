function Animal() {
    this.nbPattes = 4;
}

Animal.prototype.dormir = function() {
    console.log('je dors');
}

function Gorille() {
    Animal.call(this); // calling super, without this : this.nbPattes will not exist
}

//Gorille.prototype = Animal.prototype;
Gorille.prototype = Object.create(Animal.prototype); // better way

console.log('1-0', Gorille.prototype);
console.log('2-0', Gorille.prototype.constructor);

Gorille.prototype.constructor = Gorille; // to stau a gorille woth new

console.log('1-1', Gorille.prototype);
console.log('2-1', Gorille.prototype.constructor);


// override parent method
Gorille.prototype.dormir = function() {
    Animal.prototype.dormir.call(this);
    console.log(' go to sleep');
}

const chita = new Gorille();
chita.dormir();

console.log('chita.nbPattes', chita.nbPattes);


