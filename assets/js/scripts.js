document.getElementById('page-top').className = 'js';

$(function(){

    console.log('jQuery is ready.');

    var isTouch = (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
    if(isTouch) { $('html').addClass('touch') }



});