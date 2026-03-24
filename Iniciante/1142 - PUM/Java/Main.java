import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int n = input.nextInt();
            int value = 1;
            for (int i = 0; i < n; i++) {
                for (int j = value; j <= value + 2; j++) {
                    System.out.print(j + " ");
                }

                value += 4;
                System.out.println("PUM");

            }
        }
    }
}