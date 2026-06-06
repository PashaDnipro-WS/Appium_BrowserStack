import Page from './page.js';

class CartPage extends Page {
    private cartTitle = 'id=com.saucelabs.mydemoapp.android:id/productTV';
    private removeButton = '~Removes product from cart';
    private noItemsTitle = 'id=com.saucelabs.mydemoapp.android:id/noItemTitleTV';
    private goShoppingButton = 'id=com.saucelabs.mydemoapp.android:id/shoppingBt';
    private selectedColor = '~Displays color of selected product';

    async isCartDisplayed() {
        return this.isElementDisplayed(this.cartTitle);
    }

    async removeItem() {
        await this.clickElement(this.removeButton);
    }

    async isEmptyCartDisplayed() {
        return this.isElementDisplayed(this.noItemsTitle);
    }

    async goShopping() {
        await this.clickElement(this.goShoppingButton);
    }

    async isSelectedColorDisplayed() {
        return this.isElementDisplayed(this.selectedColor);
    }
}

export default new CartPage();