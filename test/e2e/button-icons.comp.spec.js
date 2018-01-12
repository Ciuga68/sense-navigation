'use strict';

const AppOverviewPage = require('./models/app-overview');
const timeoutTime = 10000;
const selectors = {
  qvtSheet: '.qvt-sheet'
};

describe('Button Icons => ', () => {

  it.only('should be equal to the taken screenshot', async () => {

    const appOverview = new AppOverviewPage();
    await appOverview.get('sense-navigation_v1x');

    await appOverview.openSheet('Icon-Buttons');

    await browser.wait(EC.visibilityOf($(selectors.qvtSheet)), timeoutTime, 'Sheet was not visible');

    return expect(await browser.takeImageOf({selector: selectors.qvtSheet})).to.matchImageOf('button_icons', 'button_icons');
  });

});
