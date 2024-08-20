export class Extintor {


//atributos
    private tipo: string;
    private tamanho : number;
    private peso: number;

//construtor
    public constructor (_tipo: string, _tamanho: number, _peso: number) {

        this.tipo = _tipo;
        this.tamanho = _tamanho;
        this.peso = _peso;


    }

//metodos GET e SET
    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(_tipo: string): void {
        this.tipo = _tipo;
    }

    public getTamanho(): number {
        return this.tamanho;
    }

    public setTamanho(_tamanho: number): void {
        this.tamanho = _tamanho;
    } 

    public getPeso(): number {
        return this.peso;
    }

    public setPeso(_peso: number): void {
        this.peso = _peso;
    }

//metodo diagrama
    public  apagarFogo(): void {
        console.log(` precisamos do extintor para conseguir apagar o fogo!! `);
        
    }

    public controlarFogo(): void {
        console.log(` com o extintor conseguimos controlar o fogo. `);
    
    }

}