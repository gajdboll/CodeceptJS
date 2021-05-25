
const { ConsoleMessage } = require("puppeteer");

Feature('Login');

Scenario('Login test - correct credentials',  ({ I }) => {

I.amOnPage('/login'); // moved to the sub page /login
I.wait(1); // forced wait for 1 sec
I.see('Login Page'); //assertion
I.dontSee('google'); //assertion
let a =I.grabTitle; //content of the page Title to present in the console
console.log('**************************************');
I.fillField('username','tomsmith');
I.fillField('password','SuperSecretPassword!');
console.log(a); // console output
I.wait(1); 
})

