# class MathDojo(object):
#     def __init__(self):
#         self.value = 0
#
#
#     def add(self,num1,num2 =0):
#         self.value += (num1 + num2)
#         return self
#
#     def subtract(self,num1, num2 = 0):
#         self.value -= (num1 + num2)
#         return self
#
#     def result(self):
#         print self.value
#
# md = MathDojo().add(2).add(2,5).subtract(3,2).result()
# output = 4

class MathDojo(object):
    def __init__(self):
        self.value = 0


    def add(self,*num):
        for i in range(0, len(num)):
            if type(num[i]) is list or type(num[i]) is tuple:
                for j in num[i]:
                    self.value += j
            else:
                self.value += num[i]

        return self

    def subtract(self,*num):
        for i in range(0, len(num)):
            # check if list or tuple
            if type(num[i]) is list or type(num[i]) is tuple:
                # unpack if list or tuple and increment
                for j in num[i]:
                    self.value -= j
            else:
                self.value -= num[i]
        return self

    def result(self):
        print self.value

md = MathDojo().add([1],3,4).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract(2, [2,3], [1.1, 2.3]).result()

# Output:
# 28.15
