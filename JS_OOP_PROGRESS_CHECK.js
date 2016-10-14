//Planet constructor, this will become the prototype for th parent class of all //Planets
var Planet = function(name, mass, radius, age) {
    this.name = name;
    this.mass = mass;
    this.radius = radius;
    this.age = age;
};
// encapsulates a method to display any Planet
Planet.prototype.displayPlanet = function() {
    document.write("<div class='box'><h3>" + this.name +
        " has a mass of " + this.mass + " earths a radius of " + this.radius +
        "mi and an age of " + this.age+ " billion years"+ "</h3></div><br>" +
        "<img src='http://orig04.deviantart.net/ba6d/f/2012/162/1/2/yellow_violet_planet_by_paulinemoss-d532k8u.jpg' width='200' height='200'> <br><br>");
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
    document.write("<div class='box'><h3>" + this.name +
        " has a mass of " + this.mass + " earth a radius of " + this.radius +
        "mi an age of " + this.age+ " billion years and its planet location to the sun is "+this.point+ "</h3></div><br>" +
        "<img src='http://solarviews.com/raw/earth/bluemarblewest.jpg' width='200' height='200'> <br><br>");
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
    document.write("<div class='box'><h3>" + this.name +
        " has a mass of " + this.mass + " earths a radius of " + this.radius +
        "mi an age of " + this.age+ " billion years its planet location to the sun is "+this.point+ " and its color is "+this.color+"</h3></div><br>" +
        "<img src='https://upload.wikimedia.org/wikipedia/commons/5/58/Mars_23_aug_2003_hubble.jpg' width='200' height='200'> <br><br>");
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
    document.write("<div class='box'><h3>" + this.name +
        " has a mass of " + this.mass + " earths a radius of " + this.radius +
        "mi an age of " + this.age+ " billion years its planet location to the sun is "+this.point+ " and it has "+this.moons+" moons"+"</h3></div><br>" +
        "<img src='https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg' width='200' height='200'><br> <br>");
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
    document.write("<div class='box'><h3>" + nep.name +
        " has a mass of " + nep.mass + " earths a radius of " + nep.radius +
        "mi an age of " + nep.age+ " billion years its planet location to the sun is "+nep.point+ " it has "+nep.moons+" moons and its color is "+
        nep.color+"</h3></div><br>" +
        "<img src='https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg' width='200' height='200'><br> <br>");
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

