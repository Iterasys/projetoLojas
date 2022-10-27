// Bibliotecas
// Importar a classe mãe / super classe
const BasePage = require("./BasePage");
// Importar o By do Selenium
const By = require("selenium-webdriver").By;

// Criar a classe HomePage a partir da classe BasePage
class HomePage extends BasePage {

    // Monta a estrutura de dados da classe - está recebendo o Selenium
    constructor(driver){
        super(driver) // chama a super classe BasePage e passa o Selenium
        // mapeamos cada elemento da tela (no caso 4 deles)
        this.linkDaSemana = By.linkText("destination of the week! The Beach!");
        this.dropdownOrigem = By.name("fromPort");
        this.dropdownDestino = By.name("toPort");
        this.btnProcurarVoos = By.css(".btn-primary");
    }

    // Criar ações baseadas nos elementos mapeados

    // Clica na promoção da semana
    async consultarDestinoDaSemana(){
        await this.driver.findElement(this.linkDaSemana).click();
    }

    // Selecionar a origem e destino de um voo
    async selecionarOrigemDestinoVoo(origem, destino){
        // Selecionar origem
        // primeiro seleciona o dropdown / combo Origem
        let ddOrigem = await this.driver.findElement(this.dropdownOrigem);
        // em segundo lugar, seleciona a opção no dropdown / combo
        await ddOrigem.findElement(By.css(`[value="${origem}"]`)).click();

        // Selecionar destino
        let ddDestino = await this.driver.findElement(this.dropdownDestino);
        await ddDestino.findElement(By.css(`[value="${destino}"]`)).click();

        // Clicar no botão Find Flights
        await this.driver.findElement(this.btnProcurarVoos).click();

    }
}

module.exports = HomePage;