package tvshows.automation.steps;

import org.openqa.selenium.WebDriver;

import tvshows.automation.hooks.Hooks;
import tvshows.automation.pages.HomePage;
import tvshows.automation.pages.SearchPage;

public class BaseSteps {
	protected WebDriver driver;
	public HomePage home;
	public SearchPage search;
	
	public BaseSteps() {
		this.driver = Hooks.driver;
		home   = new HomePage(driver);
		search = new SearchPage(driver);
	}
}
