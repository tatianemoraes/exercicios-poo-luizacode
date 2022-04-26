/*
  * Herança simples
  * 
  * Exercício 1:
  * implemente uma funcionalidade abstrata (aquela que é comum a PF e PJ) para a Pessoa
  * e acesse nas Pessoas Física e Jurídica
  * 
  * Exercício 2:
  * implemente uma funcionalidade específica nas classes de Pessoa Físicaa e Pessoa Jurídica
*/

 class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  verificaMaioridade(idade) {
    if(idade < 18) {
      console.log('Esta pessoa é menor de idade');
    } else {
      console.log('Esta pessoa é maior de idade');
    }
  }

  verificaCnh(cnh) {
    if(!!cnh) {
      console.log('Esta pessoa tem CNH');
    } else {
      console.log('Esta pessoa não tem CNH');
    }
  }
}

class Pfisica extends Pessoa {
  constructor(nome, sobrenome, cpf, ctps) {
    super(nome, sobrenome);
    this.cpf = cpf;
    this.ctps = ctps;
  }

  tirarCPF() {
    console.log('Pode tirar o próprio CPF');
  }

  temCTPS() {
    if(!!this.ctps) {
      console.log('Esta pessoa tem CTPS');
    } else {
      console.log('Esta pessoa não tem CTPS');
    }
  }
}

let pessoa = new Pfisica('Maria', 'Ribeiro', '11154545471', '123456789/123');
pessoa.verificaMaioridade(20);
pessoa.verificaCnh('5436746734567');;
console.log(pessoa);

class PJuridica extends Pessoa {
  constructor(nome, sobrenome, cnpj, funcionarios) {
    super(nome, sobrenome);
    this.cnpj = cnpj;
    this.funcionarios = funcionarios;
  }

  verificaQuantidadeFuncionarios() {
    console.log('Esta empresa tem ' + this.funcionarios + ' funcionários')
  }
}

let empresa = new PJuridica('Magalu', 'LTDA', '121321321/0001-10', 5);
console.log(empresa);
empresa.verificaCnh('24092848290');
empresa.verificaQuantidadeFuncionarios();

class PJuridica2 extends Pessoa {
  constructor(nome, sobrenome) {
    super(nome, sobrenome);
  }

   setCnpj(cnpj) {
    this.cnpj = cnpj;
  }

  getCnpj() {
    return this.cnpj;
  }
}

empresa = new PJuridica2('Magalu', 'LTDA');
empresa.setCnpj('121213212/0001-10');
console.log(empresa);
empresa.verificaCnh()
console.log(empresa.getCnpj());