import java.util.Scanner; // Import Scanner class from java.util

/**
 *
 * @author davidcardoso
 */
public class Application {
    public static void main(String[] args) {
        // Use the class Scanner to hold user_input
        // Create new Scanner object, and contain in user_input, and pass in argument System.in
        Scanner user_input = new Scanner(System.in);
        // Output a prompt
        System.out.println("Enter a line of text: ");
        // Wait for user to enter line
        String line = user_input.nextLine();
        System.out.println("You entered: '" + line + "'");
        
        /* Now ask for an integer */
        // Create another scanner object
        Scanner intScanner = new Scanner(System.in);
        // Output prompt
        System.out.println("Enter an integer: ");
        // Wait for integer and enter
        int userInt = intScanner.nextInt();
        // Output what was typed
        System.out.println("You entered: " + userInt);
        
        /* If you enter a string or other data type in the integer type for the user input,
           you will get an an error as expected. This will be fixed later.
        */
    }
}
