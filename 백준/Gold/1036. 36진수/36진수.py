import sys
input = sys.stdin.readline

def to_int(ch):
    if '0' <= ch <= '9':
        return ord(ch) - ord('0')
    else:
        return ord(ch) - ord('A') + 10

def to_base36(num):
    if num == 0:
        return "0"
    digits = []
    while num > 0:
        r = num % 36
        if r < 10:
            digits.append(str(r))
        else:
            digits.append(chr(ord('A') + r - 10))
        num //= 36
    return ''.join(reversed(digits))

N = int(input())
nums = [input().strip() for _ in range(N)]
K = int(input())

gain = [0] * 36
for s in nums:
    l = len(s)
    for i, ch in enumerate(s):
        val = to_int(ch)
        power = l - i - 1
        gain[val] += (35 - val) * (36 ** power)

topK = sorted(range(36), key=lambda x: gain[x], reverse=True)[:K]
change_set = set(topK)

total = 0
for s in nums:
    l = len(s)
    for i, ch in enumerate(s):
        val = to_int(ch)
        if val in change_set:
            val = 35
        power = l - i - 1
        total += val * (36 ** power)

print(to_base36(total))
