const puppeteer = require('puppeteer')
const readlineSync = require('readline-sync')

console.log('> Welcome to the currency converter bot')

async function robot(){
    const browser = await puppeteer.launch({ headless:true })
    const page = await browser.newPage()
    
    const baseCurrency = readlineSync.question('> Please enter a base currency: ') || 'dolar'
    const finalCurrency = readlineSync.question('> Please enter a desired currency: ') || 'real'
    
    const googleURL = `https://www.google.com/search?&q=${baseCurrency}+para+${finalCurrency}`
    await page.goto(googleURL)

    const result = await page.evaluate(() => {
        return document.querySelector('input.a61j6.vk_gy.vk_sh.Hg3mWc').value
    });
    
    
    console.log(`> The value of 1 ${baseCurrency} in ${finalCurrency} is ${result}`)

    await browser.close();
}

robot()