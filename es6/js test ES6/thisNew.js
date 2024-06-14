const black = {
  name: 'black',
  speak: function () {
    console.log(`this is me , i'm  ${this.name}`)
  }
}

const gape = {
  name: 'grape',
  legName: 'end',
  leg: {
    legName: 'middle',
    object: {
      legName: 'front',
      grow: function () {
        const inside = () => {
          console.log(`this is my ${this.legName} leg`);

        }
        inside();
      }
    }
  },
  talk: () => {
    console.log(`this is me, i'm  ${this.name}`)
  }
}

gape.leg.object.grow();


// for (let i = 2; i < 4; i++) {

//   const gape = {
//     name: 'grape',
//     talk: () => {
//       console.log(`this is me, i'm  ${this.name}`)
//     }
//   }

//   gape.talk();
// }


// const array = [gape];
// console.log(array[0].talk());

// black.speak();
// gape.talk();
