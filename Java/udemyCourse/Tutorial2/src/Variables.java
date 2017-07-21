/**
 * Variables tutorial
 * @author davidcardoso
 */
public class Variables {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        
        //int myNumber; // Declare variable data type
        //myNumber = 88; // Initialize variable
        
        // You can also do it in one step.
        int myNumber = 88;
        
        // More data types
        short shortNum = 847; // Short number
        long longInt = 39429323; // Long number - a 64bit value
        double doubleInt = 3.4394; // Double integer - a double precision floating point number
        float floatInt = 3.43439234234f; // Float integer - remember to add f at the end, or it will default to double 
        
        // More types
        char charType = 'a'; // A single character
        boolean boolType = true; // Boolean
        byte byteType = 127; // Byte type, useful for storing data in measured bytes
        
        
        System.out.println(myNumber); // Print variable
        System.out.println(shortNum);
        System.out.println(longInt);
        System.out.println(doubleInt);
        System.out.println(floatInt);
        System.out.println(charType);
        System.out.println(boolType);
        System.out.println(byteType);
        
    }
    
}
