def main():
    value = int(input())
    months = create_calendar()
    month = identify_month(value, months)
    print(month)


def create_calendar():
    months = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December",
    }
    return months


def identify_month(value, months):
    return months.get(value)


if __name__ == "__main__":
    main()
