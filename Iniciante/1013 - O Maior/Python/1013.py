def main():
    a, b, c = map(int, input().split())
    higher_value = find_higher_value(a, b, c)
    print(f"{higher_value} eh o maior")


def find_higher_value(a, b, c):
    return max(a, b, c)


if __name__ == "__main__":
    main()