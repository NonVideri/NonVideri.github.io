def reverse_sentence(sentence):
    sentence = sentence.split()
    sentence = list(reversed(sentence))
    sentence = ' '.join(sentence)
    return sentence

sentence = input('Write the sentence you want to reverse: ')

print(reverse_sentence(sentence))