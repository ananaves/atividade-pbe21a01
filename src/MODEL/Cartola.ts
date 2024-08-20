export class Cartola {


//atributos
    private medida: number;
    private formato: string;
    private cor: string;

//construtor
    public constructor (_medida: number, _formato: string, _cor: string) {

        this.medida = _medida;
        this.formato = _formato;
        this.cor = _cor;


    }

//metodos GET e SET
    public getMedida(): number {
        return this.medida;
    }

    public setMedida(_medida: number): void {
        this.medida = _medida;
    }

    public getFormato(): string {
        return this.formato;
    }

    public setFormato(_formato: string): void {
        this.formato = _formato;
    } 

    public getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }

//metodo diagrama
    public  ProtegerSol(): void {
        console.log(` a cartola proteje do sol. `);
        
    }

    public TirarCoelho(): void {
        console.log(` o magico tira o coelho da cartola na sua apresentação do circo.`);
    
    }

}