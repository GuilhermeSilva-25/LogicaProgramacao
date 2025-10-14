def main():
    total_distance_traveled = int(input())
    total_fuel_used = float(input())
    average_car_consumption = calculate_average_car_consumption(
        total_distance_traveled, total_fuel_used
    )
    print(f"{average_car_consumption:.3f} km/l")


def calculate_average_car_consumption(distance, fuel):
    return distance / fuel


if __name__ == "__main__":
    main()
