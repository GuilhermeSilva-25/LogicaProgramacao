def main():
    a = float(input())
    b = float(input())
    WEIGHT_A = 3.5
    WEIGHT_B = 7.5
    TOTAL_WEIGHT = WEIGHT_A + WEIGHT_B
    student_average = ((a * WEIGHT_A) + (b * WEIGHT_B)) / TOTAL_WEIGHT
    print(f"MEDIA = {student_average:.5f}")


if __name__ == "__main__":
    main()
