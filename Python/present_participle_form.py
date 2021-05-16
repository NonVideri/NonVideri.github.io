# The script which takes infinitive verbs separated by one space as the command line arguments
# and displays their present participle form in separated lines.

inp = input("Input verb or verbs in infinitive form separated by spaces: ")
verbs = inp.split()
output = ""
vow = ["a", "e", "i", "o", "u"]
con = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y"]

for v in verbs:
    if v[-2:] == "ie":
        output = v[:-2] + "ying"
    elif v[-2:] == "ee":
        output = v + "ing"
    elif v[-1:] == "e" and v != ("be" or "singe" or "tinge"):
        output = v[:-1] + "ing"
    elif v[-1:] == "c":
        output = v + "king"
    elif v[-3] in con and v[-2] in vow and v[-1] in con and v[-1] != "w" and v[-1] != "x" and v[-1] != "y":
        output = v + v[-1] + "ing"
    else:
        output = v + "ing"
    print(output)