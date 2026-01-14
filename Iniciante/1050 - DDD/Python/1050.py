def main():
    code = int(input())

    ddds = create_map_ddd()

    city = identify_city(code, ddds)

    print(city)

def create_map_ddd():
    ddds = {
        61: "Brasilia",
        71: "Salvador",
        11: "Sao Paulo",
        21: "Rio de Janeiro",
        32: "Juiz de Fora",
        19: "Campinas",
        27: "Vitoria",
        31: "Belo Horizonte"
    }
    return ddds


def identify_city(ddd, ddds):
    if ddd in ddds:
        return ddds[ddd]
    else:
        return "DDD nao cadastrado"


if __name__ == "__main__":
    main()
