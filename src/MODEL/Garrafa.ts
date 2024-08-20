export class Garrafa {


//atributos
    private capacidade: number;
    private marca: string;
    private material: string;

//construtor
    public constructor (_capacidade: number, _marca: string, _material: string) {

        this.capacidade = _capacidade;
        this.marca = _marca;
        this.material = _material;


    }

//metodos GET e SET
    public getCapacidade(): number {
        return this.capacidade;
    }

    public setCapacidade(_capacidade: number): void {
        this.capacidade = _capacidade;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(_marca: string): void {
        this.marca = _marca;
    } 

    public getMaterial(): string {
        return this.material;
    }

    public setMaterial(_material: string): void {
        this.material = _material;
    }

//metodo diagrama
    public  conservatemperatura(): void {
        console.log(`a garrafa termica, consegue conservar a temperatura da sua bebida. `);
        
    }

    public reservaAgua(): void {
        console.log(` a garrafa reverva água. `);
    
    }

}