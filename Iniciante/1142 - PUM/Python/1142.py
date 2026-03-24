def main():
    n = int(input())
    value = 1

    for i in range(n):
        for j in range(value, value + 3):
            print(j, end=" ")
        
        value += 4
        print("PUM")


if __name__ == "__main__":
    main()