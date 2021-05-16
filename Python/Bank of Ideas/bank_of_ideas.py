# An app for managing ideas.

import sys
program = True

while program == True:
    command = input("Do you want to READ your bank, ADD a new idea or REMOVE an idea? (Type QUIT to exit.) ").lower()
    if command == "read":
        with open("ideas.txt", "r") as f:
            for count, line in enumerate(f.readlines(), start=1):
                print(count, line)
    elif command == "add":
        with open("ideas.txt", "a+") as f:
            f.write(input("What is your brilliant idea? " + "\n"))
    elif command == "remove":
        lista = []
        with open("ideas.txt", "r") as f:
            lista = f.readlines()
            for count, line in enumerate(lista, start=1):
                print(count, line)
            try:
                lista.pop(int(input("Which idea do you want to remove? (Leave empty to remove the last one.) "))-1)
            except ValueError:
                lista.pop()
        with open("ideas.txt", "w") as f:
            for element in lista:
                f.write(element)
    elif command == "quit":
        program = False
    else:
        print("Wrong command. Try again.")