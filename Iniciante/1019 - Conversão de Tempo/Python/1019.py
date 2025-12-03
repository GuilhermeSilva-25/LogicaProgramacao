def main():
    duration_in_seconds = int(input())
    converted_time = convert_time(duration_in_seconds)
    print(converted_time)


def convert_time(duration_in_seconds):
    SECONDS_IN_HOUR = 3600
    SECONDS_IN_MINUTE = 60
    hours, remaining_seconds = divmod(duration_in_seconds, SECONDS_IN_HOUR)
    minutes, seconds = divmod(remaining_seconds, SECONDS_IN_MINUTE)
    return f"{hours}:{minutes}:{seconds}"


if __name__ == "__main__":
    main()
