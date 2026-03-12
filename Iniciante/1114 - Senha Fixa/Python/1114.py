def main():
    correct_password = 2002

    while True:
        password = int(input())

        if password == correct_password:
            print("Acesso Permitido")
            break
        else:
            print("Senha Invalida")


if __name__ == "__main__":
    main()