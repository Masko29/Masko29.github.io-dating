$(document).ready(function(){
    $("#top").owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            768:{
                items:1,
                nav:true
            },
            992:{
                items:1,
                nav:true,
                loop:true
            }
        }
    });
});
$(document).ready(function(){
    $("#bottom").owlCarousel({
        loop:true,
        margin:5,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            480:{
                items:2,
                nav:true
            },
            768:{
                items:4,
                nav:true
            },
            992:{
                items:5,
                nav:true,
                loop:true
            }
        }
    });
});

$(function(){
    $('.wide').columnize({
        width: 350,
        // height: 400,
        lastNeverTallest: true
    });
});

$(document).ready(function(){
    $("select").selecter();
});


var $circle = document.querySelector('.r-progress-bar > .bar');
var $wrapper = document.querySelector('.some-wrapper');
var $text = document.querySelector('.some-wrapper > .inner-wrapper > .text');
var $btn = document.querySelector('.some-wrapper > .inner-wrapper > .increment-btn');

$btn.addEventListener('click', function(evt) {
    var val = incrementProgress(
        $wrapper.getAttribute('data-percentage')
    );
    var r = $circle.getAttribute('r');
    var d = Math.PI * (r * 5);
    var pct = ((100 - val) / 100) * d;

    $circle.style.strokeDashoffset = pct;
    $text.innerText = val + '%';
    $wrapper.setAttribute('data-percentage', val);
});

function incrementProgress(val) {
    val = parseInt(val, 30);
    var min = 1;
    var max = 1;
    var incremented;

    return (incremented = val + random(min, max)) >= 100
        ? 0
        : incremented;
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}











