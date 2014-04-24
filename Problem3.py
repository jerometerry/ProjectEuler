import math

def isPrime(n):
    if n <= 2:
        return True;
    
    if n % 2 == 0:
        return False;
    
    for i in range (3, int(math.sqrt(n))):
        if n % i == 0:
            return False;

    return True;


num = 600851475143;
    
max = 1
for i in range (2, int(math.sqrt(num))):
    if isPrime(i):
        if num % i == 0:
            max = i;
print(max);
    
#num = 100;