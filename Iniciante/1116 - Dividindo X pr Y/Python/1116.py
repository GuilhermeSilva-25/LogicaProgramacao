def main():
    n = int(input())
    for i in range(n):
        x, y = map(float, input().split())

        if y == 0:
            print("divisao impossivel")
        else:
            print(f"{x/y:.1f}")


if __name__ == "__main__":
    main()
