TOTAL_MINUTES_IN_A_HOUR = 60
TOTAL_MINUTES_IN_A_DAY = 1440


def main():
    start_hour, start_minute, final_hour, final_minute = map(int, input().split())

    hours, minutes = calculate_game_duration(
        start_hour, start_minute, final_hour, final_minute
    )

    print(f"O JOGO DUROU {hours} HORA(S) E {minutes} MINUTO(S)")


def calculate_game_duration(start_hour, start_minute, final_hour, final_minute):
    start_total_minutes = start_hour * TOTAL_MINUTES_IN_A_HOUR + start_minute
    end_total_minutes = final_hour * TOTAL_MINUTES_IN_A_HOUR + final_minute

    duration_in_minutes = end_total_minutes - start_total_minutes

    if duration_in_minutes <= 0:
        duration_in_minutes += TOTAL_MINUTES_IN_A_DAY

    return convert_time(duration_in_minutes)


def convert_time(time):
    return divmod(time, TOTAL_MINUTES_IN_A_HOUR)


if __name__ == "__main__":
    main()
