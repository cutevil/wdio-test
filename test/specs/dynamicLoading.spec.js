import DynamicLoadingPage from "../pageobjects/dynamicLoading.page";

describe('Dynamic Loading Page', () => {
  it('should hidden element to be displayed', async () => {
      await DynamicLoadingPage.open();
      await expect(DynamicLoadingPage.header).toBeExisting();
      await expect(DynamicLoadingPage.btnStart).toBeExisting();
      await expect(DynamicLoadingPage.loading).not.toBeDisplayed();

      await DynamicLoadingPage.startLoading();
      DynamicLoadingPage.loading.waitForDisplayed({reverse: true});

      await expect(DynamicLoadingPage.text).toBeDisplayed();
      await expect(DynamicLoadingPage.text).toHaveText('Hello World!');
  });
});