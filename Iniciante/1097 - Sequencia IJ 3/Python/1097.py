def main():
    initial_value_j = 7

    for i in range(1, 10, 2):
        for j in range(initial_value_j, initial_value_j - 3, -1):
            print(f"I={i} J={j}")
        initial_value_j += 2


if __name__ == "__main__":
    main()
