def main():
    a, b = map(int, input().split())
    is_multiple = check_is_multiple(a, b)
    if is_multiple:
        print("Sao Multiplos")
    else:
        print("Nao sao Multiplos")


def check_is_multiple(a, b):
    larger_number = max(a, b)
    smaller_number = min(a, b)

    return smaller_number != 0 and larger_number % smaller_number == 0


if __name__ == "__main__":
    main()
