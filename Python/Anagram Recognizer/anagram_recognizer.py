# This program accepts a file name from the user provided as the command line argument of the script,
# reads each line of that file, and displays those pairs of words which are anagrams in separated lines.

import sys

with open(input("Enter file name: "), "r+") as f:
    lines = f.readlines()
    for line in lines:
        for second in lines:
            if sorted(second) == sorted(line) and second != line:
                print(line + " " + second)