// let pessoa ={
//     nome: 'Pietro',
//     idade: 22,
//     altura: 1.8,
//     cpf: '111.111.111-11',
//     solteir:false,
//     habilidades:['Java', 'Angular', 'TypeScript', 'JavaScript', 'Node.js', 'Spring Boot'],
//     endereco: {
//         rua: 'Rua Feliz',
//         numero: 567,
//         estado: 'CE',
//         complmento: 'Sem complemento',
//         cep: '00000-000'

//     }
// }

// let pessoa2 = {
//     nome: 'Pietro',
//     idade: 22,
//     altura: 1.8,
//     cpf: '111.111.111-11',
//     solteir:false,
//     habilidades:['Java', 'Angular', 'TypeScript', 'JavaScript', 'Node.js', 'Spring Boot'],
//     endereco: {
//         rua: 'Rua Feliz',
//         numero: 567,
//         estado: 'CE',
//         complmento: 'Sem complemento',
//         cep: '00000-000'

//     }
//     rg: '43234534532'
// }


//criando interface no typescript 
//todos elementos criados a partir da interface, precisam ter as mesmas informações

//Interfaces, nas palavras mais simples, descrevem a estrutura do objeto, o que significa que descreve como o objeto deve se parecer. 

interface Endereco {
    rua: string,
    numero: number,
    estado: string,
    complemento: string,
    cep: string,
}

interface Pessoa {
    nome: string,
    idade: number,
    altura: number,
    cpf: string,
    solteiro: boolean,
    habilidades: string[],
    endereco: Endereco
    rg: string
    comprimentar(): void
}

const p: Pessoa = {
    nome: 'Gabriela',
    idade: 28,
    altura: 1.9,
    cpf: '2323342-232',
    solteiro: true,
    habilidades: ['HTML'],
    rg: 'sffwwrwerwerwer',
    endereco: {
        rua: 'Rua Feliz',
        cep: '00000-000',
        complemento: 'Apartamento',
        estado: 'CE',
        numero: 567,
    },
    comprimentar() {
        console.log('Saudações, meu nome é ' +this.nome) //o this referencia o proprio objeto dentro dele mesmo

    }
}

const p2: Pessoa = {
    nome: 'Gabriel',
    altura: 1.7,
    idade: 24,
    cpf: '090909080808',
    solteiro: false,
    habilidades: ['HTML'],
    rg: '24424232342',
    endereco:{
        rua: 'Rua Feliz',
        cep: '00000-000',
        complemento: 'Apartamento',
        estado: 'CE',
        numero: 567,
        },
    comprimentar() {
        console.log('Olá, prazer em conhece-lo!')
    },

}










