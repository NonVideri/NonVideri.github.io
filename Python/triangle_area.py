# A program which takes 6 integers a, b, c, d, e, f - the coordinates of the vertices of the triangle (a, b), (c, d) and (e, f),
# and prints the value of its area.

a = int(input("Input a: "))
b = int(input("Input b: "))
c = int(input("Input c: "))
d = int(input("Input d: "))
e = int(input("Input e: "))
f = int(input("Input f: "))

if (a or b or c or d or e or f) < -100 or (a or b or c or d or e or f) > 100:
    print("Wrong coordinates. Choose numbers in the range of -100 to 100.")
else:
    area = 0.5 * ((a * d) + (c * f) + (e * b) - (c * b) - (e * d) - (a * f))
    print("The area equals: " + str(abs(area)))