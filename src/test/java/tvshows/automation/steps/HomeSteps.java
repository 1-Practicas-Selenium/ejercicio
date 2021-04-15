package tvshows.automation.steps;

import static org.junit.Assert.assertTrue;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HomeSteps extends BaseSteps {
	@Given("^I open tvShow website$")
	public void i_open_to_website() {
		home.goTo(); 
	}
	@When("^It is correct website$")
	public void it_is_correct_website() {
	    home.correctwebsite();
	}
	@Then("^I will be in Home Page$")
	public void i_will_be_in_Home_Page() {
	    assertTrue(home.isAt());
	}
	
	@When("^I do a search empty$")
	public void I_do_search_empty() {
	    home.search_empty();
	}
	@Then("^The search don't show me nothing$")
	public void Search_dont_show_nothing() {
	    assertTrue(search.shownothing());
	}
	
	@When("^Enter a empty characters$")
	public void Enter_empty_characters() {
		home.emptyCharacters();
	}
	
	
	@When("^Enter a information correct$")
	public void Enter_information_correct() {
		home.inputInformation();
	}
	
	@And("^I press the button search$")
	public void Press_button_search() {
		home.buttonSearch();
	}
		
	@Then("^Show me a list of items$")
	public void Show_list_items() {
		search.listItems();
	}
	  	
}
