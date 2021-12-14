import DynamicControlsPage from "../pageobjects/dynamicControls.page";

describe('Dynamic Controls Page: checkbox', () => {
  it('should checkbox to be disappeared by button click', async () => {
      await DynamicControlsPage.open();
      await expect(DynamicControlsPage.header).toBeExisting();
      await expect(DynamicControlsPage.checkboxButton).toBeExisting();
      await expect(DynamicControlsPage.checkboxButton).toHaveText('Remove');
      await DynamicControlsPage.checkboxButton.click();
      await DynamicControlsPage.checkboxLoading.waitForDisplayed({reverse: true});
      await expect(DynamicControlsPage.checkbox).not.toBeDisplayed();
      await expect(DynamicControlsPage.checkboxButton).toHaveText('Add');
      await expect(DynamicControlsPage.checkboxMessage).toBeDisplayed();
      await expect(DynamicControlsPage.checkboxMessage).toHaveText("It's gone!");
  });

  it('should checkbox to be appeared by button click', async () => {
    await expect(DynamicControlsPage.header).toBeExisting();
    await expect(DynamicControlsPage.checkbox).not.toBeExisting();
    await expect(DynamicControlsPage.checkboxButton).toBeExisting();
    await expect(DynamicControlsPage.checkboxButton).toHaveText('Add');
    await DynamicControlsPage.checkboxButton.click();
    await DynamicControlsPage.checkboxLoading.waitForDisplayed({reverse: true});
    await expect(DynamicControlsPage.checkbox).toBeDisplayed();
    await expect(DynamicControlsPage.checkboxButton).toHaveText('Remove');
    await expect(DynamicControlsPage.checkboxMessage).toBeDisplayed();
    await expect(DynamicControlsPage.checkboxMessage).toHaveText("It's back!");
});
});

describe('Dynamic Controls Page: input', () => {
  it('should input to be enabled by button click', async () => {
    await expect(DynamicControlsPage.header).toBeExisting();
    await expect(DynamicControlsPage.inputButton).toBeExisting();
    await expect(DynamicControlsPage.inputButton).toHaveText('Enable');
    await expect(DynamicControlsPage.input).toBeExisting();
    await expect(DynamicControlsPage.input).toBeDisabled();
    await DynamicControlsPage.inputButton.click();
    await DynamicControlsPage.input.waitForEnabled();
    await expect(DynamicControlsPage.inputButton).toHaveText('Disable');
    await expect(DynamicControlsPage.input).not.toBeDisabled();
    await expect(DynamicControlsPage.inputMessage).toHaveText("It's enabled!");
  });

  it('should input to be disabled by button click', async () => {
    await expect(DynamicControlsPage.header).toBeExisting();
    await expect(DynamicControlsPage.inputButton).toBeExisting();
    await expect(DynamicControlsPage.inputButton).toHaveText('Disable');
    await expect(DynamicControlsPage.input).toBeExisting();
    await expect(DynamicControlsPage.input).not.toBeDisabled();
    await DynamicControlsPage.inputButton.click();
    await DynamicControlsPage.input.waitForEnabled({reverse: true});
    await expect(DynamicControlsPage.inputButton).toHaveText('Enable');
    await expect(DynamicControlsPage.input).toBeDisabled();
    await expect(DynamicControlsPage.inputMessage).toHaveText("It's disabled!");
  });
});