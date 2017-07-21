// To use the "ocean" package do the following:
import ocean.Fish; // import the Fish class, from ocean
import ocean.*; // Import all classes from ocean package
import ocean.plants.Seaweed; // Import the "plants" subpackage from "ocean" package

/**
 * Packages tutorial
 * @author davidcardoso
 */



/*
Packages are used to organize your projects sensibly, and allow you to avoid naming
conflicts. For example you can't two classes named "Fish" in the same package, but
if seperated in different packages, you can.
*/
public class App {
    public static void main(String[] args) {
        // Use class in different package
        Fish smallfish = new Fish();
        
        Seaweed kelp = new Seaweed();
    }
}
