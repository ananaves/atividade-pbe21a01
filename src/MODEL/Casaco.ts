export class Casaco {


    //atributos
        private tamanho: number;
        private tipo: string;
        private cor: string;
    
    //construtor
        public constructor (_tamanho: number, _tipo: string, _cor: string) {
    
            this.tamanho = _tamanho;
            this.tipo = _tipo;
            this.cor = _cor;
    
    
        }
    
    //metodos GET e SET
        public getTamanho(): number {
            return this.tamanho;
        }
    
        public setTamanho(_tamanho: number): void {
            this.tamanho = _tamanho;
        }
    
        public getTipo(): string {
            return this.tipo;
        }
    
        public setTipo(_tipo: string): void {
            this.tipo = _tipo;
        } 
    
        public getCor(): string {
            return this.cor;
        }
    
        public setCor(_cor: string): void {
            this.cor = _cor;
        }
    
    //metodo diagrama
        public  Vestir(): void {
            console.log(` ao vestir o casaco você ficara quentinho no frio. `);
            
        }
    
        public Tirar(): void {
            console.log(` ao tirar o casaco você ficará com frio. `);
        
        }

}