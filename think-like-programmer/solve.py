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
  
# test
print(is_valid(4408041234567893))
print(is_valid(4417123456789112))
print(is_valid(1234567890123456))