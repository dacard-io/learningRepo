/**
 * Inheritance tutorial
 * @author davidcardoso
 */
public class App {
    public static void main(String[] args) {
        // Notice how there is new importing and I can use the class in the other file.
        Machine timemachine = new Machine(); // Create a new timemachine object
        
        timemachine.start(); // Use a public method from external class
        timemachine.stop(); // Use public method from external class
        
        Car car1 = new Car();
        car1.start();
        car1.wipeWindsheild(); // Use method specific to Car.
        car1.stop();
    }
}
