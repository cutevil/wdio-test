import BasePage from "./base.page";

class DynamicLoadingPage extends BasePage {
    
    get header() {
      return $('h3=Dynamically Loaded Page Elements');
    }

    get btnStart() {
      return $('button*=Start');
    }

    get loading() {
      return $('#loading');
    }

    get text() {
      return $('#finish h4');
    }

    async startLoading(){
        await this.btnStart.click();
    }

    open() {
      return super.open('dynamic_loading/1');
    }

}

export default new DynamicLoadingPage();
