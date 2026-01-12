PERCENTAGE_OF_READJUSTMENT = [0.15, 0.12, 0.10, 0.07, 0.04]


def main():
    salary = float(input())
    readjustment = define_readjustment_percentage(salary)
    salary_increase = salary * readjustment
    new_salary = salary + salary_increase
    print_result(readjustment, salary_increase, new_salary)


def define_readjustment_percentage(salary):
    if salary <= 400.00:
        return PERCENTAGE_OF_READJUSTMENT[0]
    elif salary <= 800.00:
        return PERCENTAGE_OF_READJUSTMENT[1]
    elif salary <= 1200.00:
        return PERCENTAGE_OF_READJUSTMENT[2]
    elif salary <= 2000.00:
        return PERCENTAGE_OF_READJUSTMENT[3]
    else:
        return PERCENTAGE_OF_READJUSTMENT[4]


def print_result(readjustment, salary_increase, new_salary):
    print(f"Novo salario: {new_salary:.2f}")
    print(f"Reajuste ganho: {salary_increase:.2f}")
    print(f"Em percentual: {readjustment * 100:.0f} %")


if __name__ == "__main__":
    main()
