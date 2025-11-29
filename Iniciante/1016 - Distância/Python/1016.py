def main():
    distance = int(input())
    time = calculate_time(distance)
    print(f"{time} minutos")


def calculate_time(distance):
    TIME_PER_KILOMETER = 2
    return distance * TIME_PER_KILOMETER


if __name__ == "__main__":
    main()
