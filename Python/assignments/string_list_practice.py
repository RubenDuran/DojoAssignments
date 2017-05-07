# Find and Replace
# In this string: str = "It's thanksgiving day. It's my birthday,too!" print the position of the first instance of the word "day". Then create a new string where the word "day" is replaced with the word "month".

str = "It's thanksgiving day. It's my birthday,too!"
print str.find('day')

new_str = str.replace('day','month')
print new_str

# 18
# It's thanksgiving month. It's my birthmonth,too!
# =================================

# Print the min and max values in a list like this one: x = [2,54,-2,7,12,98]. Your code should work for any list.
x = [2,54,-2,7,12,98]
print min(x)
print max(x)

# -2
# 98
# =============================

# First and Last
# Print the first and last values in a list like this one: x = ["hello",2,54,-2,7,12,98,"world"]. Now create a new list containing only the first and last values in the original list. Your code should work for any list.
x = ["hello",2,54,-2,7,12,98,"world"]
print x[0]
print x[-1]

def first_last_list(lis):
    new_list = []
    new_list.append(lis[0])
    new_list.append(lis[-1])
    print new_list
    return new_list

first_last_list(x)

# hello
# world
# ['hello', 'world']
# ==============================

# New List
# Start with a list like this one: x = [19,2,54,-2,7,12,98,32,10,-3,6]. Sort your list first. Then, split your list in half. Push the list created from the first half to position 0 of the list created from the second half. The output should be: [[-3, -2, 2, 6, 7], 10, 12, 19, 32, 54, 98]. Stick with it, this one is tough!

x = [19,2,54,-2,7,12,98,32,10,-3,6]

def sort_split_add(lis):
    lis.sort()
    list_first_half = lis[:len(lis)/2]
    list_second_half = lis[len(lis)/2:]
    list_second_half.insert(0,list_first_half)
    print list_second_half
    return list_second_half

sort_split_add(x)
#
# [[-3, -2, 2, 6, 7], 10, 12, 19, 32, 54, 98]
# ===========================================
