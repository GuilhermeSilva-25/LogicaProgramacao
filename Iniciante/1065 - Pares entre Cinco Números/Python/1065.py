NUMBER_OF_VALUES = 5


def main():
    number_of_even_values = 0
    for _ in range(NUMBER_OF_VALUES):
        value = int(input())
        if value % 2 == 0:
            number_of_even_values += 1
    print(f"{number_of_even_values} valores pares")


if __name__ == "__main__":
    main()
