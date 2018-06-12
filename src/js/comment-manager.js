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

        this.lnbSideList.find('li').remove();
        this.lnbSideList.append(this.sideMenuToggleButton);

        if(this.outLinkButton.length > 0) {
            return;
        }

        this.commentBox.before(this.commentToggleButtonDiv);
        this.commentBox.hide();

        this.commentGuideDiv.remove();

        $('body').scrollTop();
    }

    initVariables() {
        this.originalWidthOfContent = $('td.content').css('width');
        this.outLinkButton = $('.article_simplecmt');
        this.commentBox = $('#cbox_module');
        this.commentGuideDiv = $('.comment_guide');
        this.lnbSideList = $('.lnb_side');
        this.sideMenuToggleButton = $(`
            <li class='end'>
                <button id='side-menu-toggle-btn' 
                    style='background-color: rgb(2, 198, 111); font-family: sans-serif; width: 10em; cursor: pointer; padding: 3px 5px; border-radius: 4px; color: white'>
                    우측 메뉴 숨기기
                </button>
            </li>
        `);
        this.commentToggleButtonDiv = $(`
            <div class="tg-div">
                <ul class="tg-list">
                    <li class="tg-list-item" id="nc_toggle_btn">
                        <h4>댓글 컨트롤</h4>
                        <input class="tgl tgl-flip" id="cb5" type="checkbox"/>
                        <label class="tgl-btn" data-tg-off="보이기" data-tg-on="가리기" for="cb5"></label>
                    </li>
                </ul>
            </div>
        `);
        
    }

    bindEvent() {
        this.onClickCommentToggleButton();
        this.onClickSideMenuToggleButton();
    }

    extraProcess() {

        // 뉴스 기사 페이지에서는 우측 메뉴를 닫은 상태가 되도록 설정
        if(location.href.indexOf('read.nhn') > 0) {
            $('#side-menu-toggle-btn').click();
        }
        
    }

    onClickCommentToggleButton() {
        $('#nc_toggle_btn').on('click', () => {
            let checkbox = $('#nc_toggle_btn input');
            let isChecked = checkbox.prop('checked');
    
            if(isChecked) {
                this.commentBox.show();
            } else {
                this.commentBox.hide();
            }
        });
    }

    onClickSideMenuToggleButton() {
        this.sideMenuToggleButton.on('click', () => {
            $('td.aside').toggle();

            if(this.isSideMenuHidden()) {
                $('#side-menu-toggle-btn').text('우측 메뉴 보이기');
                $('#main_content').css('width', '1080px');
                $('#spiLayer').css('width', '1080px');
            } else {
                $('#side-menu-toggle-btn').text('우측 메뉴 숨기기');
                $('#main_content').css('width', this.originalWidthOfContent);
                $('#spiLayer').css('width', this.originalWidthOfContent);
            }
        });
    }

    isSideMenuHidden() {
        return $('td.aside').css('display') === "none";
    }

}