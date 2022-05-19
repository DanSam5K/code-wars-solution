# 1. Volume of a cuboid
def get_volume_of_cuboid(length, width, height)
  length * width * height
end

#2. Convert String to Integer
def string_to_integer(string)
  string.to_i
end

#3. return negative number
def negative(number)
  number unless number > 0
  -number
end