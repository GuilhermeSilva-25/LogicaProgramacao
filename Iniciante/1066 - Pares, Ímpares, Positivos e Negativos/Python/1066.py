def main():
    NUMBER_OF_VALUES = 5
    even = 0
    odd = 0
    positive = 0
    negative = 0

    for _ in range(NUMBER_OF_VALUES):
        value = int(input())

        if value % 2 == 0:
            even += 1
        else:
            odd += 1

        if value > 0:
            positive += 1
        elif value < 0:
            negative += 1

    print(f"{even} valor(es) par(es)")
    print(f"{odd} valor(es) impar(es)")
    print(f"{positive} valor(es) positivo(s)")
    print(f"{negative} valor(es) negativo(s)")


if __name__ == "__main__":
    main()
