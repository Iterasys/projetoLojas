class BasePage {

    constructor(driver){
        this.driver = driver;
    }

    async lerTituloGuia(){
        return await this.driver.getTitle();
    }

}

module.exports = BasePage;