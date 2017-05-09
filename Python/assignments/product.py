# The owner of a store wants a program to track products. Create a product class to fill the following requirements.
# Product class should have these attributes:
# Price
# Item Name
# Weight
# Brand
# Cost
# Status: default "for sale"
# Product class should have these methods:
# Sell: changes status to "sold"
# Add tax: takes tax as a decimal amount as a parameter and returns the price of the item including sales tax
# Return: takes reason for return as a parameter and changes status accordingly. If the item is being returned because it is defective change status to defective and change price to 0. If it is being returned in the box, like new mark it as for sale. If the box has been opened set status to used and apply a 20% discount.
# Display Info: show all product details.
# Every method that doesn't have to return something should return self so methods can be chained.

class Product(object):
    def __init__(self,price,item_name,weight,brand,cost):
        self.price = price
        self.item_name = item_name
        self.weight = weight
        self.brand = brand
        self.cost = cost
        self.status = "for sale"

    def sell(self):
        self.status = "sold"
        return self.status

    def add_tax(self,tax):
        self.price = format(float(self.price)* (1.0 - tax),'.2f')
        return self.price
        # format(1.2345, '.2f')

    def product_return(self,reason,box="closed"):
        if reason == "defective":
            self.price = 0
            self.status = reason
        else:
            if box == "open":
                self.price = format(float(self.price)*0.80 ,'.2f')
            self.status = "for sale"
        return self

    def display_prod_info(self):
            print "Price:",self.price
            print "Name:",self.item_name
            print "Weight:",self.weight
            print "Brand:",self.brand
            print "Cost:",self.cost
            print "Status:",self.status
            return self

prod1 = Product("79.99","Cortez","3.5oz","Nike","39.99")
prod1.display_prod_info()

# output
# Price: 79.99
# Name: Cortez
# Weight: 3.5oz
# Brand: Nike
# Cost: 39.99
# Status: for sale

prod1.add_tax(0.14)
prod1.display_prod_info()

# output:
# Price: 68.79
# Name: Cortez
# Weight: 3.5oz
# Brand: Nike
# Cost: 39.99
# Status: for sale

prod1.product_return("defective")
prod1.display_prod_info()

# output
# Price: 0
# Name: Cortez
# Weight: 3.5oz
# Brand: Nike
# Cost: 39.99
# Status: defective

prod2 = Product("99.99","Air Force 1s","4.0oz","Nike","44.99")
prod2.display_prod_info()
prod2.product_return("like new", "open")
prod2.display_prod_info()

# Price: 99.99
# Name: Air Force 1s
# Weight: 4.0oz
# Brand: Nike
# Cost: 44.99
# Status: for sale
# Price: 79.99
# Name: Air Force 1s
# Weight: 4.0oz
# Brand: Nike
# Cost: 44.99
