import java.util.Scanner;

/**
 * Switch...case tutorial
 * @author davidcardoso
 */
public class App {
    public static void main(String[] args) {
        
        // Create scanner object for usage
        Scanner input = new Scanner(System.in);
        
        System.out.println("Please enter a command: ");
        String text = input.nextLine();
        
        switch (text) {
            case "start":
                System.out.println("Machine Started");
                break;
            case "stop":
                System.out.println("Machine stopped");
                break;
            default:
                System.out.println("You did not enter neither 'start' nor 'stop'");
        }
        
    }
}
