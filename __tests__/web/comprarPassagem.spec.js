const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const chromedriver = require("chromedriver")

describe('Comprar Passagem', function() {
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    await driver.manage().setTimeouts({implicit: 60000});
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Comprar Passagem', async function() {
    await driver.get("https://blazedemo.com/")
    await driver.manage().window().setRect({ width: 1296, height: 696 })
    await driver.wait(until.elementIsVisible(await driver.findElement(By.name("fromPort"))), 30000)
    // await driver.findElement(By.name("fromPort")).click()
    {
      const dropdown = await driver.findElement(By.name("fromPort"))
      await dropdown.findElement(By.xpath("//option[. = 'São Paolo']")).click()
    }
    // await driver.findElement(By.name("toPort")).click()
    {
      const dropdown = await driver.findElement(By.name("toPort"))
      await dropdown.findElement(By.xpath("//option[. = 'New York']")).click()
    }
    // Botão Procurar Voo
    await driver.findElement(By.css(".btn-primary")).click()

    // Botão Escolher Primeiro Voo
    await driver.findElement(By.css("tr:nth-child(1) .btn")).click()

    // await driver.findElement(By.id("cardType")).click()

    {
      const dropdown = await driver.findElement(By.id("cardType"))
      await dropdown.findElement(By.xpath("//option[. = 'American Express']")).click()
    }
    // await driver.findElement(By.id("nameOnCard")).click()
    await driver.findElement(By.id("nameOnCard")).sendKeys("Juca Pato")

    // await driver.findElement(By.css(".vsc-initialized")).click()
    await driver.findElement(By.id("creditCardMonth")).sendKeys("09")

    // await driver.findElement(By.id("creditCardYear")).click()
    await driver.findElement(By.id("creditCardYear")).sendKeys("2025")
    
    // Checkbox lembre-se de mim
    await driver.findElement(By.css(".checkbox")).click()

    // Botão Comprar
    await driver.findElement(By.css(".btn-primary")).click()

    // await driver.findElement(By.css("h1")).click()
    // await driver.findElement(By.css("th:nth-child(2)")).click()
    
    assert(await driver.findElement(By.css("h1")).getText() == "Thank you for your purchase today!")
    assert(await driver.findElement(By.css("tr:nth-child(3) > td:nth-child(2)")).getText() == "555 USD")
  })

  it('Login', async function() {
    await driver.get("https://blazedemo.com/")
    await driver.manage().window().setRect({ width: 1296, height: 696 })
    await driver.findElement(By.linkText("home")).click()
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("correia@iterasys.com.br")
    await driver.findElement(By.id("password")).click()
    await driver.findElement(By.id("password")).sendKeys("laranja")
    await driver.findElement(By.name("remember")).click()
    await driver.findElement(By.css(".btn-primary")).click()
    assert(await driver.findElement(By.css(".message")).getText() == "Page Expired")
  })

})
