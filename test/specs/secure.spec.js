import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

describe('Secure Page: login', () => {
  it('should not be opened for not authorized user', async () => {
      await SecurePage.open();
      await expect(LoginPage.header).toBeExisting();
      await expect(LoginPage.flashAlertError).toBeExisting();
      await expect(LoginPage.flashAlertError).toHaveTextContaining(
          'You must login to view the secure area!');
  });

  it('should be opened for authorized user', async () => {
    await expect(LoginPage.header).toBeExisting();
    await LoginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(SecurePage.header).toBeExisting();
    await expect(SecurePage.flashAlertSuccess).toBeExisting();
    await expect(SecurePage.flashAlertSuccess).toHaveTextContaining(
        'You logged into a secure area!');
  });
});

describe('Secure Page: logout', () => {
  it('should logout', async () => {
      await expect(SecurePage.header).toBeExisting();
      await expect(SecurePage.btnLogout).toBeExisting();
      await SecurePage.logout();
      await expect(LoginPage.header).toBeExisting();
      await expect(LoginPage.flashAlertSuccess).toBeExisting();
      await expect(LoginPage.flashAlertSuccess).toHaveTextContaining(
          'You logged out of the secure area!');     
  });
});