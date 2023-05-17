const cachorro = {
    raca: 'SRD',
    latir: function() {
        console.log("Au Au Au");
    },
    uivar: function() {
        console.log("Auuuuuuuuuuuuuuuuuu");
    },
    setRaca: function(raca) {
        this.raca = raca;
    },
    getRaca: function() {
        return "A raça é" + this.raca;
    }
};

console.log(cachorro.raca);

cachorro.setRaca('Pitbull');

console.log(cachorro.raca);

console.log(cachorro.getRaca());



const computador = {
    ram: ' ',
    setRam: function(ram) {
        this.ram = ram;
    },
    processador: ' ',
    setProcessador: function(processador) {
        this.processador = processador;
    },
    gpu: ' ',
    setGpu: function(gpu) {
        this.gpu = gpu;
    } 
};

computador.setRam('16gb');
console.log(computador.ram);

computador.setProcessador('Ryzen 5');
console.log(computador.processador);

computador.setGpu('RTX 4090');
console.log(computador.gpu);


const cidade = {
    bairro: ' ',
    setBairro: function(bairro) {
        this.bairro = bairro;
    }
};

cidade.setBairro('Simões Filho');
console.log(cidade.bairro);