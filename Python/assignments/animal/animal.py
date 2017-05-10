class Animal(object):
    def __init__(self,name,health=100):
        self.name = name
        self.health = health

    def walk(self):
            self.health -= 1
            return self.health

    def run(self):
            self.health -= 5
            return self.health

    def displayHealth(self):
            print "Name: {} Current health: {}".format(self.name,self.health)


a = Animal("Bo")
a.run()
a.displayHealth()

class Dog(Animal):
    def __init__(self,name):
        super(Dog, self).__init__(name)
        self.health = 150
    def pet(self):
        self.health += 5
        return self.health


b = Dog("Milo")
b.walk()
b.walk()
b.walk()
b.run()
b.run()
b.pet()
b.displayHealth()

class Dragon(Animal):
    def __init__(self,name):
        super(Dragon, self).__init__(name)
        self.health = 170

    def fly(self):
        self.health -= 10
        return self.health

    def displayHealth(self):
        print "This is a Dragon!"
        super(Dragon, self).displayHealth()

c = Dragon('Bob')
c.walk()
c.walk()
c.walk()
c.run()
c.run()
c.fly()
c.fly()
c.displayHealth()


# output:
# Name: Bo Current health: 95
# Name: Milo Current health: 142
# This is a Dragon!
# Name: Bob Current health: 137
