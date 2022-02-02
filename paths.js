const path = require("path");

module.exports = {
  root: path.resolve(__dirname,''),
  // Source files
  src: path.resolve(__dirname, "./src"),

  indexJs: path.resolve(__dirname, "./src","js","index.js"),

  fonts: path.resolve(__dirname, "./src","fonts"),
  images: path.resolve(__dirname, "./src","images"),

  scss: path.resolve(__dirname, "./src","scss"),
  build: path.resolve(__dirname, "public","dist"),

};
