# Merge two Sorted array
# O(n*m)

# n = int(input())
# while n!=0:
#     arr1 = list(map(int, input().split()))
#     arr2 = list(map(int, input().split()))
#     for i in range(len(arr1)):
#         for j in range(len(arr2)):
#             if arr1[i] > arr2[j]:
#                 arr1[i], arr2[j] = arr2[j], arr1[i]
#                 arr1.sort()
#                 arr2.sort()
#     arr1.append(arr2)
#     print(arr1)

# Kadane’s Algorithm
n = int(input())
while n!=0:
    a = int(input())
    arr = list(map(int, input().split()))
    max_start = arr[0]
    max_end = arr[0]
    for i in range(1, a):
        max_start = max(arr[i], max_start+arr[i])
        max_end = max(max_start, max_end)
    print(max_end)

