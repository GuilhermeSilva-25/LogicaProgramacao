import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {

            while (true) {
                int x = input.nextInt();

                if (x == 0) {
                    return;
                }

                StringBuilder sb = new StringBuilder();

                for (int i = 1; i <= x; i++) {
                    if (i != x) {
                        sb.append(i).append(" ");
                    } else {
                        sb.append(i).append("\n");
                    }
                }
                
                System.out.print(sb.toString());
            }
        }
    }
}