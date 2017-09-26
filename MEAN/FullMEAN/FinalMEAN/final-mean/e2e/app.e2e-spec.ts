import { FinalMeanPage } from './app.po';

describe('final-mean App', () => {
  let page: FinalMeanPage;

  beforeEach(() => {
    page = new FinalMeanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
