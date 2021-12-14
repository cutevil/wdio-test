import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

describe('Login Page: invalid', () => {
    it('should login with invalid username', async () => {
        await LoginPage.open();
        await expect(LoginPage.header).toBeExisting();

        await LoginPage.login('invalidUsername', 'SuperSecretPassword!');

        await expect(LoginPage.flashAlertError).toBeExisting();
        await expect(LoginPage.flashAlertError).toHaveTextContaining(
            'Your username is invalid!');
    });

    it('should login with invalid password', async () => {
        await LoginPage.open();
        await expect(LoginPage.header).toBeExisting();

        await LoginPage.login('tomsmith', 'invalidPassword');

        await expect(LoginPage.flashAlertError).toBeExisting();
        await expect(LoginPage.flashAlertError).toHaveTextContaining(
            'Your password is invalid!');
    });
});

describe('Login Page: valid', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await expect(LoginPage.header).toBeExisting();
  
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.header).toBeExisting();
        await expect(SecurePage.flashAlertSuccess).toBeExisting();
        await expect(SecurePage.flashAlertSuccess).toHaveTextContaining(
            'You logged into a secure area!');
    });
  });



