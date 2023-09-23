# Finds the greatest common divisor between two positive integers

print("This app finds the greatest common divisor between two positive integers.")

a = abs(int(input("Enter the first number: ")))
b = abs(int(input("Enter the second number: ")))
d = 0
while a % 2 == 0 and b % 2 == 0:
    a /= 2
    b /= 2
    d += 1
while a != b:
    if a % 2 == 0:
        a /= 2
    elif b % 2 == 0:
        b /= 2
    elif a > b: 
        a = (a - b)/2
    else:
        b = (b - a)/2
gcd = str(int(a * 2 ** d))

print("The greatest common divisor is: " + gcd)