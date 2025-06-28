def min_coins(n):
    coins = [15, 10, 6, 3, 1]
    min_count = float('inf')
    max_15 = n // 15

    for take_15 in [max_15, max_15 - 1]:
        if take_15 < 0:
            continue
        remaining = n - take_15 * 15
        count = take_15
        for coin in coins[1:]:
            if remaining == 0:
                break
            count += remaining // coin
            remaining %= coin
        if remaining == 0 and count < min_count:
            min_count = count
    return min_count

t = int(input())
for _ in range(t):
    n = int(input())
    print(min_coins(n))
