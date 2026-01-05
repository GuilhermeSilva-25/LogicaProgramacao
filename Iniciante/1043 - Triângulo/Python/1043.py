def main():
    a, b, c = map(float, input().split())
    is_triangle = check_is_triangle(a, b, c)
    if is_triangle:
        perimeter = calculate_perimeter(a, b, c)
        print(f"Perimetro = {perimeter:.1f}")
    else:
        area = calculate_area(a, b, c)
        print(f"Area = {area:.1f}")


def check_is_triangle(a, b, c):
    return a + b > c and a + c > b and b + c > a


def calculate_perimeter(a, b, c):
    return a + b + c


def calculate_area(a, b, c):
    return ((a + b) * c) / 2.0


if __name__ == "__main__":
    main()
