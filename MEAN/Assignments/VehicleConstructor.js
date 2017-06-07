// Assignment: Creating Objects I
// We are going to create our very own constructor. Create a VehicleConstructor that takes in the name, number of wheels, and the number of passengers. Then complete the following tasks:
//
// Each vehicle should have a makeNoise method Using the constructor,
// create a Bike Redefine the Bike’s makeNoise method to print “ring ring!”
// Create a Sedan Redefine the Sedan’s makeNoise method to print “Honk Honk!” Using the constructor,
// create a Bus Add a method to Bus that takes in the number of passengers to pick up and adds them to the passenger count​


function Vehicle(name, numberOfWheels, numberOfPassengers, speed) {

  var distance_travelled = 0;
  var updateDistanceTravelled = function() {
      distance_travelled += speed
  }

  this.name = name;
  this.numberOfWheels = numberOfWheels;
  this.numberOfPassengers = numberOfPassengers;
  this.speed = speed;
/*
Addition of methods to vehicle
*/
  this.makeNoise = function() {
    console.log("Honk Honk!");
  }

  this.move = function() {
      makeNoise();
      updateDistanceTravelled();
  }

  this.chekMiles = function() {
      console.log('distance traveled: ' + distance_travelled);
  }
}

// ==========================================
// Create the bike
var Bike = new Vehicle("Redline", 2, 1);
Bike.makeNoise = function(){
    console.log('ring ring!');
}

Bike.makeNoise()

var Sedan = new Vehicle("Altima", 4, 4);
Sedan.makeNoise();

var Bus = new Vehicle('Blue Bird', 6, 18);
Bus.pickUpPassangers = function(newPassangers) {
    Bus.numberOfPassengers += newPassangers
    console.log(Bus.numberOfPassengers);
}
Bus.pickUpPassangers(5);

//
// output:
// ring ring!
// Honk Honk!
// 23
