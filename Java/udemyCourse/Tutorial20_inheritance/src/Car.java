/**
 * Class car Inherits from Machine class
 * @author davidcardoso
 */
public class Car extends Machine {
    // "extends" means Car is a child class of Machine, or derived from Machine.
    // So it inherits all stuff from Machine class
    
    public void wipeWindsheild() {
        System.out.println("Car begins wiping windsheild.");
    }
    
    // You can copy the same method thats inheritied, and overwrite the method
    public void start() {
        System.out.println("Car started");
    }
    
    //@Override // @ is an annotation, so if you place above a method, it checks if its
    //an override. Great for debugging and cleaning code.
}
