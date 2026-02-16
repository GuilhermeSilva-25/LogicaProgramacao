def main():
    value = int(input())
    for i in range(1, 10001):
        if i % value == 2:
            print(i)

if __name__ == "__main__":
    main()
