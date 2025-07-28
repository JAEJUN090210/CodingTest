import sys
input = sys.stdin.readline

out = []
while True:
    a, b = map(int, input().split())
    if a == 0 and b == 0:
        break
    out.append(str(a + b))

sys.stdout.write('\n'.join(out))