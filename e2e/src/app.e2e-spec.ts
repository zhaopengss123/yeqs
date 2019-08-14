import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
<<<<<<< HEAD
    expect(page.getParagraphText()).toEqual('Welcome to ylbb-system-erp!');
=======
    expect(page.getTitleText()).toEqual('Welcome to ylbb-system-erp!');
>>>>>>> upgrade
  });
});
