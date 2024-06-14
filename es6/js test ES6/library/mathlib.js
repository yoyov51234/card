// mathlib.js
(function (global) {
  // Define the library object
  const MathLib = {};

  // Add functions to the library
  MathLib.add = function (a, b) {
    return a + b;
  };

  // Expose the library to the global object
  global.MathLib = MathLib;
})(this);

console.dir(global);


class SkinnedMesh extends THREE.Mesh {
  constructor(geometry, materials) {
    super(geometry, materials);

    this.idMatrix = SkinnedMesh.defaultMatrix();
    this.bones = [];
    this.boneMatrices = [];
    //...
  }
  update(camera) {
    //...
    super.update();
  }
  static defaultMatrix() {
    return new THREE.Matrix4();
  }
}
