import { BbmApiPage } from './app.po';

describe('bbm-api App', () => {
  let page: BbmApiPage;

  beforeEach(() => {
    page = new BbmApiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
