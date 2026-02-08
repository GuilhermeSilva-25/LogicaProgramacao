def main():
    value = int(input())
    number = value

    if number % 2 == 0:
        number += 1

    for i in range(6):
        print(number)
        number += 2


if __name__ == "__main__":
    main()
