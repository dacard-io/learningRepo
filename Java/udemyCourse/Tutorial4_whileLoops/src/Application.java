/**
 *
 * @author davidcardoso
 */
public class Application {
    
    // Main function
    public static void main(String[] args) {
        
        int value = 10;
        
        // Create boolean type
        boolean loop = true;
        
        // You can use operators for bool types
        // boolean loop = 4 < 5 ---> Will evaulate to true
        
        // While true
        while (loop) {
            System.out.println("The number is now at: " + value);
            value--; // Decrement the value (You can also do value = value - 1
            
            if (value == 0) {
                System.out.println("Value is now 0. Exiting now...");
                loop = false;
            }
        }
        
        System.out.println("Program exited");
        
    }
}
