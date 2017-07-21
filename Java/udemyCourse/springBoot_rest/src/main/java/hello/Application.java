// This is the main Application class that starts the server

package hello; // Import hello package (self) Don't use the default package

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Spring REST Demo
 * @author davidcardoso
 */

/* @SpringBootApplication is an annotation that automatically adds:
 * @Configuration - tags the class as a source of bean definitions for the application context.
 * @EnableAutoConfiguration - tells Spring Boot to start adding beans based on classpath settings, other beans, and various property settings.
 * @ComponentScan - tells Spring to look for other components in the 
 *
 */

@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
