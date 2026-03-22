import java.util.Scanner;

public class Main {
    public static void main(String... args) {
        try(Scanner input = new Scanner(System.in)) {
            int x = input.nextInt();
            int y = input.nextInt();
            int start = Math.min(x, y) + 1;
            int end = Math.max(x, y);

            for (int i = start; i < end; i++) {
                if (i % 5 == 2 || i % 5 == 3) {
                    System.out.println(i);
                }
            }
        }
    }
}