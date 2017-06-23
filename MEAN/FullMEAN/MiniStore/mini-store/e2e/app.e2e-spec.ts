import { MiniStorePage } from './app.po';

describe('mini-store App', () => {
  let page: MiniStorePage;

  beforeEach(() => {
    page = new MiniStorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
