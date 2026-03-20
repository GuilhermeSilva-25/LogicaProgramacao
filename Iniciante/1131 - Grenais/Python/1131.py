def main():
    NumberOfGames = 0
    interVictories = 0
    gremioVictories = 0
    draws = 0

    while True:
        interGoals, gremioGoals = map(int, input().split())

        NumberOfGames += 1

        if interGoals == gremioGoals:
            draws += 1
        elif interGoals > gremioGoals:
            interVictories += 1
        else:
            gremioVictories += 1

        while True:
            print("Novo grenal (1-sim 2-nao)")
            code = int(input())
            if code == 1 or code == 2:
                break

        if code == 2:
            break

    print(f"{NumberOfGames} grenais")
    print(f"Inter:{interVictories}")
    print(f"Gremio:{gremioVictories}")
    print(f"Empates:{draws}")

    if interVictories == gremioVictories:
        print("Nao houve vencedor")
    elif interVictories > gremioVictories:
        print("Inter venceu mais")
    else:
        print("Gremio venceu mais")


if __name__ == "__main__":
    main()