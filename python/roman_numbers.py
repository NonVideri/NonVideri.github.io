# A program which takes a natural number
# (written in Arabic numerals, greater than zero and less than 4000),
# and then prints it in Roman form.

arab = input("Input a natural number from 1 to 3999: ")

singles = {"0":"", "1":"I", "2":"II", "3":"III", "4":"IV", "5":"V", "6":"VI", "7":"VII", "8":"VIII", "9":"IX"}
tens = {"0":"", "1":"X", "2":"XX", "3":"XXX", "4":"XL", "5":"L", "6":"LX", "7":"LXX", "8":"LXXX", "9":"XC"}
hundreds = {"0":"", "1":"C", "2":"CC", "3":"CCC", "4":"CD", "5":"D", "6":"DC", "7":"DCC", "8":"DCCC", "9":"CM"}
thousands = {"0":"", "1":"M", "2":"MM", "3":"MMM"}

if len(arab) == 1:
    answer = singles[arab]
elif len(arab) == 2:
    answer = tens[arab[0]] + singles[arab[1]]
elif len(arab) == 3:
    answer = hundreds[arab[0]] + tens[arab[1]] + singles[arab[2]]
else:
    answer = thousands[arab[0]] + hundreds[arab[1]] + tens[arab[2]] + singles[arab[3]]

print("The answer is: " + answer)