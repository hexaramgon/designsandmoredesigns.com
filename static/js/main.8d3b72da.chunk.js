(this["webpackJsonpindecisive_1.0"]=this["webpackJsonpindecisive_1.0"]||[]).push([[0],{21:function(e,i,t){},36:function(e,i,t){},57:function(e,i,t){},62:function(e,i,t){},83:function(e,i,t){},87:function(e,i,t){},88:function(e,i,t){"use strict";t.r(i);var n=t(1),a=t(0),s=t.n(a),d=t(24),c=t.n(d),o=(t(57),t.p+"static/media/logo.2939453e.svg");t(21),t(36),t(17),t(14),t(34),t(20);t(62),t(63);var r=t(4),p=t(6),h=t(8),l=t(7),u=(s.a.Component,t(35),t(48),t(9),t(51));Object(u.a)(4);var f=t(13),m=t.n(f),g=t.p+"static/media/frontend.493fb940.jpg",v=t.p+"static/media/pic2.92201bc7.jpg",S=t.p+"static/media/pic3.893f0c1d.jpg",x=t.p+"static/media/pic4.aff5c807.jpg",b=t.p+"static/media/pic5.413ef1d4.jpg",j=function(){function e(){Object(r.a)(this,e),this.initSlides(),this.initSlideshow()}return Object(p.a)(e,[{key:"initSlides",value:function(){this.container=m()("[data-slideshow]"),this.slides=this.container.find("img"),this.slides.each((function(e,i){return m()(i).attr("data-slide",e)}))}},{key:"initSlideshow",value:function(){var e=this;this.imagesLoaded=0,this.currentIndex=0,this.setNextSlide(),this.slides.each((function(i,t){m()("<img>").on("load",m.a.proxy(e.loadImage,e)).attr("src",m()(t).attr("src"))}))}},{key:"loadImage",value:function(){this.imagesLoaded++,this.imagesLoaded>=this.slides.length&&this.playSlideshow()}},{key:"setNextSlide",value:function(){this.nextSlide=this.container.find('[data-slide="'.concat(this.currentIndex,'"]')).first(),this.nextSlide.addClass("next")}},{key:"playSlideshow",value:function(){var e=this;this.slideshow=window.setInterval((function(){e.performSlide()}),3500)}},{key:"performSlide",value:function(){this.prevSlide&&this.prevSlide.removeClass("prev fade-out"),this.nextSlide.removeClass("next"),this.prevSlide=this.nextSlide,this.prevSlide.addClass("prev"),this.currentIndex++,this.currentIndex>=this.slides.length&&(this.currentIndex=0),this.setNextSlide(),this.prevSlide.addClass("fade-out")}}]),e}();m()(document).ready((function(){new j}));s.a.Component,t(65);var C=t.p+"static/media/error.5cde1d6f.png",w=(s.a.Component,t.p,t.p,t.p,t.p,t.p+"static/media/map1.500e7977.png"),y=t.p+"static/media/pizzamap.d5a46be2.png",I=t.p+"static/media/mexicanmap.6451ce8b.png",k=t.p+"static/media/burgermap.4c3d0f6a.png";s.a.Component;var M=t(50),O=t(28),L=(t.p,t.p,t(83),s.a.Component,function(e){for(var i=10*Math.random(),t=Math.round(i);t>=e;)t=Math.abs(t-Math.round(10*Math.random()))}(),t(87),t.p,function(){return Object(n.jsx)("h1",{children:"hiiiiiiiiii Jennifer"})}),F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,90)).then((function(i){var t=i.getCLS,n=i.getFID,a=i.getFCP,s=i.getLCP,d=i.getTTFB;t(e),n(e),a(e),s(e),d(e)}))};c.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(L,{})}),document.getElementById("root")),F()}},[[88,1,2]]]);
//# sourceMappingURL=main.8d3b72da.chunk.js.map