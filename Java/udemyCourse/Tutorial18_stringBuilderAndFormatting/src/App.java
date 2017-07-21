/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * StringBuilder, StringBugger, String Formatting
 * @author davidcardoso
 */
public class App {
    public static void main (String[] args) {
        
       /* Inefficient way */
       String info = "";
       info += "My name is bob";
       info += " ";
       info += "I am a builder"; // Regular way to concatenate string
       
       System.out.println(info);
       
       /* Althought the output does come out, this is actually extremely
       inefficient since String class is immutable. Its actually recreating new
       strings and combining them. This can slow down your program.
       So use Stringbuilder instead.
       */
       
       /* Efficient method */
       StringBuilder sb = new StringBuilder(""); // Initialize StringBuilder with empty string
       
       sb.append("My name is Sue.");
       sb.append(" ");
       sb.append("I am a liontamer");
       System.out.println(sb.toString());
       
       StringBuilder s = new StringBuilder();
       s.append("My name is Roger.");
       s.append(" ");
       s.append("I am a skydiver.");
       System.out.println(s.toString());
       
       //// Formatting ///////////////////////////////////
       System.out.println("This is a \ttab character!\n");
       System.out.printf("Total cost: %d\n", 10); // Print format, print a 10 in the integer placeholder
       System.out.printf("Total cost is:%3d, and quantity is %d\n", 1, 10); // Prints an integer 3 characters long (great for columns), and another integer
       System.out.printf("Total cost is:%-3d, and quantity is %d\n", 13, 5); // %-3d left aligns, notice the width of the columns
    }
}
