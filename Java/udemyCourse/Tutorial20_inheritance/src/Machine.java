/**
 * An example class
 * @author davidcardoso
 */

// Since this class is public, you can use it in other classes
public class Machine {
    
    private String name = "Machine type 1"; 
    // Since this is private, name is only accessible to this class, regardless
    // of if its inheritied by other classes
    
    // Do not override variables. Results won't be good. Only methods
    
    public void start() {
        System.out.println("Machine started");
    }
    public void stop() {
        System.out.println("Machine stopped");
    }
}
