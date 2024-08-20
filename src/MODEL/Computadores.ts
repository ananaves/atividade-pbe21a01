export class Computadores {


//atributos
    private atualizacao: number;
    private polegada: number;
    private marca: string;

//construtor
    public constructor (_atualizacao: number, _polegada: number, _marca: string) {

        this.atualizacao = _atualizacao;
        this.polegada = _polegada;
        this.marca = _marca;


    }

//metodos GET e SET
    public getAtualizacao(): number {
        return this.atualizacao;
    }

    public setAtualizacao(_atualizacao: number): void {
        this.atualizacao = _atualizacao;
    }

    public getPolegada(): number {
        return this.polegada;
    }

    public setPolegada(_polegada: number): void {
        this.polegada = _polegada;
    } 

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(_marca: string): void {
        this.marca = _marca;
    }

//metodo diagrama
    public  estudar(): void {
        console.log(`o aluno está usando o computador para estudar.`);
        
    }

    public pesquisar(): void {
        console.log(` o aluno precisou pesquisar no computador para a tarefa. `);
    
    }

}