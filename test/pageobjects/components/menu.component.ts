import Page from '../../pageobjects/page.js';

class MenuComponent extends Page {
    private loginMenuItem = '~Login Menu Item';
    private logoutMenuItem = '~Logout Menu Item';

    async openLogin() {
        await this.clickElement(this.loginMenuItem);
    }

    async Logout() {
        await this.clickElement(this.logoutMenuItem);
    }
}

export default new MenuComponent();