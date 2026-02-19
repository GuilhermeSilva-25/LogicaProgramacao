QUANTITY_OF_VALUES = 100

def main():
    higher_value = float('-inf')
    position = 0

    for i in range(QUANTITY_OF_VALUES):
        value = int(input())
        if value > higher_value:
            higher_value = value
            position = i + 1

    print(higher_value)
    print(position)

if __name__ == "__main__":
    main()
