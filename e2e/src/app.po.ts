import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

<<<<<<< HEAD
  getParagraphText() {
=======
  getTitleText() {
>>>>>>> upgrade
    return element(by.css('app-root h1')).getText();
  }
}
