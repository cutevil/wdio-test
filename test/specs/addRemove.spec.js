import AddRemovePage from "../pageobjects/addRemove.page";

describe('Add/Remove Elements Page', () => {
  it('should add new element', async () => {
    await AddRemovePage.open();
    await expect(AddRemovePage.header).toBeExisting();
    await expect(AddRemovePage.btnAdd).toBeExisting();

    await AddRemovePage.addElement();

    await expect(AddRemovePage.btnDelete).toBeExisting();
  });

  it('should delete new element', async () => {
      await expect(AddRemovePage.header).toBeExisting();
      await expect(AddRemovePage.btnDelete).toBeExisting();

      await AddRemovePage.deleteElement();

      await expect(AddRemovePage.btnDelete).not.toBeExisting();
  });

  it('should add multiple elements', async () => {
    await expect(AddRemovePage.header).toBeExisting();
    await expect(AddRemovePage.btnAdd).toBeExisting();

    await AddRemovePage.addElement();
    await AddRemovePage.addElement();
    await AddRemovePage.addElement();

    await expect(AddRemovePage.btnDeleteContainer).toHaveChildren({ eq: 3 });
  });
});