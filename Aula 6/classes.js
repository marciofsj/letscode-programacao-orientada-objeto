//Construa uma classe para gerar um objeto TV com as propriedades canal, volume e ligada e métodos liga, desliga, mudaDeCanal e aumentaVolume, diminuiVolume.

class Televisao {
    constructor() {
        this.ligada = false;
        this.canal = 0;
        this.volume = {
            min: 0,
            max: 10,
            atual: 0
        }
    }

    ligar() {
        return this.ligada = true;
    }
    
    desligar() {
        return this.ligada = false;
    }

    aumentaVolume() {
        if (this.ligada && this.volume.atual < this.volume.max) {
            ++ this.volume.atual
        }
        return this.volume.atual;
    }

    diminuiVolume() {
        if (this.ligada && this.volume.atual > this.volume.min) {
            -- this.volume.atual
        }
        return this.volume.atual;
    }

    mudaDeCanal(n) {
        if (this.ligada && n == 1){
            this.canal = "NationalGeografic";
            return this.canal;
        } else if (this.ligada && n == 2) {
            this.canal = "AnimalPlanet";
            return this.canal;
        } else if (this.ligada && n == 3) {
            this.canal = "Smithsonian";
            return this.canal;
        } else if (this.ligada && n == 4) {
            this.canal = "Discovery";
            return this.canal;
        } else {
            return "Sem sinal"
        }
    }
}

const samsung = new Televisao();
console.log(samsung)


//console.log(samsung.ligar())
//console.log(samsung.mudaDeCanal())
//console.log(samsung.aumentaVolume())
