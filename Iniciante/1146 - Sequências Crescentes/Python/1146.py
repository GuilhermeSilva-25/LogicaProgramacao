def main():
    while True:
        x = int(input())

        if x == 0:
            return

        result = []

        for i in range(1, x + 1):
            result.append(str(i))

        print(" ".join(result))

if __name__ == "__main__":
    main()