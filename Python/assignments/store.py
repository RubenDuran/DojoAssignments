import product

class Store(object):
    def __init__(self,prod,location,owner):
        self.prod = [prod]
        self.location = location
        self.owner = owner

    def add_products(self,new_prod):
        self.prod.append(new_prod)
        return self.prod

    def remove_product(self,prod_name):
        for p in range(0,len(self.prod)-1):
            if prod_name == self.prod[p]:
                self.prod.pop(p)
        return self.prod

    def inventory(self):
        print "Your store currently has the following products in stock:"
        for i in self.prod:
            print i.display_prod_info()
        return self


shoe_2 = product.prod2
wally_world = Store(shoe_2,"Burbank","Rob")
#
n_shoe = product.Product("79.99","Cortez","3.5oz","Nike","39.99")

wally_world.add_products(n_shoe)

wally_world.inventory()

wally_world.remove_product(n_shoe)
wally_world.inventory()
