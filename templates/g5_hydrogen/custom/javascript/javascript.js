/* кнопка вверх to top*/
jQuery(document)
         .ready(function ($) { 
  $('#g-totop i').mouseover( function(){
    $( this ).animate({opacity: 0.65},100);
  }).mouseout( function(){
    $( this ).animate({opacity: 1},100);
  }).click( function(){
    window.scroll(0 ,0); 
    return false;
  });

  $(window).scroll(function(){
    if ( $(document).scrollTop() > 0 ) {
      $('#g-totop').fadeIn('fast');
    } else {
      $('#g-totop').fadeOut('fast');
    }
  });
});

/* кнопка вверх to top*/

/*липкая - шапка прайса */
/*
(function($) {
    $(document).ready(function() {
        var $header = $("#header-tab"),
            $clone = $header.before($header.clone().addClass("clone"));
        
        $(window).on("scroll", function() {
            var fromTop = $(document).scrollTop();
            $("body").toggleClass("down", (fromTop > 200));
        });
    });
})(jQuery);*/

/*где купить*/

    jQuery(document).ready(function($) {
        $("#tabs").tabs(), 
        $(".accordion").accordion({heightStyle:"content", active:0, navigation:0, collapsible: true,  active: false, animated:1}), /**/
        $(".table_part td:even").css({"text-align":"center","width":"10%", "padding":"5px", "background-color":"#e6e6e6"}),
$(".table_part td:odd").css({"padding":"0.6% 1%"}),
        $("#tabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix"),
        $("table li").removeClass("ui-corner-top").addClass("ui-corner-left");
                   var bodyH = $(window).height() / 2;
    $("body").after(''
            + '');
    $(window).bind('load', function() {
        $('#system-load').fadeOut('slow').remove();
        $('body').animate({opacity: 1}, 'fast');
    });
        $('.accordion').accordion({
        collapsible:true,
        beforeActivate: function(event, ui) {
             // Аккордеон считает, что панель открывается
            if (ui.newHeader[0]) {
                var currHeader  = ui.newHeader;
                var currContent = currHeader.next('.ui-accordion-content');
             // Аккордеон считает, панель закрывается
            } else {
                var currHeader  = ui.oldHeader;
                var currContent = currHeader.next('.ui-accordion-content');
            }
             //  изменили поведение по умолчанию, это определяет фактическое состояние
            var isPanelSelected = currHeader.attr('aria-selected') == 'true';   
             // Переключение заголовка панели
            currHeader.toggleClass('ui-corner-all',isPanelSelected).toggleClass('accordion-header-active ui-state-active ui-corner-top',!isPanelSelected).attr('aria-selected',((!isPanelSelected).toString()));       
            // Переключение значка панели
            currHeader.children('.ui-icon').toggleClass('ui-icon-triangle-1-e',isPanelSelected).toggleClass('ui-icon-triangle-1-s',!isPanelSelected);    
             // перемещеине
            currContent.toggleClass('accordion-content-active',!isPanelSelected)    
            if (isPanelSelected) { currContent.slideUp(); }  
            else { currContent.slideDown(); }
          return false; // Отменяет действие по умолчанию
        }
    });
        /*скрыть содержимое до полной загруски страницы*/

     window.onload = function() {
        var div = document.querySelector('.hide');
        div && div.classList.remove('hide')
         };

/*заглушка от скачиваний картинок*/
/*
var img = document.getElementsByTagName('img');
for(var i in img)
{
    img[i].oncontextmenu = function()
    {
        return false;
    }
}
*/
/*запрет на выделение текста, вызова меню*/
/*
var data = document.getElementsByClassName('article-info');

for(var i in data)
{
    data[i].oncontextmenu = function()
    {
        return false;
    }
}*/
// запрет на выделение текста document.body.onselectstart= function() {return false}



//добавили класс pop от слайдера картинок к альтернативному макету вывода статей
$("#sladerpages a").addClass("pop");
// добавляем к домашней странице слайдер
$("#slicks #sladerpages").attr('id','s2');
/*переключатель картинок на странице товара*/

             var mini = $("#mini div img"),
                 big = $("#big .big-img img");
             mini.each(function (i, el) {
             var next = i + 1 == mini.size() ? 0 : i + 1;
             $(el)
                     .click(
                         function (event) {
                             event.preventDefault();
                             if(big.data("next") == next) return;
                             big.fadeTo( function () {
                                 big.attr({
                                     "src": $(el)
                                         .parent()
                                         .attr("href")
                                 })
                                     .data({
                                         "next": next
                                     });
                             });
                              big.fadeTo(00, 1);
                         }
                 )
             });
             big.data({
                 "next": 1
             })
                 .click(function (event) {
                     mini.eq($(this)
                         .data("next"))
                         .click()
                 })
});
/*переключатель картинок на странице товара только пульт (написать другой код для всех таких функций)*/

  jQuery(document).ready(function($){
                 var mini = $("#mini_pult div img"),
                 big = $("#big_pult .big-img img");
             mini.each(function (i, el) {
             var next = i + 1 == mini.size() ? 0 : i + 1;
             $(el)
                     .click(
                         function (event) {
                             event.preventDefault();
                             if(big.data("next") == next) return;
                             big.fadeTo(function () {
                                 big.attr({
                                     "src": $(el)
                                         .parent()
                                         .attr("href")
                                 })
                                     .data({
                                         "next": next
                                     });
                             });
                              big.fadeTo(0, 1);
                         }
                 )
             });
             big.data({
                 "next": 1
             })
                 .click(function (event) {
                     mini.eq($(this)
                         .data("next"))
                         .click()
                 })
       });
/*переключатель блока навигации на странице товара*/
  jQuery(document).ready(function($){
    $('.tabs_menu a').click(function(e) {
        e.preventDefault();
        $('.tabs_menu .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.tab').not(tab).css({'display':'none'});
        $(tab).fadeIn(400);
    });
});