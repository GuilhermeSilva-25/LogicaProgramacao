class GreetingSevice {
    public String getHelloWorldMessage() {
        return "Hello World";
    }
}

public class Main {
    public static void main(String[] args) {
        GreetingSevice service = new GreetingSevice();
        String message = service.getHelloWorldMessage();
        System.out.println(message);
    }
}