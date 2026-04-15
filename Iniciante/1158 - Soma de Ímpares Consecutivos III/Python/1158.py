def main():
    n = int(input())

    for _ in range(n):
        x, y = map(int, input().split())

        sum_total = 0
        count = y
        value = x

        if value % 2 == 0:
            value += 1

        while count > 0:
            sum_total += value
            value += 2
            count -= 1

        print(sum_total)


if __name__ == "__main__":
    main()
