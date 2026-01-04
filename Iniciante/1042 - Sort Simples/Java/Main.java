import java.util.Scanner;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int[] originalNumbers = new int[3];
            for (int i = 0; i < originalNumbers.length; i++) {
                originalNumbers[i] = input.nextInt();
            }
            int[] orderedNumbers = sortNumbers(originalNumbers);
            printArray(orderedNumbers);
            System.out.println();
            printArray(originalNumbers);
        }
    }

    public static int[] sortNumbers(int[] originalNumbers) {
        int[] copy = originalNumbers.clone();
        Arrays.sort(copy);
        return copy;
    }

    public static void printArray(int[] array) {
        for (int number : array) {
            System.out.println(number);
        }
    }
}