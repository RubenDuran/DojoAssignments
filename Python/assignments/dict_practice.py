user = {
    "name": "Ruben",
    "age": "29",
    "country of birth":"United States",
    "favorite language": "Python"
}

def print_dict_info(x):
    for key,val in x.iteritems():
        print "My {} is {}".format(key,val)

print_dict_info(user)

# output:
# My age is 29
# My favorite language is Python
# My name is Ruben
# My country of birth is United States
