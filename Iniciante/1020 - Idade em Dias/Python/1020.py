def main():
    age_in_days = int(input())
    converted_time = convert_time(age_in_days)
    print(converted_time)


def convert_time(age_in_days):
    DAYS_IN_A_YEAR = 365
    DAYS_IN_A_MONTH = 30
    years, remaining_days = divmod(age_in_days, DAYS_IN_A_YEAR)
    months, days = divmod(remaining_days, DAYS_IN_A_MONTH)
    return f"{years} ano(s)\n{months} mes(es)\n{days} dia(s)"


if __name__ == "__main__":
    main()