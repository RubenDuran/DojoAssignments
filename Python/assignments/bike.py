class Bike(object):
    def __init__(self,price,max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0

    def ride(self):
        print "Riding!"
        self.miles += 10
        return self

    def reverse(self):
        if self.miles >= 5:
            self.miles -= 5
            print "Reversing"
        else:
            print "Can not reverse any more!"
        return self

    def displayInfo(self):
        print "This Bike is priced at {} with a max speed of {}. Bike has been ridden for {} miles.".format(self.price,self.max_speed,self.miles)
        return self

bike1 = Bike("$500","25mph")
bike1.ride()
bike1.ride()
bike1.ride()
bike1.reverse()
bike1.displayInfo()


bike2 = Bike("$250","15mph")
bike2.ride()
bike2.ride()
bike2.reverse()
bike2.reverse()
bike2.displayInfo()

bike3 = Bike("$100","10mph")
bike3.reverse()
bike3.reverse()
bike3.reverse()
bike3.displayInfo()

#output:
# Riding!
# Riding!
# Riding!
# Reversing
# This Bike is priced at $500 with a max speed of 25mph. Bike has been ridden for 25 miles.
# Riding!
# Riding!
# Reversing
# Reversing
# This Bike is priced at $250 with a max speed of 15mph. Bike has been ridden for 10 miles.
# Can not reverse any more!
# Can not reverse any more!
# Can not reverse any more!
# This Bike is priced at $100 with a max speed of 10mph. Bike has been ridden for 0 miles.
