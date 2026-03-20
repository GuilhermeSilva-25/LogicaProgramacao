import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int NumberOfGames = 0;
            int interVictories = 0;
            int gremioVictories = 0;
            int draws = 0;

            while (true) {
                int interGoals = input.nextInt();
                int gremioGoals = input.nextInt();

                NumberOfGames++;

                if (interGoals == gremioGoals) {
                    draws++;
                } else if (interGoals > gremioGoals) {
                    interVictories++;
                } else {
                    gremioVictories++;
                }

                int code;

                do {
                    System.out.println("Novo grenal (1-sim 2-nao)");
                    code = input.nextInt();
                } while (code < 1 || code > 2);

                if (code == 2) {
                    break;
                }
            }

            System.out.printf("%d grenais%nInter:%d%nGremio:%d%nEmpates:%d%n", NumberOfGames, interVictories,
                    gremioVictories, draws);

            if (interVictories == gremioVictories) {
                System.out.println("Nao houve vencedor");
            } else if (interVictories > gremioVictories) {
                System.out.println("Inter venceu mais");
            } else {
                System.out.println("Gremio venceu mais");
            }
        }
    }
}