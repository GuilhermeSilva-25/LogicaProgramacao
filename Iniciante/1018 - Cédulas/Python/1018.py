BANKNOTES = [100, 50, 20, 10, 5, 2, 1]


def main():
    value = int(input())
    print(value)
    calculate_banknotes(value)


def calculate_banknotes(value):
    for banknote in BANKNOTES:
        amount_banknotes = value // banknote
        print_quantity_banknotes(amount_banknotes, banknote)
        value %= banknote


def print_quantity_banknotes(amount_banknotes, banknoteValue):
    print(f"{amount_banknotes} nota(s) de R$ {banknoteValue},00")


if __name__ == "__main__":
    main()
