WEIGHT_A = 2.0
WEIGHT_B = 3.0
WEIGHT_C = 5.0
TOTAL_WEIGHT = WEIGHT_A + WEIGHT_B + WEIGHT_C


def main():
    NUMBER_OF_NOTES = 3

    n = int(input())
    for _ in range(n):
        notes = list(map(float, input().split()))
        average = calculate_average(notes)
        print(f"{average:.1f}")


def calculate_average(notes):
    return (
        (notes[0] * WEIGHT_A) + (notes[1] * WEIGHT_B) + (notes[2] * WEIGHT_C)
    ) / TOTAL_WEIGHT


if __name__ == "__main__":
    main()
