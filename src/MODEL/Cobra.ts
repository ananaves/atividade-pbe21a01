export class Cobra {


//atributos
    private tamanho: number;
    private especie: string;
    private cor: string;

//construtor
    public constructor (_tamanho: number, _especie: string, _cor: string) {

        this.tamanho = _tamanho;
        this.especie = _especie;
        this.cor = _cor;


    }

//metodos GET e SET
    public getTamanho(): number {
        return this.tamanho;
    }

    public setTamanho(_tamanho: number): void {
        this.tamanho = _tamanho;
    }

    public getEspecie(): string {
        return this.especie;
    }

    public setEspecie(_especie: string): void {
        this.especie = _especie;
    } 

    public getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }

//metodo diagrama
    public  rastejar(): void {
        console.log(`a cobra rasyeja no chão da floresta. `);
        
    }

    public picar(): void {
        console.log(` a cobra pica, cuidado!!  `);
    
    }

}