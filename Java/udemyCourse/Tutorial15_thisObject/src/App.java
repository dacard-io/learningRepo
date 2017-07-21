/**
 * "This" contextual object tutorial
 * @author davidcardoso
 */

class Frog {
    private String name;
    private int age;
    
    // static sets the property across all objects/classes
    
    public void setAge(int age) {
        this.age = age; // Notice that I'm using the same age variable regardless of the argument name,
                        // because of this.age, which allows me to avoid naming conflicts
    }
    public int getAge() {
        return age;
    }
    
    // "this" refers to the current object. NOT Class, when you instantiate an object (i.e coolFrog = new Frog(); )
}

public class App {
    public static void main(String[] args) {
        // Create frog object
        Frog coolFroggy = new Frog(); // Creates a Frog object derived from Frog class. this only works within this object
        coolFroggy.setAge(10);
        System.out.println("Froggy is " + coolFroggy.getAge() + " years old");
    }
}
