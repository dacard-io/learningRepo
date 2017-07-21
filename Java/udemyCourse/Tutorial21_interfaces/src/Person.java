/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author davidcardoso
 */
public class Person implements Info {
    // Implement Info interface
    
    private String name;
    
    // Create constructor
    public Person(String name) {
        this.name = name;
    }
    
    public void greet() {
        System.out.printf("Hello there, I'm %s!\n", name);
    }
    
    @Override // Use annotation for debugging purposes
    public void showInfo() {
        System.out.printf("Person's name is: %s\n", name);
    }
}
