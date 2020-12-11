# Greedy 

# N meeting Room 
n = int(input())
while(n!=0):
    arr = []
    arr1 = list(map(int, input().split()))
    arr2 = list(map(int, input().split()))
    i = 0
    print(i, end=" ")
    for j in range(len(arr2)):
        if(arr1[j] >= arr2[i]):
            print(j, end=" ")
            i = j   
                
            
    
