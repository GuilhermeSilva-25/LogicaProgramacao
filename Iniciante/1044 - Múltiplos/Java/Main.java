import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int a = input.nextInt();
            int b = input.nextInt();
            boolean isMultiple = checkIsMultiple(a, b);
            if (isMultiple) {
                System.out.println("Sao Multiplos");
            } else {
                System.out.println("Nao sao Multiplos");
            }
        }
    }

    public static boolean checkIsMultiple(int a, int b) {
        int largerNumber = Math.max(a, b);
        int smallerNumber = Math.min(a, b);

        return smallerNumber != 0 && largerNumber % smallerNumber == 0;
    }
}