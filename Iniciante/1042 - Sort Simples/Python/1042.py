def main():
    original_numbers = list(map(int, input().split()))
    ordered_numbers = sorted(original_numbers)
    print_array(ordered_numbers)
    print()
    print_array(original_numbers)


def print_array(array):
    for number in array:
        print(number)


if __name__ == "__main__":
    main()
