export class Computador {


//atributos
    private armazenamento: number;
    private sistema: string;
    private cor: string;

//construtor
    public constructor (_armazenamento: number, _sistema: string, _cor: string) {

        this.armazenamento = _armazenamento;
        this.sistema = _sistema;
        this.cor = _cor;


    }

//metodos GET e SET
    public getArmazenamento(): number {
        return this.armazenamento;
    }

    public setArmazenamento(_armazenamento: number): void {
        this.armazenamento = _armazenamento;
    }

    public getSistema(): string {
        return this.sistema;
    }

    public setSistema(_sistema: string): void {
        this.sistema = _sistema;
    } 

    public getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }

//metodo diagrama
    public  estudar(): void {
        console.log(` o aluno estuda através do computador. `);
        
    }

    public pesquisar(): void {
        console.log(` o aluno pesquisa no computador sobre seu trabalho da escola. `);
    
    }

}