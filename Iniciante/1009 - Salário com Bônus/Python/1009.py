def main():
    seller_name = input()
    fixed_salary = float(input())
    total_sales = float(input())
    COMMISSION_RATE = 0.15
    commission = total_sales * COMMISSION_RATE
    total_salary = fixed_salary + commission
    print(f"TOTAL = R$ {total_salary:.2f}")


if __name__ == "__main__":
    main()
