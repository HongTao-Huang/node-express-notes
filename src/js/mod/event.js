class EventCenter {
    constructor(){
        this.events = {}
    }

    on(evt, handler){
        this.events[evt] = this.events[evt] || [];

        this.events[evt].push({
            handler: handler
        });
    }

    fire(evt, args){
        if(!this.events[evt]){
            return;
        }
        for(var i=0; i<this.events[evt].length; i++){
            this.events[evt][i].handler(args);
        }
    }
}

let Event = new EventCenter();

module.exports = Event;