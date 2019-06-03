const monObjet = {
    name: 'dark vador',
    color: 'black'
};

var name = 'luke';

function appelerName() {
    console.log(this.name, this);
}

window.appelerName();
appelerName();

window.appelerName.call(monObjet);