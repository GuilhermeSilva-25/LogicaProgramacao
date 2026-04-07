def main():
    number_of_ages = 0
    sum_of_ages = 0

    while True:
        age = int(input())

        if age < 0:
            break

        number_of_ages += 1
        sum_of_ages += age

    average_ages = sum_of_ages / number_of_ages
    print(f"{average_ages:.2f}")


if __name__ == "__main__":
    main()
