# luhn Algorithm
def double_digit_value(n):
    n = n * 2
    if n >= 10:
        n = n - 9
    return n

# check if the card number is valid
def is_valid(card_number):
    num = str(card_number)
    total = 0
    for i in range(len(num) - 1, -1, -1):
        n = int(num[i])
        if (len(num) - i) % 2 == 0:
            total = total + double_digit_value(n)
        else:
            total = total + n
    return total % 10 == 0