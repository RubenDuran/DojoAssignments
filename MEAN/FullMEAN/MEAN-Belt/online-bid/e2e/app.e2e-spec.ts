import { OnlineBidPage } from './app.po';

describe('online-bid App', () => {
  let page: OnlineBidPage;

  beforeEach(() => {
    page = new OnlineBidPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
