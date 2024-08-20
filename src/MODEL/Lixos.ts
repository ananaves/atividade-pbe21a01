export class Lixos {


//atributos
    private cor: string;
    private formato: string;
    private tipo: string;

//construtor
    public constructor (_tipo: string, _formato: string, _cor: string) {

        this.tipo = _tipo;
        this.formato = _formato;
        this.cor = _cor;


    }

//metodos GET e SET
    public gettipo(): string {
        return this.tipo;
    }

    public settipo(_tipo: string): void {
        this.tipo = _tipo;
    }

    public getformato(): string {
        return this.formato;
    }

    public setformato(_formato: string): void {
        this.formato = _formato;
    } 

    public getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }

//metodo diagrama
    public  reciclarMateriais(): void {
        console.log(` separamos o lixo para a reciclagem. `);
        
    }

    public minimizarImpactosAoMeioAmbiente(): void {
        console.log(`jogamos lixo no lixo para que possamos minimizar alguns impactos ao meio amboente. `);
    
    }

}