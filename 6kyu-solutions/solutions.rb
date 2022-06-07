# 1. Mad Max: Recursion Road
def max(arr)
    return arr[0] if arr.length == 1
    arr[0] > arr[1] ? arr[0] : max(arr[1..-1])
end