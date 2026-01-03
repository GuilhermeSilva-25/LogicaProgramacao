import math

WEIGHTS = [2, 3, 4, 1]


def main():
    grades = list(map(float, input().split()))
    average = calculate_weighted_average(grades)
    average = math.floor(average * 10) / 10.0
    print(f"Media: {average:.1f}")
    check_student_status(average)


def calculate_weighted_average(grades):
    total = 0.0
    total_weight = 0.0

    for grade, weight in zip(grades, WEIGHTS):
        total += grade * weight
        total_weight += weight

    return total / total_weight


def handle_exam(initial_average):
    exam_grade = float(input())
    print(f"Nota do exame: {exam_grade:.1f}")

    final_average = (initial_average + exam_grade) / 2.0

    if final_average >= 5.0:
        print("Aluno aprovado.")
    else:
        print("Aluno reprovado.")

    print(f"Media final: {final_average:.1f}")


def check_student_status(average):
    if average >= 7.0:
        print("Aluno aprovado.")
    elif average < 5.0:
        print("Aluno reprovado.")
    else:
        print("Aluno em exame.")
        handle_exam(average)


if __name__ == "__main__":
    main()
