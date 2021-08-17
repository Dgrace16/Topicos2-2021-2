import { log } from "console";
import { Console } from "node:console";

const isValid: boolean = true;
// variável Boolean True e false
const actualYear: number = 2020;
// variável tipo numero ela pode ser int, float e demais numéricas
const aula: string = "Iniciando com Typescript";
// Tipo string cadeia de caracteres

let idade: any; // aceita qualquer valor
idade = 18;
idade = "Dezoito"

// vetores ou arreys

const meses: string[] = ["Janeiro", "fevereiro", "março", "abril", "julho"];
console.log(meses);


const frutas: Array<string> = ["Laranja", "tomate", "maracuja"];
 console.log(frutas);
 
// tupla 

const aluno: [String, number] =  ["D.Grace", 21]
console.log(aluno);

// numeração de variáveis 
enum Tecnologias {
    Node, 
	Typescript, 
	TypeORM,
  Docker
}

console.log(Tecnologias.Node);


interface aluno {
nome: string,
idade:number,
publica: boolean,
notas: number[]
calculaMedia():void
}

const aluno1 = {
    nome:"Douglas",
    idade: 21,
    publica: true,
    notas: [6,7,8,9],
    calculaMedia(){
        let soma = (acumulador: number,numero:number)=> acumulador + numero;
        console.log(this.notas.reduce(soma)/this.notas.length)
        
    }
}

console.log(aluno1);
console.log(aluno1.calculaMedia());

// criando interface em typeScript
interface Saudacao {
    bomDia(mensagem: string): void // função não retorna nada
    boaTarde(mensagem: string): void // função não retorna nada
    boaNoite(mensagem: string): void // função não retorna nada
}
class Superior{
    protected titulacao: string;

    constructor(titulacao: string){
        this.titulacao = titulacao;

    }
} 
// criar classe que implementa a interface Saudação
class Professor extends Superior implements Saudacao{
    private  nome: string;

    constructor(nome:string, titulacao: string) {
        super(titulacao); // Chama construtor da Superclasse
        this.nome = nome;
    }
    // criar métodos da interface 
    bomDia(mensagem: string): void {
        console.log(`${mensagem}, querido ${this.nome} com titulação ${this.titulacao}`)
    }
    boaTarde(mensagem: string): void {
        console.log(`${mensagem}, querido ${this.nome} com titulação ${this.titulacao}`)
    }
    boaNoite(mensagem: string): void {
        console.log(`${mensagem}, querido ${this.nome} com titulação ${this.titulacao}`)
    }

}

// exemplo
let obj1 = new Professor("Daniel", "Doutor")
obj1.bomDia("Bom dia...")
obj1.boaTarde("Boa tarde...")
obj1.boaNoite("Boa Noite...")
