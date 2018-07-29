require('less/toast.less');

class toast{
  constructor(msg , time){
      this.msg = msg;
      this.dismissTime = time||1000;  //ms
      this.createToast();
      this.showToast();
  }

  createToast(){
      var tpl = '<div class="toast">'+this.msg+'</div>';
      this.$toast = $(tpl);
      $('body').append(this.$toast);
  }

  showToast(){
    var that = this;
    this.$toast.fadeIn(300, function(){
        setTimeout(function(){
            that.$toast.fadeOut(300,function(){
                that.$toast.remove();
            });
        }, that.dismissTime);
    });
  }
}

export default function Toast(msg,time){
  return new toast(msg, time);
}