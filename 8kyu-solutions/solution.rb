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
  outcome = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
  outcome[(nb_petals - 1) % outcome.size]
end

# 7. How many stairs will Suzuki climb in 20 years? soln
def stairs_in_20(stairs)
  sum = 0
  stairs.each { |step|
     step.each { |stair|
      sum += stair * 20
     }
  }
  sum
end

# 8. Find the missing letter
def find_missing_letter(array)
  array.each_cons(2).map { |a, b| b - a }.reduce(:+)
end

# 9. Is string Uppercase solution
class String
  def is_uppercase?
    self == self.upcase
  end
end

# 10. find numbers which are divisible by given number
def divisible_by(numbers, n)
  numbers.select { |number| number % n == 0 }
end

# 11. am I a wilson prime?
def am_i_wilson(n)
  n == 5 || n == 13 || n == 563
end

# 12. Sum of positive
def positive_sum(arr)
  arr.select { |number| number > 0 }.reduce(:+)
end

# 13. Localize The Barycenter of a Triangle solution
def bar_triang(p1, p2, p3)
  [((p1[0] + p2[0] + p3[0]) / 3.0).round(4), ((p1[1] + p2[1] + p3[1]) / 3.0).round(4)]
end

# 14. Is pythagoras triplet
def is_triplet(a, b, c)
  a**2 + b**2 == c**2
end