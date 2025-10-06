def main():
    id_part_1_str, amount_part_1_str, price_part_1_str = input().split()
    id_part_2_str, amount_part_2_str, price_part_2_str = input().split()
    id_part_1 = int(id_part_1_str)
    amount_part_1 = int(amount_part_1_str)
    price_part_1 = float(price_part_1_str)
    id_part_2 = int(id_part_2_str)
    amount_part_2 = int(amount_part_2_str)
    price_part_2 = float(price_part_2_str)
    total_value = (amount_part_1 * price_part_1) + (amount_part_2 * price_part_2)
    print(f"VALOR A PAGAR: R$ {total_value:.2f}")


if __name__ == "__main__":
    main()
