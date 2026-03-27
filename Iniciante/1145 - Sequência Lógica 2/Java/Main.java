import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int x = input.nextInt();
            int y = input.nextInt();
            int counter = 0;

            for (int i = 1; i <= y; i++) {

                System.out.print(i);
                counter++;

                if (counter < x) {
                    System.out.print(" ");
                } else {
                    System.out.println();
                    counter = 0;
                }
            }
        }
    }
}