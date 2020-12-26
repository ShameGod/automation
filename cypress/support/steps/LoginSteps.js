import Login from "../pageObjects/Login"

const login = new Login();

Given("I visit linkedin", ()=> {
    cy.log("here we start")
    login.visitLIn();
})

When("I type my credidentials", () => {
    login.typeCredidentials();
})