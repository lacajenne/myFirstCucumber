$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/HelloWorld.feature");
formatter.feature({
  "line": 1,
  "name": "the Hello World class",
  "description": "As a user\r\nI want to test the Hello World class\r\nSo that I check that I get the right message",
  "id": "the-hello-world-class",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "check the message",
  "description": "",
  "id": "the-hello-world-class;check-the-message",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I have an HelloWorld instance",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "The message should be Hello, World!",
  "keyword": "Then "
});
formatter.match({
  "location": "HelloWorldSteps.instanceHelloWorld()"
});
formatter.result({
  "duration": 212489451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello, World!",
      "offset": 22
    }
  ],
  "location": "HelloWorldSteps.checkMessage(String)"
});
formatter.result({
  "duration": 6825375,
  "status": "passed"
});
});