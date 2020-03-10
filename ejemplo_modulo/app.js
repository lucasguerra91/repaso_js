// import "./my_module"; no lo toma

const Welcome = require("./my_module");
const w = new Welcome('John');
w.updateName("blah");
w.showName();