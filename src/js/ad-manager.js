// end_ad

import $ from 'jquery';

export class AdManager {

    constructor() {
        console.log('AdManager constructor');

        this.initVariables();
        this.removeAdvertisementDiv();
        this.removeWomenNewsLinks();
    }

    initVariables() {
        this.advertisementDiv = $('.end_ad');
        this.womenNewsDiv = $('.link_news');
        this.womenNewsLinks = $('.article_footer li');
    }

    /**
     * 하단 광고 제거
     */
    removeAdvertisementDiv() {
        this.advertisementDiv.remove();
    }

    /**
     * 하단 여성 전문 뉴스 링크 제거
     */
    removeWomenNewsLinks() {
        this.womenNewsDiv.remove();
        this.womenNewsLinks.remove();
    }

}