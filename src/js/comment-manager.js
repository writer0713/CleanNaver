import $ from 'jquery';

export class CommentManager {

    constructor() {
        console.log('CommentManager constructor12');

        this.initVariables();
        this.init();
        this.bindEvent();

        this.extraProcess();
    }

    init() {

        this.makeSideListToggleButton();

        if(!this.hasCommentsOnCurrentPage()) {
            console.log('정치 뉴스 입니다.');
            return;
        }
        
        this.makeCommentToggleButton();

    }

    /**
     * 필요한 변수들 초기화
     */
    initVariables() {
        this.originalWidthOfContent = $('td.content').css('width'); // 오른쪽 사이드메뉴를 제외한 영역의 width(실제 뉴스 컨텐트)
        this.outLinkButton = $('.article_simplecmt'); // 정치 뉴스 하단에 코멘트 관련 외부 링크 버튼
        this.commentBox = $('#cbox_module'); // 코멘트 영역
        this.commentGuideDiv = $('.comment_guide'); // 코멘트 관련 가이드 영역
        this.lnbSideList = $('.lnb_side'); // 오른쪽 사이드 메뉴 상단에 리스트
        this.sideMenu = $('td.aside'); // 오른쪽 사이드 메뉴 영역
        this.newsMainContent = $('#main_content'); // 뉴스 메인 컨텐트 영역 
        this.spiLayer = $('#spiLayer'); // 코멘트 영역 상단에 공감 영역 (좋아요, 훈훈해요, 슬퍼요 등)
        this.sideMenuToggleButton = $(`
            <button id='side-menu-toggle-btn' 
                style='background-color: rgb(2, 198, 111); font-family: sans-serif; width: 10em; cursor: pointer; padding: 3px 5px; border-radius: 4px; color: white'>
                우측 메뉴 숨기기
            </button>
        `);
        this.commentToggleButton = $(`
            <li class="tg-list-item" id="nc_toggle_btn">
                <h4>댓글 컨트롤</h4>
                <input class="tgl tgl-flip" id="cb5" type="checkbox"/>
                <label class="tgl-btn" data-tg-off="보이기" data-tg-on="가리기" for="cb5"></label>
            </li>
        `);
        this.commentToggleButtonDiv = $(`
            <div class="tg-div">
                <ul class="tg-list"></ul>
            </div>
        `);
        
    }

    /**
     * 이벤트 바인딩
     */
    bindEvent() {
        this.onClickCommentToggleButton();
        this.onClickSideMenuToggleButton();
    }

    /**
     * 우측 사이드 리스트 토글 버튼을 만들어서 붙이는 함수
     */
    makeSideListToggleButton() {
        this.lnbSideList.find('li').remove();
        this.lnbSideList.append("<li class='end'></li>");
        this.lnbSideList.find('li').first().append(this.sideMenuToggleButton);
    }

    /**
     * 코멘트 토글 버튼을 동적으로 생성하여 코멘트 영역 윗쪽에 붙이고,
     * 코멘트 영역은 숨긴다.
     */
    makeCommentToggleButton() {
        this.commentBox.before(this.commentToggleButtonDiv.append(this.commentToggleButton));
        this.commentBox.hide();

        this.commentGuideDiv.remove();
    }

    /**
     * constructor에서 가장 마지막에 실행하는 함수.
     * 수동으로 어떠한 동작을 할 때 사용.
     */
    extraProcess() {
        // 뉴스 기사 페이지에서는 우측 메뉴를 닫은 상태가 되도록 설정
        if(location.href.indexOf('read.nhn') > 0) {
            this.sideMenuToggleButton.click();
        }

        $('body').scrollTop();
    }

    /**
     * 코멘트 토글 버튼 클릭 이벤트
     */
    onClickCommentToggleButton() {
        
        this.commentToggleButton.on('click', () => {
            let checkbox = this.commentToggleButton.find('input');
            let isChecked = checkbox.prop('checked');
    
            if(isChecked) {
                this.commentBox.show();
            } else {
                this.commentBox.hide();
            }
        });
    }

    /**
     * 오른쪽 사이드 메뉴 토글 버튼 클릭 이벤트
     * 우선 오른쪽 사이드 메뉴를 토글하고,
     * 사이드 메뉴의 상태(보임, 안보임)에 따라 
     * 1. 사이드메뉴 토글 버튼의 텍스트를 바꿔주고
     * 2. 뉴스 메인 컨텐트와 하단의 댓글 공감 영역의 width를 바꿔준다.
     */
    onClickSideMenuToggleButton() {
        this.sideMenuToggleButton.on('click', () => {
            
            this.sideMenu.toggle();

            if(this.isSideMenuHidden()) {
                this.sideMenuToggleButton.text('우측 메뉴 보이기');
                this.newsMainContent.css('width', '1080px');
                this.spiLayer.css('width', '1080px');
            } else {
                this.sideMenuToggleButton.text('우측 메뉴 숨기기');
                this.newsMainContent.css('width', this.originalWidthOfContent);
                this.spiLayer.css('width', this.originalWidthOfContent);
            }
        });
    }

    /**
     * 오른쪽 사이드 메뉴가 닫혀있는지(display: none) 확인
     */
    isSideMenuHidden() {
        return this.sideMenu.css('display') === "none";
    }

    /**
     * 현재 페이지에 코멘트 영역을 갖고 있는지 판단.
     * 정치 뉴스는 현재 페이지에 코멘트가 없고 아웃링크 버튼이 있음.
     * 그 외 뉴스는 코멘트가 있음.
     */
    hasCommentsOnCurrentPage() {
        return this.outLinkButton.length === 0;
    }

}