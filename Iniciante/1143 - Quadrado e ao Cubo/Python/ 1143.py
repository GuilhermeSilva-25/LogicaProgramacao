def main():
    n = int(input())

    for i in range(1, n + 1):
        square = i * i
        cube = i * i * i
        print(f"{i} {square} {cube}")

if __name__ == "__main__":
    main()