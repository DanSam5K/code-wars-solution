# 1. Mad Max: Recursion Road
def max(arr)
  return arr[0] if arr.length == 1
  arr[0] > arr[1] ? arr[0] : max(arr[1..-1])
end

# 2. The Supermarket Queue
def queue_time(customers, n)
  queue = Array.new(n, 0)
  customers.each { |customer| 
    queue[queue.index(queue.min)] += customer
  }
  queue.max
end

# 3. Pairs of gloves
def number_of_pairs(n)
  return 0 if n == 0
  return 1 if n == 1
  return number_of_pairs(n - 1) + number_of_pairs(n - 2)
end

# 4. find numbers with same amount of divisors
def count_pairs_int(diff, n_max)
  count = 0
  (1..n_max).each do |n|
    count += 1 if divisors(n) == divisors(n + diff)
  end
  count
end

def divisors(n)
  (1..n).select { |i| n % i == 0 }.length
end

