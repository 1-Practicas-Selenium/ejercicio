package tvshows.automation.hooks;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;


public class Hooks {
	
	public static WebDriver driver;
	
	@Before
	public void before() {
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	}
	
	@After
	public void after() {
		driver.close();
	}
}
