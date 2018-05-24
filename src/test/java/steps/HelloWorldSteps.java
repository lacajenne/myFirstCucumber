package steps;


import org.Lacajenne.HelloWorld;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class HelloWorldSteps {

    private HelloWorld _testInstance;

    @Given("^I have an HelloWorld instance$")
    public void instanceHelloWorld() {
        _testInstance = new HelloWorld();
    }

    @Then("^The message should be (.*?)$")
    public void checkMessage(String expectedMessage) {
        String actualMessage = _testInstance.getMessage();
        Assert.assertEquals(expectedMessage, actualMessage);
    }
}
