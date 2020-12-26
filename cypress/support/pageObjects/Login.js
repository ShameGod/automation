import LoginElements from "../elements/loginElements";

const loginElements = new LoginElements();
const username = Cypress.env("email2");
const password = Cypress.env("password");


class Login{

    visitLIn(){
        cy.visit(Cypress.config("baseUrl"));
    }

    typeCredidentials(){
        cy.get(loginElements.username).type(username);
        cy.get(loginElements.password).type(password);
    }

}

export default Login;