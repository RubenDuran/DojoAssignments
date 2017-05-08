def odd_even(x):
    for num in range(1,x):
        print "Number is ",num,
        if num % 2 == 0:
            print "This is an even number."
        else:
            print "This is an odd number"
    return

odd_even(2000)

#output:
# Number is  1 This is an odd number
# Number is  2 This is an even number.
# Number is  3 This is an odd number
# Number is  4 This is an even number.

a = [2,4,10,16]

def multiply(lis,num):
    for i in range(len(lis)):
        lis[i] *= num
    return lis

multiply(a,5)

# Output: [10, 20, 50, 80]

def layered_multiples(arr):
  new_array =[]
  for i in arr:
      new_val = []
      for j in range(i):
          new_val.append(1)
      new_array.append(new_val)
  return new_array

x = layered_multiples(multiply([2,4,5],3))
print x
# output
# >>>[[1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]
