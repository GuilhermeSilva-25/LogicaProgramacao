def main():
    amount = int(input())

    for _ in range(amount):
        value = int(input())

        if value == 0:
            print("NULL")
        else:
            parity = "ODD" if value % 2 != 0 else "EVEN"
            sign = "POSITIVE" if value > 0 else "NEGATIVE"
            print(f"{parity} {sign}")


if __name__ == "__main__":
    main()
