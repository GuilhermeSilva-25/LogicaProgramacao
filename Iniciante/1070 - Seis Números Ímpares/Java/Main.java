import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int value = input.nextInt();
            int number = value;
            
            if (number % 2 == 0) {
                number++;
            }

            for (int i = 0; i < 6; i++) {
                System.out.println(number);
                number += 2;
            }
        }
    }
}