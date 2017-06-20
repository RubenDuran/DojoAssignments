import { AnonymousNotesAppPage } from './app.po';

describe('anonymous-notes-app App', () => {
  let page: AnonymousNotesAppPage;

  beforeEach(() => {
    page = new AnonymousNotesAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
