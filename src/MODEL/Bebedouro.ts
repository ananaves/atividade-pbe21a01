export class Bebedouro {


//atributos
    private capacidade: number;
    private tipo: string;
    private material: string;

//construtor
    public constructor (_capacidade: number, _tipo: string, _material: string) {

        this.capacidade = _capacidade;
        this.tipo = _tipo;
        this.material = _material;


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

    public getMaterial(): string {
        return this.material;
    }

    public setMaterial(_material: string): void {
        this.material = _material;
    }

//metodo diagrama
    public  beberAgua(): void {
        console.log(` para você beber água no bebedouro, precisa apetar na lateral. `);
        
    }

    public conservarTemperatura(): void {
        console.log(` a água do bebedouro está geladinha para esse calor!!  `);
    
    }

}