function somaComDelay(a, b) {

    return new Promise(resolve => {
        setTimeout(function() {
            resolve (a + b);
        }, 5000);
    })
    
};

async function resSoma(a,b,c) {

    let x = somaComDelay(a,b);
    let y = c;

    return await x + y;

};

resSoma(5,10,15).then(value => console.log(value));