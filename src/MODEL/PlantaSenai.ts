export class PlantaSenai {


//atributos
    private tamanho: number;
    private material : string;
    private funsao: string;

//construtor
    public constructor (_tamanho: number, _material: string, _funsao: string) {

        this.tamanho = _tamanho;
        this.material = _material;
        this.funsao = _funsao;


    }

//metodos GET e SET
    public gettamanho(): number {
        return this.tamanho;
    }

    public settamanho(_tamanho: number): void {
        this.tamanho = _tamanho;
    }

    public getmaterial(): string {
        return this.material;
    }

    public setmaterial(_material: string): void {
        this.material = _material;
    } 

    public getfunsao(): string {
        return this.funsao;
    }

    public setfunsao(_funsao: string): void {
        this.funsao = _funsao;
    }

//metodo diagrama
    public  Destilar(): void {
        console.log(` a plante destila o alcool. `);
        
    }

    public fabricaEtanol(): void {
        console.log(` a planta fabrica etanol. `);
    
    }

}