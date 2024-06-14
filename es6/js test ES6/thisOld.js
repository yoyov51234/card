const black = {
  name: "black",
  speak: function () {
    console.log(this.name + " speaks")
  }
}


black.speak();



console.log(' this is grape')
const grape = black.speak;

grape();

console.log(' this is snowBoy bind')
const snowBoy = black.speak.bind(black);

snowBoy();