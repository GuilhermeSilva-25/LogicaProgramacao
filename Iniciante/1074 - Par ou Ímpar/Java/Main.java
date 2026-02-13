import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int amount = input.nextInt();
            for (int i = 0; i < amount; i++) {
                int value = input.nextInt();

                if (value == 0) {
                    System.out.println("NULL");
                } else {
                    String parity = (value % 2 != 0) ? "ODD" : "EVEN";
                    String sign = (value > 0) ? "POSITIVE" : "NEGATIVE";
                    System.out.println(parity + " " + sign);
                }
            }
        }
    }
}