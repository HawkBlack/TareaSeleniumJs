const { Builder, By } = require("selenium-webdriver");

describe ("login", () => {
        it("login with standard_user credentials", async () => {
            let driver = new Builder().forBrowser('chrome').build();
            await driver.get('https://www.saucedemo.com') 

        //•	Historia de usuario 1: Como usuario registrado, quiero poder iniciar
        //  sesión en la plataforma utilizando mi usuario y contraseña.

            await driver.findElement(By.id('user-name')).sendKeys('standard_user')
            await driver.findElement(By.css('#password')).sendKeys('secret_sauce')
            await driver.findElement(By.css('[data-test="login-button"]')).click();
            await driver.sleep(4000)
            await driver.quit();

        //•	Historia de usuario 2: Como usuario, quiero poder agregar productos a
        //  mi carrito de compras y proceder al pago de forma segura.

            await driver.findElement(By.css('[data-test="add-to-cart-sauce-labs-backpack"]')).click();
            await driver.sleep(2000)
            await driver.findElement(By.id('shopping_cart_container')).click();
            await driver.sleep(2000)
            await driver.findElement(By.css('[data-test="checkout"]')).click();
            await driver.findElement(By.id('first-name')).sendKeys('Carlos')
            await driver.sleep(1000)
            await driver.findElement(By.id('last-name')).sendKeys('Cadena')
            await driver.sleep(1000)
            await driver.findElement(By.id('postal-code')).sendKeys('91000')
            await driver.sleep(1000)
            await driver.findElement(By.css('[data-test="continue"]')).click();
            await driver.sleep(1000)
            await driver.findElement(By.css('[data-test="finish"]')).click();

        //• Historia de usuario 3: Como usuario, quiero poder buscar productos por
        //  categoría para encontrar rápidamente lo que necesito

    });  
    });
