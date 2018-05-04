// end_ad

import $ from 'jquery';

export class AdManager {

    constructor() {
        console.log('AdManager constructor');

        this.initVariables();
        this.removeAdvertisementDiv();
    }

    initVariables() {
        this.advertisementDiv = $('.end_ad');
    }

    removeAdvertisementDiv() {
        this.advertisementDiv.remove();
    }

}