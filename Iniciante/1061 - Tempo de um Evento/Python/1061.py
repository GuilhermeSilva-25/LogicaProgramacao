SECONDS_IN_A_DAY = 86400
SECONDS_IN_A_HOUR = 3600
SECONDS_IN_A_MINUTE = 60


def main():
    start_time = get_time_in_seconds()
    end_time = get_time_in_seconds()
    duration = end_time - start_time

    days, remainder = divmod(duration, SECONDS_IN_A_DAY)
    hours, remainder = divmod(remainder, SECONDS_IN_A_HOUR)
    minutes, seconds = divmod(remainder, SECONDS_IN_A_MINUTE)

    print(f"{days} dia(s)")
    print(f"{hours} hora(s)")
    print(f"{minutes} minuto(s)")
    print(f"{seconds} segundo(s)")


def get_time_in_seconds():
    _, day_str = input().split()
    day = int(day_str)
    hour, minute, second = map(int, input().split(" : "))
    total_seconds = (
        (day * SECONDS_IN_A_DAY)
        + (hour * SECONDS_IN_A_HOUR)
        + (minute * SECONDS_IN_A_MINUTE)
        + second
    )

    return total_seconds


if __name__ == "__main__":
    main()