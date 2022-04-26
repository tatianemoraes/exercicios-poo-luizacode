/**
 *  Exercício: pesquisem sobre modos de encapsular atributos (#) e tente fazer isso
*/

class Pessoa {
	#idade;

	constructor(idade) {
		this.#idade = idade;
	}

	get getIdade() {
		return this.#idade;
	}

	set setIdade(idade) {
		this.#idade = idade;
	}

	AtribuiIdade(idade) {
		this.setIdade = idade;
	}

	verificaIdade() {
		if(this.getIdade > 18) {
			console.log('Maior de Idade');
		} else {
			console.log('Menor de Idade');
		}
	}
}

let pessoa = new Pessoa(15);
pessoa.verificaIdade();