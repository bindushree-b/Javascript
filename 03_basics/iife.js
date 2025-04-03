// immdeiately invoked function expression(iife)
(function chi(){
    // named IIFE
    console.log(`DB CONNECTED`)
})();

// ()()

( (name) => {
    console.log(`DB CONNECTED Two ${name}`)
})('bindu')