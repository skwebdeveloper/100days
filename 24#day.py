# Input:
# 3
# 4 2 10
# 3
# 1 2 3
# 4
# 5 2 9 6
# 0

# Output:
# 1
# 0
# 2
arr = list(map(int, input().split()))
arr.sort()
maximum = arr[len(arr) - 1]
arr.remove(maximum)
count = 0
for i in range(len(arr)):
    count += arr[i]
if count < maximum:
    print('1')
elif count == maximum:
    print('0')    
else:
    print("2")    

