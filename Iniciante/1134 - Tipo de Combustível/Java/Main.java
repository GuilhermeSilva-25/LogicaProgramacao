import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int alcohol = 0;
            int gasoline = 0;
            int diesel = 0;

            while (true) {
                int code = input.nextInt();

                if (code == 4) {
                    break;
                }

                switch (code) {
                    case 1 -> alcohol++;
                    case 2 -> gasoline++;
                    case 3 -> diesel++;

                }
            }

            System.out.printf("MUITO OBRIGADO%nAlcool: %d%nGasolina: %d%nDiesel: %d%n", alcohol, gasoline, diesel);
        }
    }
}