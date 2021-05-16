# A script that lists the numbers of the open doors after you visited all the 100 doors 100 times.

doors = [str(i) for i in range(1,101)]
doors_open = []

count = 1

while count < 100:
    for d in doors[::count]:
        if "o" in d:
            doors[doors.index(d)] = d[:-1]
        else:
            doors[doors.index(d)] = d+"o"
    count += 1

for d in doors:
    if "o" in d:
        doors_open.append(d[:-1])

print(doors_open)