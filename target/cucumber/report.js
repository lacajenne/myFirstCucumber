$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/BasicNavigation.feature");
formatter.feature({
  "line": 1,
  "name": "basic navigation",
  "description": "As a user\r\nI want to visit the Wikipedia web page\r\nSo that I test web navigation",
  "id": "basic-navigation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4396071165,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "visit the test page",
  "description": "",
  "id": "basic-navigation;visit-the-test-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I navigate to the test website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I find the logo",
  "keyword": "Then "
});
formatter.match({
  "location": "BasicNavigationSteps.navigateToWebSite()"
});
formatter.result({
  "duration": 1406509146,
  "status": "passed"
});
formatter.match({
  "location": "BasicNavigationSteps.findTheLogo()"
});
formatter.result({
  "duration": 42568143,
  "status": "passed"
});
formatter.after({
  "duration": 362072629,
  "status": "passed"
});
formatter.before({
  "duration": 3032119921,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "make a simple search",
  "description": "",
  "id": "basic-navigation;make-a-simple-search",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I navigate to the test website",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I make a simple search",
  "keyword": "And "
});
formatter.match({
  "location": "BasicNavigationSteps.navigateToWebSite()"
});
formatter.result({
  "duration": 1109547187,
  "status": "passed"
});
formatter.match({
  "location": "BasicNavigationSteps.makeSimpleSearch()"
});
formatter.result({
  "duration": 388602785,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: call function result missing \u0027value\u0027\n  (Session info: chrome\u003d67.0.3396.79)\n  (Driver info: chromedriver\u003d2.31.488763 (092de99f48a300323ecf8c2a4e2e7cab51de5ba8),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027FRQNB123631\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_25\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptSslCerts: true, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.31.488763 (092de99f48a300..., userDataDir: C:\\Users\\GLacagni\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.79, webStorageEnabled: true}\nSession ID: 2c9c63ed6e2fef9fc4cf0579adfc85ce\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:408)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:100)\r\n\tat steps.BasicNavigationSteps.makeSimpleSearch(BasicNavigationSteps.java:39)\r\n\tat ✽.And I make a simple search(features/BasicNavigation.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 404255492,
  "status": "passed"
});
});