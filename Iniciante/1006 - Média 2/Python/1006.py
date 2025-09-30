def main():
    a = float(input())
    b = float(input())
    c = float(input())
    WEIGHT_A = 2
    WEIGHT_B = 3
    WEIGHT_C = 5
    TOTAL_WEIGHT = WEIGHT_A + WEIGHT_B + WEIGHT_C
    student_average = ((a * WEIGHT_A) + (b * WEIGHT_B) + (c * WEIGHT_C)) / TOTAL_WEIGHT
    print(f"MEDIA = {student_average:.1f}")


if __name__ == "__main__":
    main()
