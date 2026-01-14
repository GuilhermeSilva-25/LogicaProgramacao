import java.util.Scanner;
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int code = input.nextInt();

            Map<Integer, String> ddds = createMapDDD();

            String city = identifyCity(code, ddds);

            print(city);
        }
    }

    public static Map<Integer, String> createMapDDD() {
        Map<Integer, String> ddds = new HashMap<>();

        ddds.put(61, "Brasilia");
        ddds.put(71, "Salvador");
        ddds.put(11, "Sao Paulo");
        ddds.put(21, "Rio de Janeiro");
        ddds.put(32, "Juiz de Fora");
        ddds.put(19, "Campinas");
        ddds.put(27, "Vitoria");
        ddds.put(31, "Belo Horizonte");

        return ddds;
    }

    public static String identifyCity(int ddd, Map<Integer, String> ddds) {
        if (ddds.containsKey(ddd)) {
            return ddds.get(ddd);
        } else {
            return "DDD nao cadastrado";
        }
    }

    public static void print(String result) {
        System.out.println(result);
    }
}
