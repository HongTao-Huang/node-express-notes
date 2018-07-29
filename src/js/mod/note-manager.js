import Toast from "mod/toast"
import Note from "mod/note"
const Event = require("mod/event.js");
export default class{

    constructor(){
    }
    load() {
        $.get('/api/notes')
        .done(function(ret){
            if(ret.status == 0){
                $.each(ret.data, function(idx, article) {
                    new Note({
                        id: article.id,
                        context: article.text,
                        username: article.username
                    });
                });

                Event.fire('waterfall');
            }else{
                Toast(ret.errorMsg);
            }
        })
        .fail(function(){
            Toast(this.a);
        });
    }

    add() {
        new Note();
    }
}