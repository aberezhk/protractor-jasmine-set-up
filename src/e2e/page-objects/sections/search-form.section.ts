import {$, element, ElementFinder} from "protractor";

export class SearchFormSection {

    private _searchSection: ElementFinder;

    constructor(private parentSection: ElementFinder = null) {
    }

    public get searchSection() {
        if(! this._searchSection) {
            this._searchSection =
                this.parentSection ? this.parentSection.$('#searchform') : $('#searchform');
        }
        return this._searchSection;
    }

    public searchInput: ElementFinder = this.searchSection.$('input.gLFyf');

    public async getValueOfSearchInput(){
        return this.searchInput.getAttribute('value');
    }
}
