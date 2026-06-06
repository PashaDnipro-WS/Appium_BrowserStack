import Page from './page.js';

class LoginPage extends Page {
    private loginTitle = 'id=com.saucelabs.mydemoapp.android:id/loginTV';
    private usernameInput = 'id=com.saucelabs.mydemoapp.android:id/nameET';
    private passwordInput = 'id=com.saucelabs.mydemoapp.android:id/passwordET';
    private loginButton = '~Tap to login with given credentials';

    async isDisplayed(){
        return await this.isElementDisplayed(this.loginTitle);
    }

    async login(username: string, password: string) {
        await this.setElementInputValue(this.usernameInput, username);
        await this.setElementInputValue(this.passwordInput, password);
        await this.clickElement(this.loginButton);
    }
}

export default new LoginPage();