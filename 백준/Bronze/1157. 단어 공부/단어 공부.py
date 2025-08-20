word = input().strip().upper()
count = {}

for ch in word:
    count[ch] = count.get(ch, 0) + 1

max_count = max(count.values())
most_frequent = [ch for ch, cnt in count.items() if cnt == max_count]

if len(most_frequent) > 1:
    print("?")
else:
    print(most_frequent[0])
