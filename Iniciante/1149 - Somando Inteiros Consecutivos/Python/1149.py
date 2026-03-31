def main():
    values = list(map(int, input().split()))

    a = values[0]

    for v in values[1:]:
        if v > 0:
            n = v
            break

    sum_total = 0

    for i in range(n):
        sum_total += a + i

    print(sum_total)


if __name__ == "__main__":
    main()