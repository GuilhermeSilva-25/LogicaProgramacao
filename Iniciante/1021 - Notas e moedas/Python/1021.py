BANKNOTES_LIST = [10000, 5000, 2000, 1000, 500, 200]
COINS_LIST = [100, 50, 25, 10, 5, 1]


def main():
    value = float(input())
    total_cents = round(value * 100)
    print("NOTAS:")
    remaining_cents = calculate_banknotes(total_cents)
    print("MOEDAS:")
    calculate_coins(remaining_cents)


def calculate_banknotes(total_cents):
    for banknote in BANKNOTES_LIST:
        amount_banknotes = total_cents // banknote
        print_quantity_banknotes(amount_banknotes, (banknote / 100))
        total_cents %= banknote
    return total_cents


def print_quantity_banknotes(amount_banknotes, banknote_value):
    print(f"{amount_banknotes} nota(s) de R$ {banknote_value:.2f}")


def calculate_coins(remaining_cents):
    for coin in COINS_LIST:
        amount_coins = remaining_cents // coin
        print_quantity_coins(amount_coins, (coin / 100.0))
        remaining_cents %= coin


def print_quantity_coins(amount_coins, coinValue):
    print(f"{amount_coins} moeda(s) de R$ {coinValue:.2f}")


if __name__ == "__main__":
    main()
