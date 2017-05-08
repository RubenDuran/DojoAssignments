import random
def toss(x):
    print "Starting the program"
    head = 0
    tail = 0
    for t in range(1,x+1):
        face = random.randint(0,1)
        if face == 0:
            face = "head"
            head += 1
        else:
            face = "tail"
            tail += 1
        # print face

        print "Attempt #{}: Throwing a coin... It's a {}! ... Got {} head(s) so far and {} tail(s) so far".format(t, face, head, tail)


    print "Ending the program, thank you!"

toss(10)


# output:
# Starting the program
# Attempt #1: Throwing a coin... It's a tail! ... Got 0 head(s) so far and 1 tail(s) so far
# Attempt #2: Throwing a coin... It's a tail! ... Got 0 head(s) so far and 2 tail(s) so far
# Attempt #3: Throwing a coin... It's a tail! ... Got 0 head(s) so far and 3 tail(s) so far
# Attempt #4: Throwing a coin... It's a tail! ... Got 0 head(s) so far and 4 tail(s) so far
# Attempt #5: Throwing a coin... It's a head! ... Got 1 head(s) so far and 4 tail(s) so far
# Attempt #6: Throwing a coin... It's a head! ... Got 2 head(s) so far and 4 tail(s) so far
# Attempt #7: Throwing a coin... It's a tail! ... Got 2 head(s) so far and 5 tail(s) so far
# Attempt #8: Throwing a coin... It's a tail! ... Got 2 head(s) so far and 6 tail(s) so far
# Attempt #9: Throwing a coin... It's a tail! ... Got 2 head(s) so far and 7 tail(s) so far
# Attempt #10: Throwing a coin... It's a head! ... Got 3 head(s) so far and 7 tail(s) so far
# Ending the program, thank you!
