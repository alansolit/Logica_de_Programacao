
 let nome;
 let idade;
 const tipo = ["Guerreiro", "Mago", "Monje", "Ninja"]

 
 class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  
  atack(espada, magia, artesMarciais, shuriken) {

  
    switch (tipo[3]) {
  case "Guerreiro":
    console.log("O " + this.tipo[0] + " atacou usando a " + espada);
    break;

  case "Mago":
    console.log("O" + this.tipo[1] + " atacou usando " + magia);
    break;

  case "Monje":
    console.log("O " + this.tipo[2] + " atacou usando " + artesMarciais);
    break;
  
    case "Ninja":
    console.log("O " + this.tipo[3] + " atacou usando "+ shuriken);
    break;  

  default:
    console.log("Herói não listado no jogo!");

  }
 }
}
 const heroi1 = new heroi(nome, idade, tipo);
heroi1.atack("Espada", "Magia", "Arte Marciais", "Shuriken");
