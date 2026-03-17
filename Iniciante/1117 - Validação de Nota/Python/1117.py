def main():
    sum_of_grades = 0
    counter = 0

    while counter < 2:
        grade = float(input())

        if 0 <= grade <= 10:
            sum_of_grades += grade
            counter += 1
        else:
            print("nota invalida")

    print(f"media = {sum_of_grades / 2:.2f}")


if __name__ == "__main__":
    main()
