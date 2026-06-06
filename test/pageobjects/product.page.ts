import Page from './page.js';

class ProductPage extends Page {
    private productTitle = 'id=com.saucelabs.mydemoapp.android:id/productTV';
    private addToCartButton = '~Tap to add product to cart';
    private cartIcon = '~Displays number of items in your cart';
    private greenColor = '~Green color';
    private fifthStar = 'id=com.saucelabs.mydemoapp.android:id/start5IV';
    private reviewDialogText = 'id=com.saucelabs.mydemoapp.android:id/sortTV';
    private closeReviewDialogButton = 'id=com.saucelabs.mydemoapp.android:id/closeBt';

    async isProductDetailsDisplayed() {
        return this.isElementDisplayed(this.productTitle);
    }

    async addToCart() {
        await this.scrollElementIntoView(this.addToCartButton);
        await this.clickElement(this.addToCartButton);
    }

    async openCart() {
        await this.clickElement(this.cartIcon);
    }

    async selectGreenColor() {
        await this.clickElement(this.greenColor);
    }

    async submitFiveStarReview() {
        await this.clickElement(this.fifthStar);
    }

    async isReviewDialogDisplayed() {
        return this.isElementDisplayed(this.reviewDialogText);
    }

    async closeReviewDialog() {
        await this.clickElement(this.closeReviewDialogButton);
    }
}

export default new ProductPage();