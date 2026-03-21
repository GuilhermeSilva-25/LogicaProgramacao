def main():
    x = int(input())
    y = int(input())
    total = 0
    end = max(x, y)
    start = min(x, y)

    for i in range(start, end + 1):
        if i % 13 != 0:
            total += i

    print(total)

if __name__ == "__main__":
    main()