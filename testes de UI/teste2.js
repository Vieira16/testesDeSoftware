const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

const iniciarTeste = async () => {
    
    let driver = await new Builder().forBrowser(Browser.CHROME).build()

    await driver.get('https://http.cat/');

    const urls = await driver.findElements(By.css('li a'));
    console.log(urls.length);

    const hrfs = [];

    for (var elemento of urls) {
        var url = await elemento.getAttribute('href');
        hrfs.push(url)
    }
    console.log(hrfs);

    for (var url of hrfs) {
        await driver.get(url);
        const desc = await driver.findElement(By.css('div.max-w-3xl')).getText();
        console.log(desc);
    }

    await driver.close();
}
iniciarTeste();