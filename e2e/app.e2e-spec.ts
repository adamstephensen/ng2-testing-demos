import { Ng2TestingDemosPage } from './app.po';

describe('ng2-testing-demos App', function() {
  let page: Ng2TestingDemosPage;

  beforeEach(() => {
    page = new Ng2TestingDemosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
