class Node:
    def __init__(self,data):
        self.data = data
        self.left = None
        self.right = None

# ==================================================
# Boundary 
# ==================================================

        
def BoundaryLeft(root):
    if root is None:
        return 
    if(root.left):
        print(root.data)
        BoundaryLeft(root.left)
    else:
        print(root.data)
        BoundaryLeft(root.right)
    
def BoundaryRight(root):
    if root is None:
        return     
    if(root.right):
        print(root.data)
        BoundaryRight(root.right)
    else:
        print(root.data)
        BoundaryRight(root.left)
                   
def BoundaryLeaf(root):
    if root is None:
        return     
    if(root):
        BoundaryLeaf(root.left)
        if(root.left is None and root.right is None):
            print(root.data)
        BoundaryLeaf(root.right)
            
def Boundary(root):
    if(root):
        print(root)
        BoundaryLeft(root)
        BoundaryLeaf(root.left)
        BoundaryLeaf(root.right)
        BoundaryRight(root)


# =====================================================
# Sum Tree 
# =====================================================

def sum(root):
    if root is None:
        return 0
    return (sum(root.left) + sum(root.right) + root.data)



def SumTree(root):
    if root is None or root.left is None and root.right is None:
        return 1
    left = sum(root.left)
    right = sum(root.right)
    if((left+right) == root.data and SumTree(root.left) and SumTree(root.right)):
        return 1
    return 0






# =====================================================
# Walk
# =====================================================

for i in range(int(input())):
    n = int(input())
    arr = list(map(int, input().split()))
    res = []
    for i in range(n):
        res.append(arr[i]+i)
    print(max(res)) 

   
                












      
        
        