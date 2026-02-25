public class Main {
    public static void main(String... args) {
        int initialValueJ = 7;
        for (int i = 1; i <= 9; i += 2) {
            for (int j = initialValueJ; j >= initialValueJ - 2; j--) {
                System.out.printf("I=%d J=%d%n", i, j);
            }
            initialValueJ += 2;
        }
    }
}