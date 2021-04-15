package tvshows.automation.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = {
			"src/test/resources/features/search.feature"
		},

        strict = false, plugin = {"pretty",
        "json:target/cucumber_json_reports/login.json",
        "html:target/login-html"},
        glue = {"tvshows.automation.pages",
                "tvshows.automation.steps",
                "tvshows.automation.utils",
                "tvshows.automation.hooks"})


public class SearchRunner{}
