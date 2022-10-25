// Bibliotecas
const { assert } = require("chai");
const { By } = require("selenium-webdriver");
const webdriver = require("selenium-webdriver");
require("chromedriver");

// Classe ou Descrição
describe('Google', () => {
    let driver;
    // Configura
    // Método de Inicialização
    beforeEach(() => {
        driver = new webdriver.Builder() // instancio o objeto Selenium
        .forBrowser("chrome")
        .build()
    })
    // Método de Finalização
    afterEach(() => {
        driver.quit();
    })
    // Métodos de Testes (cada it é um teste)
    it("Consultar Google", async() => {
        // Executa
        await driver.get("https://www.google.com")
        await driver.findElement(By.name("q")).sendKeys("mousse de chocolate" + webdriver.Key.ENTER)
        // Valida
        assert.equal(await driver.getTitle(), "mousse de chocolate - Pesquisa Google")
    })
})