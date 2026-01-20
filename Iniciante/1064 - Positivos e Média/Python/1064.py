def main():
    QUANTITY_OF_VALUES = 6
    count = 0
    total = 0.0

    for _ in range(QUANTITY_OF_VALUES):
        value = float(input())
        if value > 0:
            count += 1
            total += value

    print(f"{count} valores positivos")
    print(f"{total / count:.1f}")


if __name__ == "__main__":
    main()
