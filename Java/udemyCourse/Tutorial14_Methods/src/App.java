/**
 * Methods tutorial / I also included more stuff like arguments and return types
 * @author davidcardoso
 */

class Person {
    int age;
    String name;
    
    // Create method for class with a return type of void, and use an argument
    // Set access modifier to public to allow other classes outside App to use it
    public void speakTo(String arg){
        System.out.println("Person object says hello to " + arg + "!");
        System.out.println("This object's name is " + name); // Use the variables of the class
        System.out.println("THis object's name is " + age);
    }
    
    // Create a method with a return type of int to return an integer
    public int sum(int arg) {
        int total = age + arg;
        return total;
    }
}

/* A properly formed class. A class is supposed to be inmutable, 
    the class shown above allows you to make changes to values like so,
    person1.name = name; This is actually unsafe.

    You need to explicitely create setter and getter methods to explicitely tell
    the object what to do, or you can potentially bugs by accidently saving data.

    This also allows you to encapsulate and validate data. So if you try to save
    person1.age to a string or a double, you can have the option of throwing an exception
    or setting it to a default value.
*/
class Square {
    private int width; // Make this property private so it can be set outside this class
    
    // A private member is only accessible within the same class as it is declared.
    // protected member is accessible within all classes in the same package and within subclasses in other packages
    
    // Setter
    void setWidth(int args) {
        width = args;
    }
    // Getter
    int getWidth() {
        return width;
    }
}

public class App {
    public static void main(String[] args) {
        
        Person person1 = new Person();
        person1.age = 23;
        person1.name = "James";
        person1.speakTo("Davie Boy");
        
        Square small_square = new Square();
        small_square.setWidth(300);
        System.out.println("Width of small square object is:" + small_square.getWidth());
        
        System.out.println(person1.age);
        System.out.println("If " + person1.name + " was 10 years older, he would be " + person1.sum(10));
    }
}
