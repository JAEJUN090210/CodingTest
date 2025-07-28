import sys
input = sys.stdin.readline

t = int(input())
ans = []

for _ in range(t):
    a, b = map(int, input().split())
    ans.append(str(a + b))

sys.stdout.write('\n'.join(ans))