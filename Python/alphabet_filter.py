#
# Complete the 'alphabet_filter' function below.
#
# The function is expected to return TWO STRINGS,
# the first containing consonants only, the second containing vowels only, in their original order.
# The function accepts STRING word as parameter.
#

def alphabet_filter(word):
    vow = ["a", "e", "i", "o", "u"]
    con = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y"]
    word_vowels = ""
    word_consonants = ""
    for l in word:
        if l in vow:
            word_vowels += l
    for l in word:
        if l in con:
            word_consonants += l
    return word_consonants, word_vowels

print(alphabet_filter("onomatopoeia"))