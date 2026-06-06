import Page from './page.js';

class CatalogPage extends Page {
    private productImage = 'id=com.saucelabs.mydemoapp.android:id/productIV';
    private menuButton = '~View menu';

    async openFirstProduct() {
        await this.clickElementByIndex(this.productImage, 0);
    }

    async waitForProducts() {
        await this.waitUntilElementDisplayed(this.productImage);
    }

    async openMenu() {
        await this.clickElement(this.menuButton);
    }
}

export default new CatalogPage();