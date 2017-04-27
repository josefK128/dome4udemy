import { Dome4udemyPage } from './app.po';

describe('dome4udemy App', () => {
  let page: Dome4udemyPage;

  beforeEach(() => {
    page = new Dome4udemyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
