# Create a function that takes in two lists and creates a single dictionary where the first list contains keys and the second values. Assume the lists will be of equal length.

name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]

def make_dict(arr1, arr2):
    new_dict = {}
    if len(arr1) >= len(arr2):
        new_dict = dict(zip(arr1,arr2))
    else:
        new_dict = dict(zip(arr2,arr1))
    return new_dict

x = make_dict(name,favorite_animal)
print x


# output:
# {'Eli': 'cat', 'Shane': 'dolphins', 'Brendan': 'giraffe', 'Amy': 'ticks', 'Pariece': 'spider', 'Oscar': 'llamas', 'Anna': 'horse'}
