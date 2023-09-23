# An application in Python that keeps your to-dos in one place. It should support the following features:
# listing tasks
# adding a new task
# marking a task as completed
# archive (deleting all complete tasks)

App = 1
ToDoList = []
def List_all():
    print("You saved the following to-do items: ")
    for num, l in enumerate(ToDoList, start=1):
        print(" " + str(num) + ". " + l)

while App == 1:
    command = (input("Please specify a command [list, add, mark, archive]: "))
    if command == "list":
        List_all()
    elif command == "add":
        ToDoList.append("[ ] " + input("Add an item: "))
        print("Item added.")
    elif command == "mark":
        List_all()
        marked = int(input("Which one do you want to mark as completed? "))-1
        ToDoList[marked] = "[x] " + (ToDoList[marked])[4:]
        print(f"{(ToDoList[marked])[4:]} is completed.")
    elif command == "archive":
        for l in ToDoList:
            if l[:4] == "[x] ":
                ToDoList.remove(l)
        print("All completed tasks got deleted.")
    elif command == "x":
        App = 0