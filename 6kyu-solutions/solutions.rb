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