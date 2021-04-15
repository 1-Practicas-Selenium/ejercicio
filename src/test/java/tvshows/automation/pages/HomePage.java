package tvshows.automation.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import tvshows.automation.utils.Properties;

public class HomePage extends BasePage {
	
	//page members
	@FindBy(how = How.NAME, using = "search")	
	WebElement cmpSearch;
	@FindBy(how = How.XPATH	, using = "//i[text()='search']")
	WebElement btnSearch;
	
	public HomePage(WebDriver driver) {
		super(driver);
		PageFactory.initElements(this.driver, this);
	}
		
	public void goTo() {
				driver.get(Properties.PRINCIPAL_URL);
	}

	public void correctwebsite() {
		String expectedTitle = "Guitar Inventory";
		String actualTitle =	driver.getTitle();
		if(actualTitle.equals(expectedTitle)){
			System.out.println("Correct WebSite");
		}else {
			System.out.println("Incorrect WebSite");
		}
	}
	
	public boolean isAt() {
		return  cmpSearch.isDisplayed() &&
				btnSearch.isDisplayed();
				
	}

	public void search_empty() {
		cmpSearch.clear();
		btnSearch.click();
	}

	public void emptyCharacters() {
		cmpSearch.sendKeys("  ");
	}

	public void buttonSearch() {
		btnSearch.click();	
	}

	public void inputInformation() {
		// TODO Auto-generated method stub
		cmpSearch.sendKeys("Batman");
	}

	

}

