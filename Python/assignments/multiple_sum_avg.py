# Multiples
# Part I - Write code that prints all the odd numbers from 1 to 1000. Use the for loop and don't use a list to do this exercise.

for num in range(1,1001,2):
    print num



# Part II - Create another program that prints all the multiples of 5 from 5 to 1,000,000.
for num in range(5,1000000,5):
    print num


# using modular
for num in range(5,1000000):
    if num%5 == 0:
        print num


# Sum List
# Create a program that prints the sum of all the values in the list: a = [1, 2, 5, 10, 255, 3]

a = [1, 2, 5, 10, 255, 3]

def sum_list_values(lis):
    sum = 0
    for num in lis:
        sum += num
    print "Total sum of the list is:", sum
    return sum

sum_list_values(a)
# function output = Total sum of the list is: 276

# Average List
# Create a program that prints the average of the values in the list: a = [1, 2, 5, 10, 255, 3]
a = [1, 2, 5, 10, 255, 3]

def list_avg(lis):
    sum = 0
    for num in lis:
        sum += num
    print sum/len(lis)
    return sum/len(lis)

list_avg(a)

# output = 46
