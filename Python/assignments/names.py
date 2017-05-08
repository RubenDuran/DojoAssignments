# Part I

students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]
def list_name(x):
    for item in x:
        y = item.values()
        for z in y:
            print z,
        print

# list_name(students)

# Part I output:
# Michael Jordan
# John Rosales
# Mark Guillen
# KB Tonel
# ===============================

#PartII

users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

def list_name_len(x):
    for item in x:
        print item
        for num,i in enumerate(x[item]):
            temp = i.values()
            name_str = ""
            name_len = 0
            for j in temp:
                name_str += j + " "
                name_len += len(j)
            print num + 1, "-",name_str, "-", name_len



list_name_len(users)
#
#  output:
#  Students
# 1 - Michael Jordan  - 13
# 2 - John Rosales  - 11
# 3 - Mark Guillen  - 11
# 4 - KB Tonel  - 7
#
# Instructors
# 1 - Michael Choi  - 11
# 2 - Martin Puryear  - 13
