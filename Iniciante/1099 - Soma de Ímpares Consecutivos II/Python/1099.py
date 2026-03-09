def main():
    n = int(input())

    for i in range(n):
        x, y = map(int, input().split())
        print(calculateOddSum(x, y))


def calculateOddSum(x, y):
    total_sum = 0
    end = max(x, y)
    start = min(x, y) + 1

    if start % 2 == 0:
        start += 1

    j = start
    while j < end:
        total_sum += j
        j += 2

    return total_sum

if __name__ == "__main__":
    main()
