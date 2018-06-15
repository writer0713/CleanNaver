import "../css/app.css";
import { AdManager } from './ad-manager';
import { CommentManager } from './comment-manager';

const CleanNaver = new class App {

    constructor(
        adManager,
        commentManager
    )
    {
        console.log('App constructor11');
        this.adManager = new AdManager();
        this.commentManager = new CommentManager();
    }

}