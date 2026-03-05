const { Builder, By, Key, until } = require("selenium-webdriver");

async function testeGoogle() {

    let driver = await new Builder().forBrowser("chrome").build();

    try {

        // abrir Google
        await driver.get("https://www.google.com");

        // esperar campo de pesquisa
        let campoPesquisa = await driver.wait(
            until.elementLocated(By.name("q")),
            10000
        );

        // digitar pesquisa
        await campoPesquisa.sendKeys("Youtube", Key.RETURN);

        // esperar resultados
        await driver.wait(
            until.elementLocated(By.id("search")),
            10000
        );

        console.log("Pesquisa realizada com sucesso");

    } catch (erro) {

        console.log("Erro no teste:", erro);

    } finally {

        await driver.quit();

    }
}

testeGoogle();