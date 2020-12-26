import Login from "../pageObjects/Login"

const login = new Login();

Given("I visit linked in main page", ()=> {
    login.visitLIn();
})