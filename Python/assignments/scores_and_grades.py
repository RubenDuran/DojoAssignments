import random

def grade(score):
    if score >=90:
        letter_grade = "A"
    elif score >= 80:
        letter_grade = "B"
    elif score >= 70:
        letter_grade = "C"
    else:
        letter_grade = "D"
    return letter_grade

def score_to_grade(num):
    print "Scores and Grades"
    for g in range(num):
        score = random.randint(60,100)
        print "Score:" , score, "Your Grade is ", grade(score)
    print "End of the program. Bye!"

score_to_grade(10)


#output: 
# Scores and Grades
# Score: 95 Your Grade is  A
# Score: 89 Your Grade is  B
# Score: 85 Your Grade is  B
# Score: 69 Your Grade is  D
# Score: 92 Your Grade is  A
# Score: 77 Your Grade is  C
# Score: 61 Your Grade is  D
# Score: 82 Your Grade is  B
#
# Score: 84 Your Grade is  B
# Score: 97 Your Grade is  A
# End of the program. Bye!
