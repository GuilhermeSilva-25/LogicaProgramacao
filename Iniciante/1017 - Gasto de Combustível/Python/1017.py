def main():
    hours_spent_traveling = int(input())
    average_speed = int(input())
    fuel_required = calculate_fuel_required(hours_spent_traveling, average_speed)
    print(f"{fuel_required:.3f}")


def calculate_fuel_required(hours_spent_traveling, average_speed):
    KILOMETERS_PER_LITER = 12.0
    return (hours_spent_traveling * average_speed) / KILOMETERS_PER_LITER


if __name__ == "__main__":
    main()