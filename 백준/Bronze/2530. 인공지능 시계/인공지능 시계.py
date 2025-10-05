A, B, C = map(int, input().split())
D = int(input())

total = A * 3600 + B * 60 + C
total += D
total %= 86400

A = total // 3600
B = (total % 3600) // 60
C = total % 60

print(A, B, C)
