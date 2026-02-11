def main():
    value = int(input())
    for i in range(2, value + 1, 2):
        print(f"{i}^2 = {i * i}")


if __name__ == "__main__":
    main()
