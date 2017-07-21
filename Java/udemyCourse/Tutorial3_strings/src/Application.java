/**
 * Strings tutorial
 * @author davidcardoso
 */
public class Application {
    
    // Main function
    public static void main(String[] args) {
        // Create a primitive type, an integer
        int myInt = 9;
        double myDouble = 3.8834;
        
        // Create string type (Not a primitive type, String is actually a class, so its uppercase)
        String text = "Hello";
        // Concat some strings
        String blank = " ";
        String name = "Bob";
        String greeting = text + blank + name;
        
        System.out.println(text);
        System.out.println(greeting);
        System.out.println("Bob" + " hello, this is inside the System.out function");
        System.out.println("The number in myInt is: " + myInt);
        System.out.println("The number in myDouble is: " + myDouble);
    }
}
