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