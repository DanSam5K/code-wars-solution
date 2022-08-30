# 1. Minimize sum of array
def min_sum(arr)
  new_arr = arr.sort
  i = 0
  j = new_arr.size - 1
  sum = 0
    while i < j
      sum += new_arr[i] * new_arr[j]
      i += 1
      j -= 1
    end
    sum
end

# 2. Narcissistic Numbers
def is_narcissistic(num)
  num_arr = num.to_s.split('')
  sum = 0
  num_arr.each do |n|
    sum += n.to_i ** num_arr.size
  end
  sum == num
end
# 3. Ghost buster solution
def ghostbusters(building)
  #your code here
  if building.include?(' ')
    building.gsub(' ', '')
  else
    "You just wanted my autograph didn't you?"
  end
end
# 4. Sort by last character
def last(x)
  word_arr = x.split(' ')
  word_arr.sort_by do |word|
    word[-1]
  end
end

# 5. Find the smallest power higher than a given a value
def find_next_power(val, pow_)
   i = 0
   while i <= val
     if i ** pow_ > val
      break
     end
     i += 1
   end
  i ** pow_
end

