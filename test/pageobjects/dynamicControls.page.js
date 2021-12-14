import BasePage from "./base.page";

class DynamicControlsPage extends BasePage {
    
    get header() {
      return $('h4=Dynamic Controls');
    }

    get checkboxContainer() {
      return $('#checkbox-example');
    }

    get checkboxButton() {
      return this.checkboxContainer.$('button');
    }

    get checkbox() {
      return this.checkboxContainer.$('#checkbox');
    }

    get checkboxLoading() {
      return this.checkboxContainer.$('#loading');
    }
    
    get checkboxMessage() {
      return this.checkboxContainer.$('#message');
    }

    get inputContainer() {
      return $('#input-example');
    }

    get inputButton() {
      return this.inputContainer.$('button');
    }

    get input() {
      return this.inputContainer.$('input');
    }

    get inputLoading() {
      return this.inputContainer.$('#loading');
    }
    
    get inputMessage() {
      return this.inputContainer.$('#message');
    }

    open() {
      return super.open('dynamic_controls');
    }

}

export default new DynamicControlsPage();
