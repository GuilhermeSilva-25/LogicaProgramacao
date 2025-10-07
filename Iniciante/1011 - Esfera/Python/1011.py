def main():
    radius = float(input())
    PI = 3.14159
    FRACTIONAL_CONSTANT = 4.0 / 3.0
    volume_sphere = FRACTIONAL_CONSTANT * PI * (radius**3)
    print(f"VOLUME = {volume_sphere:.3f}")


if __name__ == "__main__":
    main()
