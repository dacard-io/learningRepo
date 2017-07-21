/* 
This is a resource controller, that is responsible for serving the greeting model.
All HTTP requests are handles by a controller. They are identified by @RestController
*/

package hello;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController // Declare RestController
public class GreetingController {
    private static final String template = "Hello %s!";
    private final AtomicLong counter = new AtomicLong();
    
    // You can optionally do @RequestMapping(method=GET) to specify the type of method
    // If no method specified, it by default maps to all methods
    @RequestMapping("/greeting") // Create a map to /greeting
    public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name) {
        /*
        Line above is weird, but basically, it creates greeting method with the Greeting class, which does the following:
        - Binds the @RequestParam "name" from the URL, gives it a default value, and sets the type
          to a string variable called name
        - It then returns a new Greeting object with two arguments (from the constructor) that specifies
          the counter which will set the ID on the object, and the variable "template"
        
        
        The only thing confusing about this, is that nowehere in the code did I specify to output
        any JSON. I didn't specify shit
        
        Okay looked into it, and looked at the way the class Greeting is implemented. So it looks like
        @RestController simply returns a Greeting object, and is automatically written to HTTP as JSON.
        @RestController is @Controller and @ResponseBody rolled together
        */
        
        return new Greeting(counter.incrementAndGet(), String.format(template, name));
    }
}
