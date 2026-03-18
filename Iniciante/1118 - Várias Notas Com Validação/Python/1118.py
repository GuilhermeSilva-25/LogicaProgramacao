def main():
    while True:
        sum_of_grades = 0
        counter = 0

        while counter < 2:
            grade = float(input())

            if 0 <= grade <= 10:
                sum_of_grades += grade
                counter += 1
            else:
                print("nota invalida")

        print("media = {:.2f}".format(sum_of_grades / 2))

        while True:
            print("novo calculo (1-sim 2-nao)")
            code = int(input())
            if code == 1 or code == 2:
                break

        if code == 2:
            break


if __name__ == "__main__":
    main()
