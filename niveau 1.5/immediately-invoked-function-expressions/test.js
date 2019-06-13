/// bad prob
for(var index = 0 ; index < 5 ; index++) {
    setTimeout(function() {
        console.log(index + "with side effect", index);
    }, 1000);
}

function recreateLocalScope(localIndex) {
    return function() {
        console.log("no side effect", localIndex);
    };
}

for(var index = 0 ; index < 5 ; index++) {
    setTimeout(recreateLocalScope(index), 1000);
}


// Immediately invoked function expressions, aka IIFE
// https://www.dotprogs.com/function-iife-usages-javascript/

const funct = (function() {
    console.log("i'm loggin");
})();

(function() {
    console.log('hey again ?');
})();

(function(jediName) {
    console.log(`${jediName} use the force`);
})('yoda');
