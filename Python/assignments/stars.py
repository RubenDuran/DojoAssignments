# Part I
# Create a function called draw_stars() that takes a list of numbers and prints out *.

# x = [4, 6, 1, 3, 5, 7, 25]
#
# def draw_stars(lis):
#     for item in lis:
#         print "*" * item
# draw_stars(x)

# Part I Output:
# ****
# ******
# *
# ***
#
# *****
# *******
# *************************

# Part II
# Modify the function above. Allow a list containing integers and strings to be passed to the draw_stars() function. When a string is passed, instead of displaying *, display the first letter of the string

x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
def draw_stars(lis):
    for item in lis:
        if type(item) == int:
            print "*" * item
        else:
            print item[0].lower() * len(item)

draw_stars(x)


# PartII output:
# ****
# ttt
# *
# mmmmmmm
#
# *****
# *******
# jjjjjjjjjjj
