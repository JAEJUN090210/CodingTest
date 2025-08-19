N = int(input())
num = N
count = 0

while True:
    count += 1
    a = num // 10
    b = num % 10
    c = (a + b) % 10
    num = (b * 10) + c

    if num == N:
        break

print(count)
