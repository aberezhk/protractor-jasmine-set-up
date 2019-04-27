import { browser, $} from 'protractor';
import {SearchFormSection} from "./sections/search-form.section";

export class GoogleResultsPo {

    private _searchFormSection;
    private resultsStat = $('#resultStats');

    public async getResultsStat(searchString: string) {
        await this.resultsStat.getText();
    }

    private get searchFormSection() {
        if (!this._searchFormSection) {
            this._searchFormSection = new SearchFormSection();
        }
        return this._searchFormSection;
    }
}
