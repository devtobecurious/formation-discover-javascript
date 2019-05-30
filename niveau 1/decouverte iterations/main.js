var unTableau = ['han solo', 'obi wan', 'anakin skywalker'];

for (var index = 0; index < unTableau.length; iex++) {
    var element = unTableau[index];
    
    console.log("element", element);
}


var i = 0;
while(i < unTableau.length) {
    console.log(unTableau[i]);

    i ++;
}
unTableau.forEach(function(element, index) {
    console.log(element);
});

var uneFonction = function(element) {
    console.log(element);
};

unTableau.forEach(uneFonction);

