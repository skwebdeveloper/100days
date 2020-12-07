# ==============================================
# Equal part Cake
# ==============================================

# n = int(input())
# while(n!=0):
#     n = n - 1
#     a = int(input())
#     arr = []
#     if(360%a == 0):
#         arr.append('y')
#     else:
#         arr.append('n')
#     if a<=360:
#         arr.append('y')
#     else:
#         arr.append('n')
#     if (a*(a+1))/2 <= 360:
#         arr.append('y')
#     else:
#         arr.append('n')
#     print((' ').join(arr)) 
            
   
# ==============================================
# 2 3 or 9 at last 
# ==============================================

# n = int(input())
# while(n!=0):
#     n = n-1
#     count = 0
#     (A,B) = map(int, input().split())
#     for i in range(A,B+1):
#         res = i % 10
#         if(res == 2 or res == 3 or res == 9):
#             count += 1
#     print(count)                
        
        
# ==============================================
# Please like me
# ==============================================        

# n = int(input())
# while(n != 0):
#     n = n - 1
#     (L,D,S,C) = map(int, input().split())
#     count = 0 
#     if(D == 1):
#         if(S >= 1):
#             print("ALIVE AND KICKING")
#         else:
#             print("DEAD AND ROTTING")    
#     else:
#         for i in range(1,D):
#             S = S + (S*C)
#             if(S >= 1):
#                 print("ALIVE AND KICKING")
#             else:
#                 print("DEAD AND ROTTING")
  


