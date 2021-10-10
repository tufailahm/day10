describe('Amazon Protractor E2E Testing', function() {
    it('to check whether amazon has specific title', function(){
        browser.ignoreSynchronization = true;
        browser.get("https://wwww.example.com");
        browser.driver.getTitle().then(function(pageTitle){
            expect(pageTitle).toEqual('Example Domain')
        });
    });
});