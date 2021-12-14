export default class BasePage {

    get flashAlertSuccess(){
        return $('.flash.success');
    }

    
    get flashAlertError(){
        return $('.flash.error');
    }

    open(path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }

}
