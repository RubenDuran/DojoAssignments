import { NgBeltPage } from './app.po';

describe('ng-belt App', () => {
  let page: NgBeltPage;

  beforeEach(() => {
    page = new NgBeltPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
