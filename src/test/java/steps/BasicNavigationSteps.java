package steps;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class BasicNavigationSteps {

    private String url = "https://www.wikipedia.org/";
    private WebDriver webDriver;

    @Before
    public void setUp() {
        System.setProperty("webdriver.chrome.driver", "C:\\WebDriver\\chromedriver.exe");
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--start-maximized");
        webDriver = new ChromeDriver(options);
    }

    @Given("^I navigate to the test website$")
    public void navigateToWebSite() {
        webDriver.get(url);
    }

    @Then("^I find the logo$")
    public void findTheLogo() {
        webDriver.findElement(By.className("central-textlogo__image"));
    }

    @Given("^I make a simple search$")
    public void makeSimpleSearch() {
        webDriver.findElement(By.id("searchInput")).sendKeys("Meister Eckhart" + Keys.ENTER);
    }

    @After
    public void tearDown() {
        webDriver.close();
    }
}
