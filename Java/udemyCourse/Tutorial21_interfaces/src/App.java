/**
 * Interfaces tutorial
 * @author davidcardoso
 */

public class App {
    public static void main(String[] args) {
        Machine mach1 = new Machine();
        
        Person person1 = new Person("David"); // Pass in name through constructor
        
        mach1.start();
        person1.greet();
        mach1.showInfo();
        person1.showInfo();
        
        // You can also create objects straight from the interface itself (Not sure why I would do that.)
        Info info1 = new Machine();
        info1.showInfo();
        Info info2 = person1; // Refer to person1 object declaration, and creates a new instance from info2
        info2.showInfo();
    }
     
}
