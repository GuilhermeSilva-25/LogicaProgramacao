def main():
    n = int(input())
    
    total_guinea_pigs = 0
    total_rabbits = 0
    total_rats = 0
    total_frogs = 0

    for _ in range(n):
        number, letter = input().split()
        number = int(number)

        total_guinea_pigs += number

        if letter == 'C':
            total_rabbits += number
        elif letter == 'R':
            total_rats += number
        elif letter == 'S':
            total_frogs += number

    percentage_rabbits = total_rabbits / total_guinea_pigs * 100
    percentage_rats = total_rats / total_guinea_pigs * 100
    percentage_frogs = total_frogs / total_guinea_pigs * 100

    print(f"Total: {total_guinea_pigs} cobaias")
    print(f"Total de coelhos: {total_rabbits}")
    print(f"Total de ratos: {total_rats}")
    print(f"Total de sapos: {total_frogs}")
    print(f"Percentual de coelhos: {percentage_rabbits:.2f} %")
    print(f"Percentual de ratos: {percentage_rats:.2f} %")
    print(f"Percentual de sapos: {percentage_frogs:.2f} %")

if __name__ == "__main__":
    main()