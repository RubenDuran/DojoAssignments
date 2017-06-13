import { DataMailPage } from './app.po';

describe('data-mail App', () => {
  let page: DataMailPage;

  beforeEach(() => {
    page = new DataMailPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
