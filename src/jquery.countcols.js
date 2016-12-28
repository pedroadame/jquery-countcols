(function($){
    $.fn.extend({
        countCols: function () {
            let j = 0;
            let lastTop = -1;
            $(this).each(function (i, row) {
                const posY = $(row).offset().top;
                if (lastTop < 0) {
                    lastTop = posY;
                    j++;
                } else if (lastTop == posY) {
                    j++;
                } else {
                    return false;
                }
            });
            return j;
        }
    });
}(jQuery));
