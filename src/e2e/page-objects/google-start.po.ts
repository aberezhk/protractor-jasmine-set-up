import { browser, $} from 'protractor';
import {SearchFormSection} from "./sections/search-form.section";

export class GoogleStartPo {

    private _searchFormSection;
    private searchButton = $('.FPdoLc.VlcLAe input');
    private luckyButton = $('.FPdoLc.VlcLAe button');
    public googleLogo = $('#hplogo');

    public async navigateTo() {
        await browser.get('/');
    }

    public async searchFor(searchString: string) {
        await this.searchFormSection.searchInput.sendKeys(searchString);
        // to close the search drop down
        await this.googleLogo.click();
        await this.searchButton.click();
    }

    public async getLucky() {
        await this.luckyButton.click();
    }

    private get searchFormSection() {
        if (!this._searchFormSection) {
            this._searchFormSection = new SearchFormSection();
        }
        return this._searchFormSection;
    }
}
