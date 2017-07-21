/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author davidcardoso
 */
public class App {
    
    public static void main(String[] args) {
        int value = 7;
        
        /* Lets break it down:
        int creates space to hold an integer
        value is the name of the address
        */
        
        // Here is an array
        int[] values;
        // int[] Refers to a list of integers, and "values" is the reference
        // Lets allocate some values
        values = new int[3]; // Make "values" reference allocate space for three numbers;
        
        System.out.println(values[0]); // Going to print 0 since an integer wasn't initialized
        
        // Set an array value
        values[0] = 10;
        values[1] = 20;
        values[2] = 30;
        //values[3] = 40; Can't do this. Remember, you created three spaces, so remember, 3 is actually an index of 4.
        
        System.out.println(values[0]); // Will now output 10
        
        // Use a for loop to print the values
        for (int i = 0; i < values.length; i++) { // Haha it has a .length property thank god
            System.out.println(values[i]);
        }
        
        // Shorthand way to declare an array (This is nice and how it should be done)
        int[] numbers = {6,4,8};
    }
    
}
