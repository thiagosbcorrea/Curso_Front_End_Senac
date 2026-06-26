class Contabancaria {
    #saldo = 0;

    depositar(valor) {  
        this.#saldo += valor;
    }

    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
        } else {
            console.log("Saldo insuficiente");
        }

    }

    consultarSaldo() {
        return this.#saldo;
    } 
}

const conta1 = new Contabancaria();//obj1 criado conta1

conta1.depositar(1000);
conta1.sacar(500);
console.log("R$" + conta1.consultarSaldo());

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }


}

class funcionario extends Pessoa {
    constructor(nome, idade, cargo) {
        super(nome, idade);
        this.cargo = cargo;
    }
}

const funcionario1 = new funcionario("Thiago", 21, "Desenvolvedor");
funcionario1.apresentar();