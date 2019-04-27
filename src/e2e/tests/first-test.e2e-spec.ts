import {GoogleStartPo} from "../page-objects/google-start.po";
import {GoogleResultsPo} from "../page-objects/google-results.po";
import {browser} from "protractor";

describe('google start page', () => {

    beforeEach(async function () {
        this.startPage = new GoogleStartPo();
        this.resultsPage = new GoogleResultsPo();
        await this.startPage.navigateTo();
    });

    it('displays search module', async function () {
        expect(await this.startPage.searchFormSection.searchInput.isDisplayed()).toBeTruthy();
    });

    ['goats', 'cats'].forEach(function (searchString: string) {
        it(`allows to search for ${searchString}`, async function () {
            await this.startPage.searchFor(searchString);
            expect(await this.resultsPage.searchFormSection.getValueOfSearchInput()).toEqual(searchString);
        });
    });
});
