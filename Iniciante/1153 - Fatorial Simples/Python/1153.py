def main():
    n = int(input())
    factorial_of_n = 1

    while n > 0:
        factorial_of_n *= n
        n -= 1

    print(factorial_of_n)


if __name__ == "__main__":
    main()