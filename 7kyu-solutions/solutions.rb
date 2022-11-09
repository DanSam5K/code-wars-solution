# # 1. Minimize sum of array
# def min_sum(arr)
#   new_arr = arr.sort
#   i = 0
#   j = new_arr.size - 1
#   sum = 0
#     while i < j
#       sum += new_arr[i] * new_arr[j]
#       i += 1
#       j -= 1
#     end
#     sum
# end

# # 2. Narcissistic Numbers
# def is_narcissistic(num)
#   num_arr = num.to_s.split('')
#   sum = 0
#   num_arr.each do |n|
#     sum += n.to_i ** num_arr.size
#   end
#   sum == num
# end
# # 3. Ghost buster solution
# def ghostbusters(building)
#   #your code here
#   if building.include?(' ')
#     building.gsub(' ', '')
#   else
#     "You just wanted my autograph didn't you?"
#   end
# end
# # 4. Sort by last character
# def last(x)
#   word_arr = x.split(' ')
#   word_arr.sort_by do |word|
#     word[-1]
#   end
# end

# # 5. Find the smallest power higher than a given a value
# def find_next_power(val, pow_)
#    i = 0
#    while i <= val
#      if i ** pow_ > val
#       break
#      end
#      i += 1
#    end
#   i ** pow_
# end

# 6. sum list but ignore duplicates
def sum_no_duplicates(l)
  #your code here
  h = {}
  l.uniq.each {|key| h[key] = 0}
  sum = 0
  l.each do |n|
    if h[n]
     h[n] = h[n] + 1
    end
  end
  h.each do |key, val|
    if val < 2
      sum += key
    end
    sum
  end
  sum
end

# 7 sum no duplicates easy simple implementation

def sum_no_duplicates(l) 
  l.reject {|x| l.count(x) > 1}.sum
end

# 8 Another card game
def get_squares(array)
  #Enter code here!
  array.select {|num| num**0.5%1 == 0}.uniq.sort
end'[]];/