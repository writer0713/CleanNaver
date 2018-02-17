(function($) {
    
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

    this.commentBox.before(this.toggleButtonDiv);
    this.commentBox.hide();

    this.commentGuideDiv.remove();
    
    $('body').scrollTop();


    $('#nc_toggle_btn').on('click', () => {
        let checkbox = $('#nc_toggle_btn input');
        let isChecked = checkbox.prop('checked');

        if(isChecked) {
            this.commentBox.show();
        } else {
            this.commentBox.hide();
        }
    });

})(jQuery);