/**
 *
 * @author davidcardoso
 */
public class App {
    public static void main(String[] args) {
        
        // Create a simple array
        int[] basicArray = {4,5,20};
        
        System.out.println(basicArray[0]); // Output 4
        
        // Two dimensional array
        int[][] grid = {
            {3,4,5,2},
            {2,7}
        }; // Notice the dynamic number of indexes
        
        System.out.println(grid[1][1]); // Output 7 [row][column]
        
        
        // Two dimensional array of strings (Since its a class, you need to create the objects)
        String[][] texts = new String[2][3];
        texts[0][1] = "Hello there";
        
        System.out.println(texts[0][1]); // Output set value
        
        // Loop a two dimensional array
        for (int row = 0; row < grid.length; row++) {
            for (int col = 0; col < grid[row].length ; col++) {
                System.out.println(grid[row][col]);
            }
            
            System.out.println(); // Output seperate lines
        }
        
        // Alternate way to set a multi-dimensional array
        String[][] words = new String[3][]; // Set to 3 rows, with an undefined amount of cols
        
        words[0] = new String[3]; // Set the index of the undefined cols
        words[0][1] = "Hi there"; // Set the value
        
        
    }
}
