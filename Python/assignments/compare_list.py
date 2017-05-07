list_one = [1,2,5,6,2]
list_two = [1,2,5,6,2]

list_three = [1,2,5,6,5]
list_four = [1,2,5,6,5,3]

list_five = [1,2,5,6,5,16]
list_six = [1,2,5,6,5]

list_seven = ['celery','carrots','bread','milk']
list_eight = ['celery','carrots','bread','cream']

def comp_list(list1,list2):
    if list1 == list2:
        print "The lists are the same"
    else:
        print "The lists are not the same."

comp_list(list_eight,list_seven)
comp_list(list_one, list_two)
comp_list(list_three, list_four)

# output:
# The lists are not the same.
# The lists are the same
#The lists are not the same.
