import java.util.Scanner;

/**
 * Do...While loop demonstration, and variable scope
 * @author davidcardoso
 */
public class App {
    // Going over 
    public static void main(String[] args) {
        
        Scanner scanner = new Scanner(System.in);
        
        /* Keep the old code
        System.out.println("Enter a number: ");
        int value = scanner.nextInt();
        */
        
        // Declare value outside scope for usage
        int value = 0;
        
        do {
            System.out.println("Enter a number: ");
            value = scanner.nextInt();
        } while (value != 5); // Run loop until you get 5
        
        // You already know what this does vs regular while loop. Runs commands, then checks expression
        
        System.out.println("Got 5!");
    }
}
