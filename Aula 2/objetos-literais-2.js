const pessoa = {
    nome: "Fulano",
    idade: 30,
    altura: 1.80,
    peso: {
        atual: 90,
        calorias: 0
    },
    engorda: function(){
        while (this.peso.calorias == 7000) {
            this.peso.atual += 1;
            this.peso.calorias -= 7000;
        }  
    },
    emagrece: function(){
        while (this.peso.calorias == -7000) {
            this.peso.atual -= 1;
            this.peso.calorias += 7000;
        }
    },
    comer: function(){
        this.peso.calorias += 1000;
        this.engorda();
        return `Peso: ${this.peso.atual}, calorias: ${this.peso.calorias}`
    },
    treinar: function(){
        this.peso.calorias -= 1000;
        this.emagrece();
        return `Peso: ${this.peso.atual}, calorias: ${this.peso.calorias}`
    }
}

console.log(pessoa);
