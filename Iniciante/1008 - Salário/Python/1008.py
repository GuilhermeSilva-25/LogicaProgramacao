def main():
    employee_number = int(input())
    hours_worked = int(input())
    hourly_rate = float(input())
    wage = hours_worked * hourly_rate
    print(f"NUMBER = {employee_number}\nSALARY = U$ {wage:.2f}")


if __name__ == "__main__":
    main()
