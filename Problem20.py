# this solution works, but misses the point of Project Euler
def factorial(x):
    if x > 1:
        return x * factorial(x-1)
    else:
        return 1

def sumDigits(y):
    sum = 0
    while y > 0:
        currentDigit = y % 10 
        sum = sum + currentDigit 
        y = y // 10 
    return sum

print(sumDigits(factorial(100))) 