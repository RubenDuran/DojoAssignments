# input
l = ['hello','world','my','name','is','Anna']
names = ['ruben', 'liz', 'amir', 'sara', 'steve', 'scott']


def find_char(char,lis):
    new_list = []
    for item in lis:
        for letter in item:
            if letter == char:
                new_list.append(item)
    print new_list
    return new_list

find_char('o',l)
find_char('r',names)

# # output
# o = ['hello','world']
# r = ['ruben', 'amir', 'sara']
