const LOGIN_URL = "/login";
const TXT_USERNAME = "#user_email";
const TXT_PASSWORD = "#user_password";
const BTN_LOGIN = "input[value='Login'";
export const LoginPage = {
    navigateToLoginPage() {
        cy.visit(LOGIN_URL);
    },
    inputUserEmail(email) {
        cy.get(TXT_USERNAME).type(email);
    },
    inputPassword(password) {
        cy.get(TXT_PASSWORD).type(password);
    },
    clickLoginButton() {
        cy.get(BTN_LOGIN).click();
    }
}