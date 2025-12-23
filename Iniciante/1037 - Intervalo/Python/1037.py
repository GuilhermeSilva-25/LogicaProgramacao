def main():
    value = float(input())
    interval = select_range(value)
    print(interval)


def select_range(value):
    if value < 0 or value > 100:
        return "Fora de intervalo"
    elif 0 <= value <= 25:
        return "Intervalo [0,25]"
    elif value <= 50:
        return "Intervalo (25,50]"
    elif value <= 75:
        return "Intervalo (50,75]"
    else:
        return "Intervalo (75,100]"


if __name__ == "__main__":
    main()