from math import sqrt

def main():
    a, b, c = map(float, input().split())
    delta = calculate_delta(a, b, c)
    if delta < 0 or a == 0:
        print("Impossivel calcular")
    else:
        roots = calculate_roots(a, b, delta)
        print_roots(roots)


def calculate_delta(a, b, c):
    return b ** 2 - 4 * a * c


def calculate_roots(a, b, delta):
    r1 = (-b + sqrt(delta)) / (2 * a)
    r2 = (-b - sqrt(delta)) / (2 * a)
    return r1, r2


def print_roots(roots):
    print(f"R1 = {roots[0]:.5f}")
    print(f"R2 = {roots[1]:.5f}")


if __name__ == "__main__":
    main()