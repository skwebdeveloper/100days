class Node:
    def __init__(self,data):
        self.left = None
        self.right = None
        self.data  =data
        
# ===================================================
# BOUNDARY TREE        
# ===================================================
        
def Boundaryleft(root):
    if root is None:
        return 0
    if(root):
        if(root.left):
            print(root.data)
            Boundaryleft(root.left)
        elif(root.right):
            print(root.data) 
            Boundaryleft(root.right)  
            
def BoundaryRight(root):
    if root is None:
        return 0
    if(root):
        if(root.right):
            print(root.data)
            BoundaryRight(root.right)
        elif(root.left):
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
        print(root.data)
        Boundaryleft(root.left)
        BoundaryLeaf(root.left)
        BoundaryLeaf(root.right)
        BoundaryRight(root.right)        
        
        
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)
root.left.left.left = Node(6)
Boundary(root)        
        
        
        
        
        
        
        
        
        
        
        

# ===================================================
# DIAGONAL TREE 
# ===================================================

from collections import deque
def DOT(root):
    if root is None:
        return 0
    a = deque(root)
    b = deque(null)
    while root:
        p = deque(root)
        if(p == null):
            enque(null)
            p = deque()
            if(p == null):
                break
        while(p != null):
            print(p)
            if(p.left):
                enque(p.left)
            p = p.right    
                    
    
# ===================================================
# Balanced
# ===================================================


# O(n)

class Height:
    def __init__(self):
        self.height = 0
        
def isB(root):
    l = Height()
    r = Height() 
    
    if root is None:
        return True
    lr = isB(root.left)
    rr = isB(root.right)
    
    if abs(lr.height - rr.height) <= 1:
        return lr and rr
    else:
        return False       


        
def Height(root):
    if root is None:
        return 0
    else:
        return max(Height(root.left),Height(root.right)) + 1
        
def BalancedTree(root):
    if root is None:
        return True
    left = Height(root.left)
    right = Height(root.right)
    if(abs(left-right) <= 1 and BalancedTree(root.left) is True and BalancedTree(root.right) is True):
        return True
    return False
 
# O(n^2)               
               
        

# =============================================
# Lucky 5
# =============================================

for _ in range(int(input())):
    n = int(input())
    count = 0
    for i in range(n):
        if(i != '4' and i != '7'):
            count += 1
    print(count) 
    
# =============================================
    

            