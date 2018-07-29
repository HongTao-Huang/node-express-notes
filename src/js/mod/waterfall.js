export default class{
    constructor(){
        let that = this;
        $(window).on('resize', function(){
            that.init(that.$ct);
        })
    }
    init($c){
        this.$ct = $c;
        this.$items = this.$ct.children();
        var nodeWidth = this.$items.outerWidth(true),
            colNum = parseInt($(window).width()/nodeWidth),
            colSumHeight = [];
        for(var i = 0; i<colNum;i++){
            colSumHeight.push(0);
        }
        this.$items.each(function(){
            var $cur = $(this);

            // colSumHeight = [100, 250, 80, 200]

            var idx = 0,
                minSumHeight = colSumHeight[0];
            for(var i=0;i<colSumHeight.length; i++){
                if(colSumHeight[i] < minSumHeight){
                    idx = i;
                    minSumHeight = colSumHeight[i];
                }
            }
            $cur.css({
                left: nodeWidth*idx,
                top: minSumHeight
            });
            colSumHeight[idx] = $cur.outerHeight(true) + colSumHeight[idx];
        });
    }

}
