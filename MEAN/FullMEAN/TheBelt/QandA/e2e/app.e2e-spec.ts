import { QandAPage } from './app.po';

describe('qand-a App', () => {
  let page: QandAPage;

  beforeEach(() => {
    page = new QandAPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
