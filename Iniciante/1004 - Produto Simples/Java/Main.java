import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            int valueOne = sc.nextInt();
            int valueTwo = sc.nextInt();
            int prod = valueOne * valueTwo;
            System.out.printf("PROD = %d%n", prod);
        }
    }
}