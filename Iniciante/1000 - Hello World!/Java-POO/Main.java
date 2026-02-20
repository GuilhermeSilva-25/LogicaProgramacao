interface MessageProvider {
    String getMessage();
}

class HelloWorldProvider implements MessageProvider {
    @Override
    public String getMessage() {
        return "Hello World!";
    }
}

interface Printer {
    void print();
}

class ConsolePrinter implements Printer {
    private final MessageProvider provider;

    public ConsolePrinter(MessageProvider provider) {
        this.provider = provider;
    }

    @Override
    public void print() {
        System.out.println(provider.getMessage());
    }
}

public class Main {
    public static void main(String[] args) { 
        MessageProvider provider = new HelloWorldProvider();
        Printer printer = new ConsolePrinter(provider);
        
        printer.print();
    }
}