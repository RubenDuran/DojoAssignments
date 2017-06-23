import { WallAppPage } from './app.po';

describe('wall-app App', () => {
  let page: WallAppPage;

  beforeEach(() => {
    page = new WallAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
