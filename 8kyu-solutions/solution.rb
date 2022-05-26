# 1. Volume of a cuboid
def get_volume_of_cuboid(length, width, height)
  length * width * height
end

# 2. Convert String to Integer
def string_to_integer(string)
  string.to_i
end

# 3. return negative number
def negative(number)
  number unless number > 0
  -number
end

# 4. What is between
def between(a, b)
  (a..b).to_a
end

# 5. Sum of differences in array
def sum_of_differences(array)
  return 0 unless array.size > 1
  array.sort.each_cons(2).map { |a, b| b - a }.reduce(:+)
end

# 6. I love you, a little , a lot, passionately ... not at all
def how_much_i_love_you(nb_petals)
  case nb_petals
  when 0..7
    'I love you'
  when 8..15
    'a little'
  when 16..100
    'a lot'
  else
    'passionately'
  end
end