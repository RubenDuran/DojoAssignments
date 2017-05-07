l1 = ['magical unicorns',19,'hello',98.98,'world']
l2 = [2,3,1,7,4,12]
l3 = ['magical','unicorns']
#output
# "The array you entered is of mixed type"
# "String: magical unicorns hello world"
# "Sum: 117.98"

def type_list(x):
    new_str = ''
    list_sum = 0
    str_count = False
    num_count = False
    for item in x:
        if type(item) == str:
            new_str += " " + item
            str_count = True
        elif type(item) == int or type(item) == float:
            list_sum += item
            num_count = True
        else:
            continue
    if str_count == True and num_count == True:
        print "The array you entered is of mixed type"
        print "String: ", new_str
        print "Sum: ", list_sum
    elif str_count == True:
        print "The array you entered is of string type"
        print "String: ", new_str
    else:
        print "The array you entered is of integer/float type"
        print "Sum: ", list_sum


type_list(l1)
type_list(l2)
type_list(l3)
