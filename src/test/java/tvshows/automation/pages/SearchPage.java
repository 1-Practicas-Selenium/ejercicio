package tvshows.automation.pages;


import java.util.List;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class SearchPage extends BasePage {
	
	//page members
	@FindBy(how = How.XPATH	, using = "//span[text()='Search cannot be empty.']")
	WebElement emptylink;
	
	@FindBys({
			@FindBy(xpath = "//span[@class = 'card-title']")
	})
	List<WebElement> videoElements;
	
	public SearchPage(WebDriver driver) {
		super(driver);
		PageFactory.initElements(this.driver, this);
	}

	public boolean shownothing() {
		
		return emptylink.isDisplayed();
	}

	public void listItems() {
		if(videoElements.size()>1) {
			System.out.println("Movies search: " + videoElements.size());
		}
		else {
			System.out.println("Movies search" + videoElements.size());
			System.exit(-1);//falla no debo continuar
		}
	}
	
	
}
