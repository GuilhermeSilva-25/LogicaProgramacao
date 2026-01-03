def main():
    x, y = map(float, input().split())
    quadrant_status = check_quandrant_status(x, y)
    print(quadrant_status)


def check_quandrant_status(x, y):
    if x == 0 and y == 0:
        return "Origem"
    elif x == 0:
        return "Eixo Y"
    elif y == 0:
        return "Eixo X"
    elif x > 0 and y > 0:
        return "Q1"
    elif x < 0 and y > 0:
        return "Q2"
    elif x < 0 and y < 0:
        return "Q3"
    else:
        return "Q4"


if __name__ == "__main__":
    main()
