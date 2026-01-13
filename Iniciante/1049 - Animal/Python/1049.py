def main():
    word1 = input().strip()
    word2 = input().strip()
    word3 = input().strip()

    animals = create_map_animals()
    animal = identify_animal(word1, word2, word3, animals)

    print(animal)


def create_map_animals():
    animals = {
        "vertebrado": {
            "ave": {"carnivoro": "aguia", "onivoro": "pomba"},
            "mamifero": {"onivoro": "homem", "herbivoro": "vaca"},
        },
        "invertebrado": {
            "inseto": {"hematofago": "pulga", "herbivoro": "lagarta"},
            "anelideo": {"hematofago": "sanguessuga", "onivoro": "minhoca"},
        },
    }
    return animals


def identify_animal(word1, word2, word3, animals):
    return animals[word1][word2][word3]


if __name__ == "__main__":
    main()
