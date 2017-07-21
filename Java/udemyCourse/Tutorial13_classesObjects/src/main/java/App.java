/**
 * Classes and Objects tutorial
 * @author davidcardoso
 */

// A class is a template or blueprint for creating objects.
// Objects are everywhere in Java

/* 
Classes can contain:
1. Data. Represents state of object, variables, etc. variables declared in classes are
   called "instance variables"
2. Methods. Functions can go inside classes, like main() for example
*/

//
class Person {
    // Create instance variables
    int age;
    String name;
}

// Remember, when a class is public, the name of the class has to match the filename
public class App {
    // Main function
    public static void main(String[] args) {
        
        // Create a person object
        Person person1 = new Person();
        person1.age = 23;
        person1.name = "David Cardoso";
        
        
        System.out.println("Person's name is: " + person1.name + " and he is " + person1.age);
    }
}
