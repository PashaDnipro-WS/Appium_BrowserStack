import { expect, driver } from '@wdio/globals';
import CatalogPage from '../pageobjects/catalog.page.js';
import ProductPage from '../pageobjects/product.page.js';
import CartPage from '../pageobjects/cart.page.js';

import MenuComponent from '../pageobjects/components/menu.component.js';
import LoginPage from '../pageobjects/login.page.js';
import logoutModalComponent from '../pageobjects/components/logout-modal.component.js';
import { users } from '../../data/users.js';
import loginPage from '../pageobjects/login.page.js';

const APP_ID = 'com.saucelabs.mydemoapp.android';

describe('Sauce Labs Demo App', () => {
    beforeEach(async () => {
        await driver.terminateApp(APP_ID);
        await driver.activateApp(APP_ID);
        await CatalogPage.waitForProducts();
    });

    it('should open product details', async () => {
        await CatalogPage.openFirstProduct();

        await expect(await ProductPage.isProductDetailsDisplayed()).toBe(true);
    });

    it('should add product to cart', async () => {
        await CatalogPage.openFirstProduct();
        await ProductPage.addToCart();
        await ProductPage.openCart();

        await expect(await CartPage.isCartDisplayed()).toBe(true);
    });

    it('should remove product from cart', async () => {
        await CatalogPage.openFirstProduct();
        await ProductPage.addToCart();
        await ProductPage.openCart();
        await CartPage.removeItem();

        await expect(await CartPage.isEmptyCartDisplayed()).toBe(true);
    });

    it('should add green product to cart and verify selected color', async () => {
        await CatalogPage.openFirstProduct();
        await ProductPage.selectGreenColor();
        await ProductPage.addToCart();
        await ProductPage.openCart();

        await expect(await CartPage.isSelectedColorDisplayed()).toBe(true);
    });

    it('should submit five star review and show confirmation dialog', async () => {
        await CatalogPage.openFirstProduct();
        await ProductPage.submitFiveStarReview();

        await expect(await ProductPage.isReviewDialogDisplayed()).toBe(true);

        await ProductPage.closeReviewDialog();
    });

    it('should login with valid credentials and logout successfully', async () => {
        await CatalogPage.openMenu();
        await MenuComponent.openLogin();

        await LoginPage.login(
            users.validUser.username,
            users.validUser.password
        );

        await CatalogPage.waitForProducts();
        await CatalogPage.openMenu();

        await MenuComponent.Logout();

        await expect(await logoutModalComponent.isDisplayed()).toBe(true);

        await logoutModalComponent.confirm();

        await expect(await loginPage.isDisplayed()).toBe(true);
    });
});