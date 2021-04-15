$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/search.feature");
formatter.feature({
  "name": "Search Page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Home page correct",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open tvShow website",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.i_open_to_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "It is correct website",
  "keyword": "When "
});
formatter.match({
  "location": "HomeSteps.it_is_correct_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will be in Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_will_be_in_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search box is empty",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open tvShow website",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.i_open_to_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I do a search empty",
  "keyword": "When "
});
formatter.match({
  "location": "HomeSteps.I_do_search_empty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The search don\u0027t show me nothing",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.Search_dont_show_nothing()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search box with empty characters",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open tvShow website",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.i_open_to_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter a empty characters",
  "keyword": "When "
});
formatter.match({
  "location": "HomeSteps.Enter_empty_characters()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press the button search",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.Press_button_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The search don\u0027t show me nothing",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.Search_dont_show_nothing()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[text()\u003d\u0027Search cannot be empty.\u0027]\"}\n  (Session info: chrome\u003d89.0.4389.114)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-GQCE12F\u0027, ip: \u0027192.168.15.9\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.114, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\PROPIE~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:56148}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f8170d6f44347836a9b7c421280c11df\n*** Element info: {Using\u003dxpath, value\u003d//span[text()\u003d\u0027Search cannot be empty.\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.isDisplayed(Unknown Source)\r\n\tat tvshows.automation.pages.SearchPage.shownothing(SearchPage.java:32)\r\n\tat tvshows.automation.steps.HomeSteps.Search_dont_show_nothing(HomeSteps.java:30)\r\n\tat ✽.The search don\u0027t show me nothing(file:src/test/resources/features/search.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Show a list of items",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open tvShow website",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.i_open_to_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter a information correct",
  "keyword": "When "
});
formatter.match({
  "location": "HomeSteps.Enter_information_correct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press the button search",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.Press_button_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Show me a list of items",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.Show_list_items()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});