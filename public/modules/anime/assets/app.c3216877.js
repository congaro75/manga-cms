let t={autoPlay:!1,autoNext:!0,autoSkip:!1};const h=function(o,i){$.ajax({url:`/api/anime/${o}/episodes`,async:!1,success:i||function(e){console.log(e)}})},u={init:function(){$(".watchpage").length&&u.initWatchPage(),$(document).ready(function(){$(".tip").hover(function(){$(this).tooltip("show")}),$(".gotop").click(function(){return $("html, body").animate({scrollTop:0},"slow"),!1}),$(".toggler").on("click",function(){$(this).parents(".shorting").toggleClass("expand"),$(this).html($(this).html()=="[more]"?"[less]":"[more]")}),$(".switch").on("click",function(){$(this).find(".active").removeClass("active");let o=$(this).data("switch"),i=$(`[data-switch="${o}"]`);i.html(i.data($lang))})})},initAnime:function(){},initWatchPage:function(){const o=$(".watchpage").data("anime");$(".watchpage").data("episode"),console.log(o);const i=function(n,a){t[n]=!t[n],f(t[n],a),localStorage.setItem("watchConfig",JSON.stringify(t))};typeof localStorage<"u"&&localStorage.getItem("watchConfig")!==null&&(t=localStorage.getItem("watchConfig"),t=JSON.parse(t));let e=$(".controls"),g=$(".player-wrapper"),c=e.find(".auto-play"),s=e.find(".auto-next"),d=e.find(".light"),l=$('<div style="width: 100%; height: 100%; position: fixed; left: 0px; top: 0px; z-index: 22; background: rgb(0, 0, 0); opacity: 0.95; display: none;"></div>');$("body").append(l);const f=function(n,a){n?a.html(a.data("on")):a.html(a.data("off"))};d.on("click",function(){g.css("z-index",23),l.fadeToggle()}),l.on("click",function(){l.fadeToggle()}),t.autoPlay&&$(".play").click(),{autoPlay:function(){f(t.autoPlay,c)},autoNext:function(){f(t.autoNext,s)},init:function(){this.autoPlay(),this.autoNext()}}.init(),c.on("click",function(){i("autoPlay",c)}),s.on("click",function(){i("autoNext",s)}),typeof o<"u"&&o!==null&&h(o.id,function(n){})}};u.init();
