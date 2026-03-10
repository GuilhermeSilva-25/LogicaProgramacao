def main():
    while True:
        m, n = map(int, input().split())

        if m <= 0 or n <= 0:
            break

        total_sum = 0
        start = min(m, n)
        end = max(m, n)

        for i in range(start, end + 1):
            print(i, end=" ")
            total_sum += i

        print(f"Sum={total_sum}")


if __name__ == "__main__":
    main()
