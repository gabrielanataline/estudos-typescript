//tipagem implicita 
let teste ='exemplo de String'
// teste = 885
//erro porque acia essa variável receber um valor do tipo string e a baixo atribuo um valor numérico a essa variável.


//tipagem explicita
let pi: number = 85.24
let teste1: string = 'rrgww'
let logado: boolean = false
let exemplo1: boolean[] = [false, true, false, true]


//union types
let rg:number|boolean = 457
//aceita um tipo ou outro


let nome: string[] = ["oi", "testando", "1234"];
nome = ["aaaa", "testando"];


type observeType = {
    nome:string;
    idade:number;
    sexo?:string; //? informa que não é um campo obrigatório
}

let observe: observeType = {
    nome: 'Gabriela',
    idade: 28,
    sexo: 'F'
}
let observe1: observeType = {  
    nome: 'Gabriela',
    idade: 28,
    
}

//objeto, que recebe um array de objetos;

let observe2: observeType[] =[
    { 
    nome: 'Gabriela',
    idade: 28,
    sexo: 'F'
    }
]
let observe3: observeType[] =[
    { 
    nome: 'Gabriela',
    idade: 28,

    }
]


//array qye recebem um valor ou outro
let teste2: any[]=
[{
    a: 358,
    b: "teste",
    c: true
},
{
    d:true,
    e:false
},
{
    a: 2555,
    b: 4322
}]

let exemplo2: boolean[] = []
exemplo2:[true,false,false,true]

let exemplo3: boolean[] = [true,false,false,true]


const exemploArrayString : string[] = ['João', "Maria", 'José']
exemploArrayString.push('Roberta')

const exemploArrayNumericos: number[] = [1,2,3,4,5]

const exemploArrayGuardarMaisDeUmValor: Array<number|string> = [1, 2, 3, 'Gabriela', 'Gabriel']

const lista: any[] = ['dsfdf', 3, false]

const veja3: observeType[] = [{nome:'Gabriela', idade:28, sexo:'f'}]
