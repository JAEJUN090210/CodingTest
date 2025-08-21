N, M = map(int, input().split())

min_package = float('inf')
min_single = float('inf')

for _ in range(M):
    package, single = map(int, input().split())
    min_package = min(min_package, package)
    min_single = min(min_single, single)

cost1 = ((N // 6) + 1) * min_package

cost2 = N * min_single

cost3 = (N // 6) * min_package + (N % 6) * min_single

print(min(cost1, cost2, cost3))
