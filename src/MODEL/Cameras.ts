export class Cameras {


//atributos
    private tipo: string;
    private formato: string;
    private capacidade: number;

//construtor
    public constructor (_capacidade: number, _tipo: string, _formato: string) {

        this.capacidade = _capacidade;
        this.tipo = _tipo;
        this.formato = _formato;


    }

//metodos GET e SET
    public getCapacidade(): number {
        return this.capacidade;
    }

    public setCapacidade(_capacidade: number): void {
        this.capacidade = _capacidade;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(_tipo: string): void {
        this.tipo = _tipo;
    } 

    public getFormato(): string {
        return this.formato;
    }

    public setFormato(_formato: string): void {
        this.formato = _formato;
    }

//metodo diagrama
    public  gravar(): void {
        console.log(` gravamos um video e postamos no instagram!! `);
        
    }

    public tirarFoto(): void {
        console.log(` vamos tirar uma foto na sua camera! `);
    
    }

}