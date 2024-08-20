export class Moto {


//atributos
    private modelo: string;
    private velocidade: number;
    private capacidadeDoTanque: number;

//construtor
    public constructor (_velocidade: number, _capacidadeDoTanque: number, _modelo: string) {

        this.velocidade = _velocidade;
        this.capacidadeDoTanque = _capacidadeDoTanque;
        this.modelo = _modelo;


    }

//metodos GET e SET
    public getVelocidade(): number {
        return this.velocidade;
    }

    public setVelocidade(_velocidade: number): void {
        this.velocidade = _velocidade;
    }

    public getcapacidadeDoTanque(): number {
        return this.capacidadeDoTanque;
    }

    public setcapacidadeDoTanque(_capacidadeDoTanque: number): void {
        this.capacidadeDoTanque = _capacidadeDoTanque;
    } 

    public getmodelo(): string {
        return this.modelo;
    }

    public setmodelo(_modelo: string): void {
        this.modelo = _modelo;
    }

//metodo diagrama
    public  Acelerar(): void {
        console.log(` a moto acelera e fica em alta velocidade. `);
        
    }

    public frear(): void {
        console.log(`quando a moto estiver com alta velocidade, você precisa frear. `);
    
    }

}