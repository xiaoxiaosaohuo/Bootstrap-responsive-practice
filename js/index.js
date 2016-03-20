
$(function(){
	$("#myCarousel").carousel({
	interval:3000,
	});
	


// 文本较少时，让页脚始终在底部
// var footerHeight = 0,
// footerTop = 0,
// $footer = $("#footer");
// positionFooter();
// //定义position Footer function
// function positionFooter() {
// //取到div#footer高度
// footerHeight = $footer.outerHeight();

// //div#footer离屏幕顶部的距离

// footerTop = ( $(window).scrollTop()+$(window).height()-footerHeight)+"px";

// //如果页面内容高度小于屏幕高度，div#footer将绝对定位到屏幕底部，否则div#footer保留它的正常定位

// if ( ($(document.body).height()+footerHeight) < $(window).height()) {

// $footer.css({

// position: "absolute"

// }).stop().animate({

// top: footerTop

// },0);

// } else {

// $footer.css({

// position: "static"

// });

// }

// }
// //scroll和resize事件触发时对页脚重新定位
// $(window).scroll(positionFooter).resize(positionFooter);

});

