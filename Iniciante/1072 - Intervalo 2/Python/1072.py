def main():
    quantity_of_values = int(input())
    inside = 0
    outside = 0

    for _ in range(quantity_of_values):
        value = int(input())
        if 10 <= value <= 20:
            inside += 1
        else:
            outside += 1

    print(f"{inside} in")
    print(f"{outside} out")


if __name__ == "__main__":
    main()
