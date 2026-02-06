import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int value = input.nextInt();
            for (int i = 1; i <= value; i += 2){
                System.out.println(i);
            }
        }
    }
}