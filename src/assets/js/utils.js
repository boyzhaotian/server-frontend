'use strict';

let isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
        BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
        iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
        Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
        Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
        any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

let fullHeight = function() {

    let setHeight = () => {
        let doms = document.getElementsByClassName('js-fullheight')
        for (let i = 0; i < doms.length; i++) {
            doms[i].style.height = window.innerHeight + 'px'
        }
    }
    window.onresize = () => {
        setHeight()
    }
    !isMobile.any()&&setHeight()

};

let hasClass = (element,cls) => {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

let init = () => {
    fullHeight()
}

let clone = (obj) => {
    return JSON.parse(JSON.stringify(obj))
}
let timer = null
let debounce = (fn, delay) => {
    console.log(timer);
    clearTimeout(timer)
    timer = setTimeout(() => {
        fn&&fn()
    }, delay);
}

export {
    isMobile,
    fullHeight,
    hasClass,
    init,
    clone,
    debounce
}