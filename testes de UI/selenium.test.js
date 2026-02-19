const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

const iniciarTeste = async () => {
    let driver = await new Builder().forBrowser(Browser.CHROME).build()

    await driver.   get('https://www.google.com/')

    const inputs = await driver.findElements(By.css, ("textarea"));

await driver.close();

}
iniciarTeste(); 
