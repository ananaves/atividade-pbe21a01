 export class Banco {


//atributos
    private tamanho: number;
    private material: string;
    private formato: string;

//construtor
    public constructor (_tamanho: number, _material: string, _formato: string) {

        this.tamanho = _tamanho;
        this.material = _material;
        this.formato = _formato;


    }

//metodos GET e SET
    public getTamanho(): number {
        return this.tamanho;
    }

    public setVelocidade(_tamanho: number): void {
        this.tamanho = _tamanho;
    }

    public getMaterial(): string {
        return this.material;
    }

    public setMaterial(_material: string): void {
        this.material = _material;
    } 

    public getFormato(): string {
        return this.formato;
    }

    public setFormato(_formato: string): void {
        this.formato = _formato;
    }

//metodo diagrama
    public  Sentar(): void {
        console.log(` depois de um longo dia de trabalho, sentamos no banco para descansar. `);
        
    }

    public Subir(): void {
        console.log(` ao subir no banco, consegui pegar a caixa em cima da geladeira.  `);
    
    }

}