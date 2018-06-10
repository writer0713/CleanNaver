import $ from 'jquery';

export class CommentManager {

    constructor() {
        console.log('CommentManager constructor12');

        this.initVariables();
        this.init();
        this.bindEvent();
    }

    init() {
        this.addCustomCSS();

        this.commentBox.before(this.toggleButtonDiv);
        this.commentBox.hide();

        this.commentGuideDiv.remove();

        this.toggleButtonDiv.hide();
        this.commentBox.load(this.naverCommentOutlink, () => {
            this.toggleButtonDiv.show();
        });
        
        $('body').scrollTop();
    }

    initVariables() {
        let currentNewsUrl = location.href;
        this.naverCommentOutlink = currentNewsUrl + '&m_view=1&includeAllCount=true';

        this.commentBox = $('#cbox_module');
        this.commentGuideDiv = $('.comment_guide');
        this.toggleButtonDiv = $(`
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

    /**
     * 댓글을 새로 불러오고 나면 오른쪽 사이드메뉴(div.aside)에 fixed !important 속성이 붙으면서
     * 레이아웃이 깨지는 이슈가 있음. 이 style을 헤더에 추가해서 해당 이슈 해결.
     */
    addCustomCSS() {
        let customCSS = 
        `<style>
          .has_scroll_top div.aside {
            position: relative !important;
            top: 0;
          }
        </style>`;

        $('head').append(customCSS);
    }

    bindEvent() {
        this.onClickToggleButton();
    }

    onClickToggleButton() {
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

}