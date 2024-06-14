const cat = {
  sound: 'meeeeeow'
}


const anmial = {
  speak: function () {
    console.log(`it speaks as ${this.sound}`);

  }

}
Object.setPrototypeOf(cat, anmial);



anmial.speak();
cat.speak();