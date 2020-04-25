$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

$(function () {
    $('[data-toggle="popover"]').popover();
});

$(function(){
    $('.dropdown').hover(function() {
        $(this).addClass('open');
    },
    function() {
        $(this).removeClass('open');
    });
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#navbar-home").attr('class', 'navbar navbar-default navbar-fixed-top');
        $("#acoderlab-logo").attr("src","images/logo.png");
    } else {
        $("#navbar-home").attr('class', 'navbar navbar-home navbar-fixed-top');
        $("#acoderlab-logo").attr("src","images/logo_white.png");
    }
}

$(document).ready(function() {
    $('#dataTable').DataTable({
        "order": [0,'ASC'],
        "language": {
            "sProcessing": "جاري التحميل...",
            "sLengthMenu": "عرض _MENU_ صفوف",
            "sZeroRecords": "لا توجد نتائج",
            "sInfo": "إظهار _START_ إلى _END_ من أصل _TOTAL_ مُدخل",
            "sInfoEmpty": "يعرض 0 إلى 0 من أصل 0 مدخلات",
            "sInfoFiltered": "(منتقاة من مجموع _MAX_ مُدخل)",
            "sInfoPostFix": "",
            "sSearch": "بحث : ",
            "sUrl": "",
            "sInfoThousands": ",",
            "oPaginate": {
                "sFirst": "الأول",
                "sLast": "الأخير",
                "sNext": "التالي",
                "sPrevious": "السابق"
            }
        }
    });
} );

wow = new WOW(
    {
        mobile:false
    }
)
wow.init();

$('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
    ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                    return false;
                } else {
                    $target.attr('tabindex','-1');
                    $target.focus();
                };
            });
        }
    }
});

$(function() {
    var scrollbtn = $("#scroll-top");
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 600) {
            scrollbtn.show();
        } else {
            scrollbtn.hide();
        }
    });
    scrollbtn.click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 800);
    });
});

function selectInput(text) {
    var input = text;
    input.select();
    document.execCommand("copy");
}