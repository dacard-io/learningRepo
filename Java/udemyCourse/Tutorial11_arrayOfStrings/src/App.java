/**
 * Working with arrays of strings
 * @author davidcardoso
 */
public class App {
    public static void main(String[] args) {
        
        String[] words = new String[3];
        words[0] = "Hello";
        words[1] = "to";
        words[2] = "you";
        // Shorthand
        String[] fruits = {"Apple", "Banana", "Pear", "Kiwi"};
        
        System.out.println(words[2]); // Print second index of array
        
        // Another way to iterate through arrays
        for (String fruit: fruits) { // Equivalent of for (objects as object)
            System.out.println(fruit);
        }
        
        int value = 123; // int is a primitive type, that holds a restricted amount of memory
        //String text; //  Remember that String is a class, notice the capital letter
        String text = null; // Every reference's default value is null
        
        System.out.println(text); // Will print the letters null, but keep in mind, its an actual type
        
        String[] texts = new String[2];
        System.out.println(texts[0]); // Will output null reference
        
    }
}
