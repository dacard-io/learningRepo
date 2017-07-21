/**
 * Constructors tutorial
 * @author davidcardoso
 */

class Machine {
    private int x;
    private int y;
    private String name;
    
    // Default constructor that takes no arguments
    Machine() {
        // If no arguments provided in constructor, run this constructor
        System.out.println("Ran default constructor for Machine object");
        
        // Run constructor inside constructor (vomits)
        // this(); // This will run default constructor (SELF, do not do)
        // this(3); // This will run second constructor
        // this(3, "Complex"); // This will run third constructor
    }
    
    // Create a constructor - Must be same name as class
    Machine(int arg) {
        System.out.println("Ran constructor for Machine object");
        x = 10; // Default of 10 when created
        y = arg;
    }
    
    // You can run a constructor based on the arguments provided. If two arguments of these
    // types are provided, this constructor will run instead
    Machine(int arg, String name) {
        System.out.println("Ran 2nd constructor for Machine object");
        x = 50; // Default of 10 when created
        this.name = name;
    }
    
    // Getters
    int getX() {
        return x;
    }
    int getY() {
        return y;
    }
    String getName() {
        return name;
    }
}

public class App {
    public static void main(String[] args) {
        
        Machine machineObj = new Machine(4); // Pass in 4 to set y in constructor
        System.out.println("Values in Machine object: (" + machineObj.getX() + "," + machineObj.getY() + ")");
        
        Machine machineObj2 = new Machine(2, "Dave the Robot"); // Pass in 2 to set y in constructor
        System.out.println("Values in Machine object #2: (" + machineObj2.getX() + "," + machineObj2.getY() + "," + machineObj2.getName() + ")");
        
        Machine machineObj3 = new Machine(); // Run default constructor
    }
}
