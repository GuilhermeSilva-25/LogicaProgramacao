def main():
    a, b, c, d = map(int, input().split())
    if are_values_accepted(a, b, c, d):
        print("Valores aceitos")
    else:
        print("Valores nao aceitos")


def are_values_accepted(a, b, c, d):
    return b > c and d > a and (c + d) > (a + b) and c > 0 and d > 0 and a % 2 == 0


if __name__ == "__main__":
    main()
