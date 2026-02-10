import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int quantityOfValues = input.nextInt();
            int in = 0;
            int out = 0;
            for (int i = 0; i < quantityOfValues; i++) {
                int value = input.nextInt();
                if (value >= 10 && value <= 20) {
                    in++;
                } else {
                    out++;
                }
            }
            System.out.printf("%d in\n", in);
            System.out.printf("%d out\n", out);
        }
    }
}