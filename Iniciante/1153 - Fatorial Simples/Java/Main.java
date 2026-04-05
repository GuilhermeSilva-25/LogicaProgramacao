import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int n = input.nextInt();
            int factorialOfN = 1;

            while (n > 0) {
                factorialOfN *= n;
                n--;
            }

            System.out.println(factorialOfN);
        }
    }
}