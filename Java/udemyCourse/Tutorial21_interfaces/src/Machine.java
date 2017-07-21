/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author davidcardoso
 */
public class Machine implements Info {
    // Implement Info interface. Pretty simple.
    private int id = 7;
    
    public void start() {
        System.out.println("Machine started");
    }
    
    @Override // Use annotation for debugging purposes
    public void showInfo() {
        System.out.printf("Machine ID is: %d\n", id);
    }
}
