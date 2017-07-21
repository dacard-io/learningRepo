/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author davidcardoso
 */
public class Application {
    
    public static void main(String[] args) {
        /* Check out the syntax of an infinite for loop
        for (;;) {
            // Infinite for loop
        }
        */
        
        int myInt = 10;
        
        // Remember to declare and initialize "i" variable inside for expression
        for (int i = 0; i < myInt; i++) {
            // printl is printline, which creates new lines. printf creates formatting
            // Lets use System.out.printf to print formatted, to use placeholders
            System.out.printf("Hello world: %d\n", i); // %d placeholder is for integers
        }
        
        System.out.println("For Loop ended");
        
    }
}
