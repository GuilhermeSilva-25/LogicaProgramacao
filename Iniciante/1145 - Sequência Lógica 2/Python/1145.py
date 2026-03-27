def main():
    x, y = map(int, input().split())
    counter = 0

    for i in range(1, y + 1):
        print(i, end="")
        counter += 1

        if counter < x:
            print(" ", end="")
        else:
            print()
            counter = 0


if __name__ == "__main__":
    main()