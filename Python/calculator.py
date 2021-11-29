menu = """-- Calculator Menu --
0. Quit
1. Add two numbers
2. Subtract two numbers
3. Multiply two numbers
4. Divide two numbers"""

selected = None

while selected != 0:
    print(menu)
    selected = int(input("Select an option: "))
    
    if selected not in range(5):
        print("Invalid option: %d" % selected)
        continue

    if selected == 0:
        continue

    a = float(input("Please enter the first number: "))
    b = float(input("Please enter the second number: "))

    if selected == 1:
        result = a + b
    elif selected == 2:
        result = a - b
    elif selected == 3:
        result = a * b
    elif selected == 4:
        result = a / b

    print("The result is %g." % result)