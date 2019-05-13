describe('BrowserStack Local Testing', function() {

  it('Open user website', function() {

    browser.driver.get('https://int-web.b4c-qa.dlgdigitalapi.com/car/quote/your-car').then(function() {

      // WAIT
      browser.driver.sleep(5000);

      // ENTER NUMBER
      browser.driver.findElement(by.id('reg')).sendKeys('SB60UEM');

      // CLICK LOOK UP BUTTON
      browser.driver.findElement(by.id('find-reg')).click();

      // WAIT
      browser.driver.sleep(5000);

      // VERIFY
      browser.driver.findElement(by.className('section__title')).click();

    });
  });
});
