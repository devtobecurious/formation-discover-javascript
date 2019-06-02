"use strict";


let animal = {
    type: 'animal',
    legs: 2,
    name: 'wtf',

    sleep() {
        console.log(`${this.name} I'm sleeping ${this.type}`);
    }
};

let protoAnimal = Object.create(animal);
console.log(protoAnimal);

let cat = Object.assign(protoAnimal, {
    type: 'god',
    legs: 4,
    name: 'catty'
});

cat.sleep(); // here the cat sleep;

console.log(cat);

try {
    let cat2 = Object.assign(null, {
        type: 'god',
        legs: 4,
        name: 'catty'
    });
    console.log(cat2); 
} catch (error) {
    console.log('not run, due to null from assign', error);
}

try {
    let cat3 = Object.assign({}, {
        type: 'god',
        legs: 4,
        name: 'catty'
    });
    console.log(cat3); 

    cat3.sleep(); // sleep doesn't exist !
} catch (error) {
    console.log('not run, ', error);
}


// how to create a factory function
let factory = function factoryFunction() {
    let secretItem = 'am i secret ?';

    return Object.assign(Object.create(animal), {
        type: 'god',
        legs: 4,
        name: 'catty',
        discoverSecret : function() {
            console.log(secretItem);
        }
    });
};

let itemCatty = factory.call(this);
itemCatty.discoverSecret();


/// Create by prototype
function Robot(name, matricule) {
    let robot = Object.create(Robot.prototype);

    robot.name = name;
    robot.matricule = matricule;

    return robot;
}

let unRobot = Robot('C3P0', 'C3');
console.log(unRobot);

// same as : 
function Robot2(name, matricule) {
    this.name = name;
    this.matricule = matricule;
}
let unRobot2 = new Robot2('C3P0', 'C3');
console.log(unRobot);

