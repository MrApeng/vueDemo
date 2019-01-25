(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            var fontsize= 20 * (clientWidth / 320);

            if (!clientWidth) return;
            if(20<=fontsize&&fontsize<=25){
                docEl.style.fontSize = fontsize+ 'px';
            }else if(fontsize<20){
                docEl.style.fontSize = 20+ 'px';
            }else if(25<fontsize){
                docEl.style.fontSize = 25+ 'px';
            }

        };

    // console.log(doc);


    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
