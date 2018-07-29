import NoteManager from "mod/note-manager"
import Water from "mod/waterfall"
require('less/index.less');
const Event = require("mod/event.js");

let noteManager = new NoteManager();
let WaterFall = new Water();

noteManager.load();

$('.add-note').on('click', function() {
    noteManager.add();
})

Event.on('waterfall', function(){
    WaterFall.init($('#content'));
})