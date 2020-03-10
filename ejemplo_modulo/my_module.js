const a = require('http');

// Constructor
function Welcome(nameIn) {
    this.name = nameIn;
}

Welcome.prototype = {
    //this.name = null,
    showName: function() {
        console.log("Hi " + this.name);
    },
    updateName: function(nameIn) {
        this.name = nameIn;
    }
};

module.exports = Welcome;