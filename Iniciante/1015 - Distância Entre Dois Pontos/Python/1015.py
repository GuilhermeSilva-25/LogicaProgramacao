def main():
    x1, y1 = map(float, input().split())
    x2, y2 = map(float, input().split())
    distance_between_points = calculate_distance_between_points(x1, y1,x2, y2)
    print(f"{distance_between_points:.4f}")


def calculate_distance_between_points(x1, y1,x2, y2):
    return (((x2 - x1) ** 2) +((y2 - y1) ** 2)) ** 0.5


if __name__ == "__main__":
    main()