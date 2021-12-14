import BasePage from "./base.page";

class SecurePage extends BasePage {
    
    get header() {
      return $('h2=Secure Area');
    }

    get btnLogout() {
      return $('.button');
    }

  async logout(){
      await this.btnLogout.click();
  }

  open() {
    return super.open('secure');
}

}

export default new SecurePage();
