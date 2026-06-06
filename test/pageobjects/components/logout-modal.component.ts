import Page from '../../pageobjects/page.js';

class LogoutModalComponent extends Page {
    private confirmButton = 'id=android:id/button1';
    private cancelButton = 'id=android:id/button2';
    private logoutTitle = 'id=com.saucelabs.mydemoapp.android:id/alertTitle'

    async confirm() {
        await this.clickElement(this.confirmButton);
    }

    async cancel() {
        await this.clickElement(this.cancelButton);
    }

    async isDisplayed() {
        return await this.isElementDisplayed(this.logoutTitle);
    }
}

export default new LogoutModalComponent();