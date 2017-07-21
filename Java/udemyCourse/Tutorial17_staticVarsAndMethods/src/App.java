/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Static global modifier usage
 * @author davidcardoso
 */

/*
Usage case could be:
    - Takes some arguments, but never touches instance data, then make static
    - Counting the number of objects created
*/

class Thing {
    // Create member variables
    public String name;
    
    // Create a constant
    public final static int LUCKY_NUMBER = 7; // final means constant, meaning you can't reassign value, and you are required to give it a value from the getgo
    
    // Static class variables are called class variables
    public static String description;
    
    // Create a variable to hold number of thing instances
    public static int count = 0;
    
    // Use count to create unique ID for an object
    public int id;
    
    // Create a constructor run events on thing instantiation
    public Thing() {
        id = count; // Nice. Keep an ID on each object
        count++; // Increment count Oh shit thats incredibly useful
    }
    
    public void showName() {
        System.out.println("Object ID: " + id + " - Name: " + name);
        
        // In an instance method, you can access static data
        System.out.println(description);
    }
    
    // Create a static method
    public static void showInfo() {
        System.out.println(description); // You can refer to other static variables with static method
        //System.out.println(name); // Cannot refer static method to a regular member variable
    }
}

public class App {
    
    public static void main(String[] args) {
        
        // Sets the variable for ALL classes. (I don't know what the purpose of this is)
        Thing.description = "I am a thing class"; // Notice you access by th entire class
        // Run a static method from the thing class
        Thing.showInfo(); // Maybe this can be used for showing general information about an object?
        
        Thing thing1 = new Thing();
        Thing thing2 = new Thing();
        
        thing1.name = "Bob";
        thing2.name = "Sue";
        
        thing1.showName();
        thing2.showName();
        
        thing1.showInfo(); // Shows the same info regardless of both classes.
        thing2.showInfo();
        
        // Use a standard class that comes with java called "Math", with a constant
        System.out.println(Math.PI);  
        
        // Use the constant you created
        System.out.println(Thing.LUCKY_NUMBER);
        // Constants should be all uppercase
        
        // Get count of all Thing instances
        System.out.println("Number of things: " + Thing.count);
        
    }
    
}
