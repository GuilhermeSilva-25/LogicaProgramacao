SNACK_MENU = {1: 4.00, 2: 4.50, 3: 5.00, 4: 2.00, 5: 1.50}

def main():
    code, amount = map(int, input().split())
    total_bill = calculate_total_bill(code, amount)
    print(f"Total: R$ {total_bill:.2f}")


def calculate_total_bill(code, amount):
    return SNACK_MENU[code] * amount


if __name__ == "__main__":
    main()