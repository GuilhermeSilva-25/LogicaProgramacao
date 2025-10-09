def main():
    a, b, c = map(float, input().split())
    PI = 3.14159
    triangle_area = calculate_triangle_area(a, c)
    circle_area = calculate_circle_area(c, PI)
    trapezoid_area = calculate_trapezoid_area(a, b, c)
    square_area = calculate_square_area(b)
    rectangle_area = calculate_rectangle_area(a, b)
    print(f"TRIANGULO: {triangle_area:.3f}")
    print(f"CIRCULO: {circle_area:.3f}")
    print(f"TRAPEZIO: {trapezoid_area:.3f}")
    print(f"QUADRADO: {square_area:.3f}")
    print(f"RETANGULO: {rectangle_area:.3f}")


def calculate_triangle_area(cathetus1, cathetus2):
    return (cathetus1 * cathetus2) / 2.0


def calculate_circle_area(radius, pi):
    return pi * (radius**2)


def calculate_trapezoid_area(base1, base2, height):
    return ((base1 + base2) * height) / 2.0


def calculate_square_area(side):
    return side * side


def calculate_rectangle_area(base, height):
    return base * height


if __name__ == "__main__":
    main()
