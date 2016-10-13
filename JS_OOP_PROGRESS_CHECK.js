////base variable
//var planet = function(name, radius, mass, velocity) {
//    this.name = name;
//    this.radius=radius
//    this.mass = mass;
//    this.velocity = velocity;
//
//};
//// encapsulates a method to display any planet
//planet.prototype.displayPlanet = function() {
//    document.write("<input type='text' size='100' value=\'" + this.name +
//        ": name = " + this.radus + " " + this.mass +
//        ", velocity" + this.velocity  + "\'><br><br>");
//};
//
//// encapsulates a method to show new planet
//function earth(name, radius, mass, velocity, location) {
//    // call the parent constructor
//    // this will set the inherited properties for the subclass
//    planet.call(this, name, radius, mass, velocity);
//    // set the subclass specific properties
//    this.location = location;
//}
//// create the subclass prototype that inherits from
//// the parent prototype by cloning it
//
//earth.prototype = Object.create(planet.prototype);
//
//// set the constructor property of the new prototype to point to
//// the subclass constructor
//
//earth.prototype.constructor = earth;
//
//// override the parent displayPlanet method for a Earth
//earth.prototype.displayPlanet = function() {
//    document.write("<input type='text' size='100' value=\'" + this.name +
//        ": has the a radius of " + this.radius + "mi " + " its mass is "+this.mass +
//        "earths" + "a velocity of  "+this.velocity+"km/s"+ " and its location in the solar system is " +
//        this.location +"\'><br><br>");
//};
//
//function main() {
//
//    var Earth = new earth("Earth", 3, 958.8, 5.97237 * 10 ^ 24, 29.78, 3);
//    earth.displayPlanet();
//
//
//
//
//
//
//    // instantiate an array to hold Planets
////    var planetArray = [];
////    // populating the Planet array with objects and subclass objects
////    planetArray[0] = new planet("Name", 100 , 1000, 10000);
////    planetArray[0] = new planet("Earth", 3,958.8 , 	5.97237×1024, 29.78,3);
////// philosophically exercise the methods of the objects
////    for (var i = 0; i < planetArray.length; i++) {
////        planetArray.displayPlanet();
//
//}//Planet constructor, this will become the prototype for th parent class of all //Planets
var Planet = function(name, mass, radius, age) {
    this.name = name;
    this.mass = mass;
    this.radius = radius;
    this.age = age;
};
// encapsulates a method to display any Planet
Planet.prototype.displayPlanet = function() {
    document.write("<input type='text' size='500' value=\'" + this.name +
        " has a mass of " + this.mass + "earths a radius of " + this.radius +
        "mi and an age of " + this.age+ " billion years"+ "\'><br><br>");
};
// encapsulates a method to launch the Planet
// define a constructor for a subclass of Planet
function earth(name, mass, radius, age, point) {
    // call the parent constructor
    // this will set the inherited properties for the subclass
    Planet.call(this, name, mass, radius, age);
    // set the subclass specific properties
    this.point = point;
}
// create the subclass prototype that inherits from
// the parent prototype by cloning it
earth.prototype = Object.create(Planet.prototype);

// set the constructor property of the new prototype to point to
// the subclass constructor
earth.prototype.constructor = earth;

// override the parent displayPlanet method for a earth
earth.prototype.displayPlanet = function() {
    document.write("<input type='text' size='500' value=\'" + this.name +
        " has a mass of " + this.mass + "earths a radius of " + this.radius +
        "mi an age of " + this.age+ " billion years and its planet location to the sun is "+this.point+ "\'><br><br>");
};

function mars(name, mass, radius, age, point,color) {
    // call the parent constructor
    // this will set the inherited properties for the subclass
    Planet.call(this, name, mass, radius, age);
    // set the subclass specific properties
    this.point = point;
    this.color = color;
}
// create the subclass prototype that inherits from
// the parent prototype by cloning it
mars.prototype = Object.create(Planet.prototype);

// set the constructor property of the new prototype to point to
// the subclass constructor
mars.prototype.constructor = mars;

// override the parent displayPlanet method for a mars
mars.prototype.displayPlanet = function() {
    document.write("<input type='text' size='500' value=\'" + this.name +
        " has a mass of " + this.mass + " earths a radius of " + this.radius +
        "mi an age of " + this.age+ " billion years and its planet location to the sun is "+this.point+ " and its color is "+this.color+"\'><br><br>");
};
function jup(name, mass, radius, age, point,moons) {
    // call the parent constructor
    // this will set the inherited properties for the subclass
    Planet.call(this, name, mass, radius, age);
    // set the subclass specific properties
    this.point = point;
    this.moons = moons;
}
// create the subclass prototype that inherits from
// the parent prototype by cloning it
jup.prototype = Object.create(Planet.prototype);

// set the constructor property of the new prototype to point to
// the subclass constructor
jup.prototype.constructor = jup;

// override the parent displayPlanet method for a jup
jup.prototype.displayPlanet = function() {
    document.write("<input type='text' size='500' value=\'" + this.name +
        " has a mass of " + this.mass + " earths a radius of " + this.radius +
        "mi an age of " + this.age+ " billion years and its planet location to the sun is "+this.point+ " and it has "+this.moons+" moons"+"\'><br><br>");
};

var nep= {
    name: "Neptune",
    mass: 17.147,
    radius: 15299.4015,
    age: 4.503,
    point:8,
    moons: 14,
    color: "blue"
};
// call the parent constructor
// nep will set the inherited properties for the subclass

// override the parent displayPlanet method for a nep
nep.displayPlanet = function() {
    document.write("<input type='text' size='500' value=\'" + nep.name +
        " has a mass of " + nep.mass + " earths a radius of " + nep.radius +
        "mi an age of " + nep.age+ " billion years and its planet location to the sun is "+nep.point+ " it has "+nep.moons+" moons and its color is "+
        nep.color+"\'><br><br>");
};
// override the parent launchPlanet method for a earth

// Defines a constructor for a subclass of a Planet

function main() {
    // instantiate an array to hold Planets
    var planetArray = [];
    // populating the Planet array with objects and subclass objects
    planetArray[0] = new Planet("Generic Planet",100 , 100, 12);
    planetArray[1] = new earth("Earth",1,3959,4.543, 3);
    planetArray[2] = new mars("Mars",0.533, 2106,4.503, 4, "red");
    planetArray[3] = new jup("Jupiter",317.8,43441,4.503,5, 67);
    planetArray[4] = new nep.displayPlanet();
    for (var i = 0; i < planetArray.length; i++) {
        planetArray[i].displayPlanet();
    }
}

