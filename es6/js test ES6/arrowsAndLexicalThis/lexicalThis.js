// normal this is ES5
//  create a constructor  
Dog() = {
  name: 'black',
  bark: function () {
    console.log(`${this.name} is barking`)
  }
}


const globalArrowFunction = () => {
  console.log(this); // In a browser, this refers to the window object
};

globalArrowFunction(); // Logs the global object (window in browsers)



