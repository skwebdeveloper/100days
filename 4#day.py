# =================================================
# Chef And Easy Problem
# =================================================        
1. 

for _ in range(int(input())):
    n = int(input())
    arr = list(map(int, input().split()))
    arr.sort()
    count = 0
    for i in range(n-1,-1,-2):
        count += arr[i]
    print(count)   


2. 

n = int(input())
result = []
while(n != 0):
    n = n - 1 
    a = int(input())
    arr = list(map(int, input().split()))
    l = len(arr)
    arr.sort()
    start = arr[0]
    last = arr[l-1]
    res = start + last
    result.append(res)
print(result, '\n')




# =================================================
# SubArray not having ZERO
# =================================================

n = int(input())
arr = list(map(int, input().split()))
count = 0
temp = []
for i in range(n):
    if arr[i] != 0:
        count += 1
        temp.append(count)
    else:
        count = 0
print(temp)        
print(max(temp)) if len(temp)> 0 else print(0)                 
    
    
        
# =================================================
# SubArray GCD
# =================================================        

def gcd(curr,i):
    first = curr
    second = i
    if first > second:
        small = second
    else:
        small = first
    for i in range(1, small+1):
        if(first % i == 0 and second % i == 0):
            gcd = i
    return gcd        


        
                
                
                
           