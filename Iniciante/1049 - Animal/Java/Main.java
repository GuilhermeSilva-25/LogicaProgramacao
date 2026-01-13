import java.util.Scanner;
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            String word1 = input.nextLine();
            String word2 = input.nextLine();
            String word3 = input.nextLine();

            Map<String, Map<String, Map<String, String>>> animals = createMapAnimals();

            String animal = identifyAnimal(word1, word2, word3, animals);

            print(animal);
        }
    }

    public static Map<String, Map<String, Map<String, String>>> createMapAnimals() {
        Map<String, Map<String, Map<String, String>>> animals = new HashMap<>();

        animals.put("vertebrado", new HashMap<>());
        animals.put("invertebrado", new HashMap<>());

        animals.get("vertebrado").put("ave", new HashMap<>());
        animals.get("vertebrado").put("mamifero", new HashMap<>());
        animals.get("invertebrado").put("inseto", new HashMap<>());
        animals.get("invertebrado").put("anelideo", new HashMap<>());

        animals.get("vertebrado").get("ave").put("carnivoro", "aguia");
        animals.get("vertebrado").get("ave").put("onivoro", "pomba");
        animals.get("vertebrado").get("mamifero").put("onivoro", "homem");
        animals.get("vertebrado").get("mamifero").put("herbivoro", "vaca");
        animals.get("invertebrado").get("inseto").put("hematofago", "pulga");
        animals.get("invertebrado").get("inseto").put("herbivoro", "lagarta");
        animals.get("invertebrado").get("anelideo").put("hematofago", "sanguessuga");
        animals.get("invertebrado").get("anelideo").put("onivoro", "minhoca");

        return animals;
    }

    public static String identifyAnimal(String word1, String word2, String word3, Map<String, Map<String, Map<String, String>>> animals) {
        return animals.get(word1).get(word2).get(word3);
    }

    public static void print(String animal) {
        System.out.println(animal);
    }
}