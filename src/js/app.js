import { AdManager } from './ad-manager';
import { CommentManager } from './comment-manager';

const CleanNaver = new class App {

    constructor(
        adManager,
        commentManager
    )
    {
        console.log('App constructor');
        this.adManager = new AdManager();
        this.commentManager = new CommentManager();
    }

}