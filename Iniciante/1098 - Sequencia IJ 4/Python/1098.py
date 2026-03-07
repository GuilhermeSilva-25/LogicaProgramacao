def main():
    for k in range(11):
        i = k * 0.2
        for j in range(1, 4):
            valueJ = j + i
            if i == 0 or i == 1 or i == 2:
                print(f"I={i:.0f} J={valueJ:.0f}")
            else:
                print(f"I={i:.1f} J={valueJ:.1f}")

if __name__ == "__main__":
    main()