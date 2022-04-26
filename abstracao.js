/*
 * Abstração 
 * Exercício: exemplos de abstração no dia a dia, se quiser implementar pode. 
*/

class Trabalhar {
  constructor(notebook, cafe, desenvolver, reuniao, linguagem) {
    this.notebook = notebook;
    this.cafe = cafe;
    this.desenvolver = desenvolver;
    this.reuniao = reuniao;
    this.linguagem = linguagem;
  }

  ligarNotebook() {
    return 'O notebook está sendo ligado';
  }

  desligarNotebook() {
    return 'O seu horário de trabalho acabou, o notebook está sendo desligado';
  }

  pegarCafe() {
    return 'O café foi pego, pode começar a codificar';
  }

  codificar(linguagem) {
    return 'Codificando em ' + linguagem 
  }

  entrarReuniao() {
    return 'Você está participando da reunião';
  }
}

let desenvolver = new Trabalhar();
console.log(desenvolver.ligarNotebook());
console.log(desenvolver.entrarReuniao());
console.log(desenvolver.pegarCafe());
console.log(desenvolver.codificar('JavaScript'));
console.log(desenvolver.desligarNotebook());

// O notebook está sendo ligado
// Você está participando da reunião
// O café foi pego, pode começar a codificar
// Codificando em JavaScript
// Você está participando da reunião
// O seu horário de trabalho acabou, o notebook está sendo desligado