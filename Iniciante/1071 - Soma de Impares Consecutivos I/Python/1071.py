def main():
    x = int(input())
    y = int(input())
    sum_ = 0
    end = max(x, y)
    start = min(x, y) + 1

    if start % 2 == 0:
        start += 1

    for i in range(start, end, 2):
        sum_ += i

    print(sum_)


if __name__ == "__main__":
    main()
