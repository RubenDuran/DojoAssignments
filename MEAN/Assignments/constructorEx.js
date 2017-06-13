function NinjaConstructor(name, prevOccupation) {
  this.name = name;
  this.prevOccupation = prevOccupation;
  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
  }
}
var dylan = new NinjaConstructor('Dylan', 'Construction Worker');


// One common pitfall using this:
// To the above code, add the following:
//
// console.log(this)
// //after var dylan ... add:
// var nikki = NinjaConstructor('Nikki','Historian');
// Copy
// What's nikki?
//
// The code below can prevent the problems caused by not using new on a constructor (use it inside the constructor function):
//
// if (!(this instanceof NinjaConstructor)) {
//    // the constructor was called without "new".
//    return new NinjaConstructor(name, prevOccupation);
//  }


function Ninja(name, age, prevOccupation) {
  // PRIVATE
  var self = this; // HERE WE HAVE DECLARED SELF to EQUAL THE NEW OBJECT WE CREATE WITH NEW
  var privateVar = "This is a private variable";
  var privateMethod = function() {
    console.log("this is a private method for " + self.name);     // refer to name via self
    console.log(self);
  }
  //PUBLIC
  this.name = name;
  this.age = age;
  this.prevOccupation = prevOccupation
  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
    privateMethod();
    console.log(privateVar);
  }
}
var Speros = new Ninja("Speros", 24, "MBA");
Speros.introduce();

// =============================
// Tip: Good OOP Practice
// =============================

function Ninja(name){
  this.name = name;   // creating instance variables
  this.distance_traveled = 0;
}
// creating an instance method
Ninja.prototype.walk = function() {
    console.log(this.name + ' is walking');
    this.distance_traveled += 1;
    return this;      // have this method return its own object
  };
// creating an instance method
Ninja.prototype.run = function() {
    console.log(this.name + ' is running');
    this.distance_traveled += 5;
    this.displayDistanceTraveled();
    return this;      // have this method return its own object
  };
//another instance method
Ninja.prototype.displayDistanceTraveled = function() {
    console.log('distance traveled: ', this.distance_traveled);
}


// creating instances/objects
var ninja1 = new Ninja('Jay');
var ninja2 = new Ninja('Michael');
var ninja3 = new Ninja('Andrew');


ninja1.walk().run().walk().run().run();  // because walk/run returns itself, we can chain these methods


// you can also log ninja1 and study it
console.log(ninja1);
