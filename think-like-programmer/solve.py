# luhn Algorithm
def double_digit_value(n):
    n = n * 2
    if n >= 10:
        n = n - 9
    return n

# checksum validation
def is_valid(ccn):
    ccn = str(ccn)
    check_digit = ccn[-1]
    ccn = ccn[:-1]
    ccn = ccn[::-1]
    doubled_digits = []
    for i, digit in enumerate(ccn):
        if i % 2 == 0:
            doubled_digits.append(double_digit_value(int(digit)))
        else:
            doubled_digits.append(int(digit))
    total = sum(doubled_digits)
    return total % 10 == int(check_digit)
  

data_input = [["3-5"], [1, 'Alex', 2008, 'teddy bear'], [2, 'Tom', 2014, 'teddy bear', 'toy car'], [5, 'Ron', 2015, 'board game', 'book', 'skateboard', 'basketball', 'lego'], [4, 'Harry', 2005, 'basketball', 'skateboard', 'puzzle', 'book'], [1, 'Jack', 2012, 'bike'], [6, 'Ryan', 2001, 'lego', 'puzzle', 'football', 'teddy bear', 'toy car', 'hat'], [2, 'Kevin', 2020, 'sweater', 'teddy bear'], [3, 'Fred', 2016, 'toy car', 'lego', 'chess']];

#  loop through the array get age between year between 2013 - 2017 slice the toys into a new set
set_data = set()
for i in range(len(data_input)):
    if i > 0:
        if data_input[i][2] >= 2013 and data_input[i][2] <= 2017:
            for j in range(len(data_input[i])):
                    set_data.add(data_input[i][j])

# print(len(set_data), set_data) 

# Using the same rule as the shapes programs from earlier in the chapter (only
# two output statements—one that outputs the hash mark and one that outputs
# an end-of-line), write a program that produces the following shape:
  ########
   ######
    ####
     ##
# Hint: Recall that you can concatenate strings together using the + operator.
# for i in range(4):
#     for j in range(i):
#         print(' ', end='')
#     for k in range(8 - 2 * i):
#         print('#', end='')
#     print()

    ##
   ####
  ######
 ########
 ########
  ######
   ####
    ##
# for i in range(4):
#     for j in range(3 - i):
#         print(' ', end='')
#     for k in range(2 * i + 2):
#         print('#', end='')
#     print()
# for i in range(4):
#     for j in range(i + 1):
#         print(' ', end='')
#     for k in range(6 - 2 * i):
#         print('#', end='')
#     print()

#             #
 ##         ##
  ###    ###
   ########
   ########
  ###    ###
 ##        ##
#            #

for i in range(4):
    for j in range(i):
        print(' ', end='')
    print('#', end='')
    for k in range(2 * (3 - i)):
        print(' ', end='')
    print('#', end='')
    print()

for i in range(4):
    for j in range(3 - i):
        print(' ', end='')
    print('#', end='')
    for k in range(2 * i + 2):
        print(' ', end='')
    print('#', end='')
    print()

# Write a program that reads a line of text, counting the number of words,
# identifying the length of the longest word, the greatest number of vowels
# in a word, and/or any other statistics you can think of.

def count_words(text):
    text = text.split()
    return len(text)

def longest_word(text):
    text = text.split()
    longest = 0
    for word in text:
        if len(word) > longest:
            longest = len(word)
    return longest

# Have you learned about hexadecimal? Try writing a program that lets the
# user specify an input in binary, decimal, or hexadecimal, and output in any
# of the three.

def convert_base(num, base):
    if base == 2:
        return bin(num)
    elif base == 16:
        return hex(num)
    else:
        return num
        
# Write a program that reads a string and returns a table of the letters of the
# alphabet in alphabetical order which occur in the string together with the
# number of times each letter occurs. Case should be ignored. A sample output
# of the program when the user enters the data “ThiS is String with Upper and lower case Letters”, would look this this:

def count_letters(text):
    text = text.lower()
    text = text.replace(' ', '')
    count = {}
    for letter in text:
        if letter in count:
            count[letter] += 1
        else:
            count[letter] = 1
    return count