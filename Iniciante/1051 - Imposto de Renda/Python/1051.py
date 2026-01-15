def main():
    salary = float(input())
    value_income_tax = calculate_income_tax(salary)
    print_result(value_income_tax)


def calculate_income_tax(salary):
    tax = 0.0

    if salary > 4500.00:
        tax += (salary - 4500.00) * 0.28
        salary = 4500.00

    if salary > 3000.00:
        tax += (salary - 3000.00) * 0.18
        salary = 3000.00

    if salary > 2000.00:
        tax += (salary - 2000.00) * 0.08

    return tax


def print_result(value_income_tax):
    if value_income_tax == 0.0:
        print("Isento")
    else:
        print(f"R$ {value_income_tax:.2f}")


if __name__ == "__main__":
    main()
