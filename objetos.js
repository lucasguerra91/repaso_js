/*
var person = new Object();
person.firstName = "Lucas";
person.lastName = "Guerra";
person.age = 28;
person.eyeColor = "Brown";
*/

// Ambas declaraciones definen lo mismo, no hay necesidad de usar new Objetct()

var person = {
    firstName : "Lucas",
    lastName : "Guerra",
    age : 10,
    eyeColor : "Marrones",
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log("la edad es: " + person.age);

var x = person; // esto no crea una copia del objeto, lo instancia
x.age = 28;
console.log("la edad es: " + person["age"]); // Son diferentes maneras de acceder al valor

var data;
var txt = "";

// Parecido al for in de Python
for (data in person) {
    txt += person[data] + " ";
    
}
console.log(txt); // con la funcion de nombre completo , nos la muestra entera.

// Agregando y eliminando propiedades
person.nationality = "Argentino";
console.log(person.nationality);

//delete person.eyeColor;
// console.log(eyeColor);  Aca ya tira error porque no esta declarado.

console.log(person.fullName());

// tambien podemos agregar metodos al objeto 
person.detalle = function() {
    return "Nombre y apellido: " + this.fullName() + "\n" + "Edad: " + this.age; 
}

console.log("Imprimiendo el metodo que agregamos recien.. \n" + person.detalle());

// getters and setters
var person2 = {
    firstName: "Lucas",
    lastName: "Guerra",
    age: 28,
    ocupation: "ninguna",
    get fullName(){
        return this.firstName + " " + this.lastName;
    },
    set ocu(ocu) {
        this.ocupation = ocu;
    }

}

console.log(person2.fullName);
console.log(person2.ocupation);

person2.ocu = "estudiante";

console.log(person2.ocupation);

// Why Using Getters and Setters?

//     It gives simpler syntax
//     It allows equal syntax for properties and methods
//     It can secure better data quality
//     It is useful for doing things behind-the-scene

