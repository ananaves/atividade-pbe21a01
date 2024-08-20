export class Freezer {


//atributos
    private tamanho: number;
    private temperatura: number;
    private tipo: string;

//construtor
    public constructor (_tamanho: number, _temperatura: number, _tipo: string) {

        this.tamanho = _tamanho;
        this.temperatura = _temperatura;
        this.tipo = _tipo;


    }

//metodos GET e SET
    public getTamanho(): number {
        return this.tamanho;
    }

    public setTamanho(_tamanho: number): void {
        this.tamanho = _tamanho;
    }

    public getTemperatura(): number {
        return this.temperatura;
    }

    public setTemperatura(_temperatura: number): void {
        this.temperatura = _temperatura;
    } 

    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(_tipo: string): void {
        this.tipo = _tipo;
    }

//metodo diagrama
    public  gelar(): void {
        console.log(` o frezeer gela as bebidas. `);
        
    }

    public congelarAgua(): void {
        console.log(` usamos o freezer para congelar a água e conseguimos fazer gelo. `);
    
    }

}