# Create a class called  Car. In the__init__(), allow the user to specify the following attributes: price, speed, fuel, mileage. If the price is greater than 10,000, set the tax to be 15%. Otherwise, set the tax to be 12%.
#
# Create six different instances of the class Car. In the class have a method called display_all() that returns all the information about the car as a string. In your __init__(), call this display_all() method to display information about the car once the attributes have been defined.

class Car(object):
    def __init__(self,price,speed,fuel,mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if int(price) > 10000:
            self.tax = 0.15
        else:
            self.tax = 0.12
        self.display_all()

    def display_all(self):
        print "Price:",self.price
        print "Speed:",self.speed
        print "Fuel:",self.fuel
        print "Mileage:",self.mileage
        print "Tax:",self.tax
        return self

car1 = Car("2000","35mph","Full","15mpg")
car2 = Car("5000","60mph", "Empty", "22mpg")
car3 = Car("12000","75mph","Kinda Full", "5mpg")
car4= Car("25000","120mph","Kinda Empty", "18pmg")
car5 = Car("7500","27mph","Not Full", "35mpg")
car6 = Car("1800","65mph", "Full", "12mpg")
#
# output:
# Price: 5000
# Speed: 60mph
# Fuel: Empty
# Mileage: 22mpg
# Tax: 0.12
# Price: 12000
# Speed: 75mph
# Fuel: Kinda Full
# Mileage: 5mpg
# Tax: 0.15
