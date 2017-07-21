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
        int myInt = 21;
        
        int loop = 0;
        
        
        // Typical if...elseif..else block
        if (myInt < 10) {
            System.out.println("myInt is less than 10");
        }
        else if (myInt > 20) {
            System.out.println("myInt is greater than 20");
        }
        else {
            System.out.println("myInt is not less than 10, but not greater than 20");
        }
        
        while (loop < 5) {
            System.out.printf("Looping x%d \n", loop);
            loop++;
            
            if (loop == 5) {
                System.out.println("Reached 5");
                break; // Never use this. Just be aware it exists
            }
        }
        
    }
}
