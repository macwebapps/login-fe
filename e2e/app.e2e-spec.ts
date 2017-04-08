import { LoginFePage } from './app.po';

describe('login-fe App', () => {
  let page: LoginFePage;

  beforeEach(() => {
    page = new LoginFePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
