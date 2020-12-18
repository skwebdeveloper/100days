# =========================================
# Rotate Matrix
# =========================================
def rotate(arr):
    length = len(arr)
    if arr is None:
        return
    for i in range(length):
        for j in range(i,length):
            arr[i][j], arr[j][i] = arr[j][i], arr[i][j]
    return arr

arr =[[1,  2,  3,  4 ],[5,  6,  7,  8 ],[9,  10, 11, 12 ],[13, 14, 15, 16 ]]
print(rotate(arr))
print("TATA")


# =========================================
# Stock Buy and Sell
# =========================================
n = int(input())
while n!=0:
    arr = list(map(int, input().split()))
    a = len(arr)
    i = 0
    while(i < a):
        while(i < a-1 and arr[i] > arr[i+1]):
            i += 1
        if i == a - 1:
            break
        buy = i
        i += 1
        while(i < a and arr[i] >= arr[i-1]):
            i += 1
        sell = i - 1
        print("Buy: Sell", buy, sell)



# =========================================
# Inversion of Array
# =========================================

n = int(input())
while n!=0:
    a = int(input())
    arr = list(map(int, input().split()))
    i, j = 0, 1
    count = 0
    for i in range(0, len(arr)):
        temp = arr[i]
        for j in range(1, i+1):
            if(arr[i] > arr[j]):
                count += 1
                i += 1
                j += 1
        temp += 1
    print(count)

# =========================================
# Next Permutation
# =========================================

# 1,2,3 -> 1,3,2
n = int(input())
while n!=0:
    a = int(input())
    arr = list(map(int, input().split()))
    if(a == 1):
        print(arr)
        break
    for i in range(len(arr)-1, -1, -1):
        if(arr[i] > arr[i-1]):
            arr[i], arr[i-1] = arr[i-1], arr[i]
            print(arr)
            break





