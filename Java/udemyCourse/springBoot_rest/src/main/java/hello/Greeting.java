/*
This is the resource representation class (model) that will be used to create data

*/
package hello;

/**
 *
 * @author davidcardoso
 */
public class Greeting {
    private final long id;
    private final String content;
    
    // Create a constructor
    public Greeting(long id, String content) {
        this.id = id;
        this.content = content;
    }
    
    public long getId() {
        return id;
    }
    
    public String getContent() {
        return content;
    }
}

/* Keep in mind, Spring uses Jackson JSON library to convert the greeting class into JSON */