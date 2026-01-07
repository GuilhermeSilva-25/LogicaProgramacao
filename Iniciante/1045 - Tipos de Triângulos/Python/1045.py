def main():
    original_numbers = map(float, input().split())
    ordered_numbers = sorted(original_numbers, reverse=True)
    triangle_type = check_triangle_type(ordered_numbers)
    print(triangle_type.strip())


def check_triangle_type(ordered_numbers):
    formatted_text = ""
    a = ordered_numbers[0]
    b = ordered_numbers[1]
    c = ordered_numbers[2]

    if a >= b + c:
        return "NAO FORMA TRIANGULO\n"

    if a**2 == b**2 + c**2:
        formatted_text += "TRIANGULO RETANGULO\n"
    elif a**2 > b**2 + c**2:
        formatted_text += "TRIANGULO OBTUSANGULO\n"
    elif a**2 < b**2 + c**2:
        formatted_text += "TRIANGULO ACUTANGULO\n"

    if a == b and a == c:
        formatted_text += "TRIANGULO EQUILATERO\n"
    elif a == b or a == c or b == c:
        formatted_text += "TRIANGULO ISOSCELES\n"

    return formatted_text


if __name__ == "__main__":
    main()
