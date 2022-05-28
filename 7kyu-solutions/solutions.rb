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