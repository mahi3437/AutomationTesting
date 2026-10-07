class redbusSourceandDestiny {

    constructor(page){
        this.page=page;
        this.sourcelocator=page.locator('#srcinput');
        this.selectSource=page.locator("//div[contains(@class,'listItem')]/div/div/div[1]");
        
    }

    async enterSource(source){
        await this.sourcelocator.fill(source);
         const sourceOption = this.selectSource.filter({ hasText: source });
        await sourceOption.first().click();
            


        

}
    }

module.exports = {redbusSourceandDestiny};
