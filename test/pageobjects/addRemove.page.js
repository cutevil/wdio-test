import BasePage from "./base.page";

class AddRemovePage extends BasePage {
    
    get header() {
      return $('h3=Add/Remove Elements');
    }

    get btnAdd() {
      return $('button*=Add');
    }

    get btnDelete() {
      return $('button*=Delete');
    }

    get btnDeleteContainer() {
      return $('#elements');
    }

  async addElement(){
      await this.btnAdd.click();
  }

  async deleteElement(){
      await this.btnDelete.click();
  }

  open() {
    return super.open('add_remove_elements/');
}

}

export default new AddRemovePage();
