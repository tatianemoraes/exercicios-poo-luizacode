/*
* Polimorfismo 
* Exercício: quero que vocês tentem dar novas funcionalidades para a conta poupança
*/

class Conta {
  constructor(numero, titular) {
    this.numero = numero;
    this.titular = titular;
    this.saldo = 0;
  }

  deposita(valor) {
    this.saldo += valor;
  }

  saque(valor) {
    if (this.saldo > 0 && this.saldo >= valor) {
      this.saldo -= valor;
    } else {
      console.log("Saque não é permitido");
    }
  }

  getSaldo() {
    return this.saldo;
  }
}

class ContaCorrente extends Conta {
  constructor(numero, titular) {
    super(numero, titular);
  }

  deposita(valor) {
    this.valor += valor - 1;
  }
}

class ContaPoupanca extends Conta {
  constructor(numero, titular, contaExterna) {
    super(numero, titular);
    this.contaExterna = contaExterna;
  }

  fazerPortabilidade() {
    if(!!this.contaExterna && this.saldo) {
      console.log('Amanhã será depositado o valor de: R$ ' + this.saldo + ' na conta externa ' + this.contaExterna);
    }
  }
}

let jose = new ContaCorrente(321, 'Jose Jr');
console.log('OBJETO', jose);
jose.deposita(200);
jose.saque(50);
jose.deposita(100);
console.log(jose.getSaldo());


let maria = new ContaPoupanca(123, 'Maria Aparecidad', 'BDR-01.34');
maria.deposita(200);
maria.fazerPortabilidade();
