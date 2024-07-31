function themeMouseMove(){screenHasMouse=!0}function themeTouchStart(){jQuery(window).off("mousemove"),screenHasMouse=!1,setTimeout(function(){jQuery(window).on("mousemove",themeMouseMove)},250)}function ajax_search(){"use strict";var a=jQuery(".secondary #panel-search .searchform.ajax input[type=text]").val();return""!==a&&jQuery.ajax({type:"POST",url:jQuery(".secondary #panel-search .searchform.ajax").data("ajax-action"),data:{s:a,l:6},cache:!1,beforeSend:function(){jQuery(".secondary #panel-search .searchform").addClass("loading")},success:function(a){jQuery(".secondary #panel-search .searchform").removeClass("loading"),jQuery(".secondary #panel-search .ajax-results").html(a).fadeIn(),jQuery(".secondary #panel-search .ajax-results li:first-child").addClass("focus")},error:function(a,b,c){a.statusText.indexOf("XMLHttpRequest")>-1?jQuery(".secondary #panel-search .ajax-results").html("<li>Make sure you use an actual PHP based web server in order for this functionality to work properly.<li>").fadeIn():jQuery(".secondary #panel-search .ajax-results").html("<li>"+a.statusText+"</li>").fadeIn()}}),!1}jQuery("html").removeClass("no-js"),"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0||jQuery("html").addClass("no-touch");var screenHasMouse=!1;/(iPad|iPhone|iPod)/g.test(navigator.userAgent)||(jQuery(window).on("touchstart",themeTouchStart).on("mousemove",themeMouseMove),window.navigator.msPointerEnabled&&document.addEventListener("MSPointerDown",themeTouchStart,!1)),jQuery(document).ready(function(){"use strict";jQuery(".secondary-links .links a").on("click",function(a){var b=jQuery(this),c=b.attr("class").replace("toggle-","");jQuery(".secondary-links a").not(b).removeClass("on"),b.toggleClass("on"),jQuery(".secondary").attr("class",function(a,b){return b.replace(/(^|\s)open-\S+/g,"")}),jQuery(".secondary-links a.on").length>0?(jQuery(".secondary, .secondary-helper").addClass("open"),jQuery(".secondary").addClass("open-"+c),jQuery("body").addClass("scrolling-disabled"),jQuery(".go-to-top").removeClass("active")):(jQuery(".secondary, .secondary-helper").removeClass("open"),jQuery("body").removeClass("scrolling-disabled"),jQuery(window).triggerHandler("scroll")),a.preventDefault()}),jQuery("#panel-menu .mobile-menu").append(jQuery("#header #site-menu ul").first().clone()),jQuery(document).on({mouseenter:function(){screenHasMouse&&jQuery(this).addClass("hover")},mouseleave:function(){screenHasMouse&&jQuery(this).removeClass("hover")}},"#site-menu li"),jQuery("html").hasClass("no-touch")||(jQuery("#site-menu li.menu-item-has-children > a").on("click",function(a){if(!screenHasMouse&&!window.navigator.msPointerEnabled&&!jQuery("#site-menu").hasClass("mobile")){var b=jQuery(this).parent();b.parents(".hover").length||jQuery("#site-menu li.menu-item-has-children").not(b).removeClass("hover"),b.toggleClass("hover"),a.preventDefault()}}),jQuery(document).on("click",function(a){jQuery(a.target).parents("#site-menu").length>0||jQuery("#site-menu li.menu-item-has-children").removeClass("hover")}),jQuery(".chapter-menu li.menu-item-has-children > a").on("click",function(a){return jQuery(this).parent().hasClass("current-menu-parent")?!0:(a.preventDefault(),jQuery(".chapter-menu li").removeClass("current-menu-parent").removeClass("current-menu-item"),void jQuery(this).parent().addClass("current-menu-parent"))}));var a=jQuery(".go-to-top");a.length>0&&(a.on("click",function(a){return jQuery("html, body").animate({scrollTop:0},600),a.preventDefault(),!1}),jQuery(window).scroll(function(){a.toggleClass("active",jQuery(window).scrollTop()>jQuery("#header").height())})),jQuery(".blockquote-rotator").each(function(){var c,a=jQuery("blockquote",this),b=jQuery('<div class="rotator-pagination"></div>');for(a.not(":eq(0)").hide(),c=a.length-1;c>=0;c--)b.append("<span></span>");jQuery("span:first-child",b).addClass("current"),jQuery(this).append(b)}),jQuery(".blockquote-rotator .rotator-pagination span").on("click",function(a){var b=jQuery(this).parent(),c=b.find(".current").index(),d=jQuery(this).index();if(c!=d){b.find("span:eq("+c+")").removeClass("current"),b.find("span:eq("+d+")").addClass("current");var e=b.parent();jQuery("blockquote:eq("+c+")",e).hide(),jQuery("blockquote:eq("+d+")",e).show()}}),jQuery(".skill").each(function(){jQuery(".skill-level-active",this).animate({width:jQuery(this).data("value")+"%"},{duration:1e3,step:function(a,b){jQuery(this).siblings(".skill-percentage").html(a.toFixed(0)+"%")}})}),jQuery(".secondary #panel-search input[type=text]").keyup(function(a){27==a.keyCode&&jQuery(".secondary-links .toggle-search").triggerHandler("click")}),jQuery(".secondary #panel-search input[type=text]").on("keypress keydown keyup",function(a){switch(a.keyCode){case 13:a.preventDefault(),jQuery(".secondary #panel-search .ajax-results .result").length>0&&(jQuery(".secondary-links .toggle-search").triggerHandler("click"),window.location.href=jQuery(".secondary #panel-search .ajax-results .focus a").attr("href"));break;case 38:if("keydown"==a.type){var b=jQuery(".secondary #panel-search .ajax-results .focus"),c=b.prev(":first");c.length>0&&(c.addClass("focus"),b.removeClass("focus"))}a.preventDefault();break;case 40:if("keydown"==a.type){var b=jQuery(".secondary #panel-search .ajax-results .focus"),d=b.next(":first");d.length>0&&(d.addClass("focus"),b.removeClass("focus"))}a.preventDefault()}}),jQuery(".secondary #panel-search .searchform.ajax input[type=text]").on("keyup",function(a){clearTimeout(jQuery.data(this,"timer"));var b=jQuery(this).val();""==b?jQuery(".secondary #panel-search .ajax-results").fadeOut():b!=jQuery(this).data("search_key")&&b.length>1&&(jQuery(this).data("timer",setTimeout(ajax_search,100)),jQuery(this).data("search_key",b))}),jQuery(".tabs a").on("click",function(a){var b=jQuery(this).parent();if(a.preventDefault(),!b.hasClass("active")){b.siblings("li").each(function(){jQuery(this).removeClass("active"),jQuery(jQuery(this).find("a").attr("href")).removeClass("active")}),b.addClass("active");var c=b.find("a").attr("href");jQuery(c).addClass("active")}})});