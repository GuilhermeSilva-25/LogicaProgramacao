TOTAL_HOURS_IN_A_DAY = 24


def main():
    start_time, final_time = map(int, input().split())
    game_duration = calculate_game_duration(start_time, final_time)
    print(f"O JOGO DUROU {game_duration} HORA(S)")


def calculate_game_duration(start_time, final_time):
    if start_time > final_time:
        return (final_time + TOTAL_HOURS_IN_A_DAY) - start_time
    elif (start_time == final_time):
        return TOTAL_HOURS_IN_A_DAY
    else:
        return final_time - start_time


if __name__ == "__main__":
    main()