let e={autoPlay:!1,autoNext:!0,autoSkip:!1};const r={init:function(){$(".watchpage").length&&r.initWatchPage(),$(document).ready(function(){$(".tip").hover(function(){$(this).tooltip("show")}),$(".gotop").click(function(){return $("html, body").animate({scrollTop:0},"slow"),!1}),$(".toggler").on("click",function(){$(this).parents(".shorting").toggleClass("expand"),$(this).html($(this).html()=="[more]"?"[less]":"[more]")}),$(".switch").on("click",function(){$(this).find(".active").removeClass("active");let n=$(this).data("switch"),a=$(`[data-switch="${n}"]`);a.html(a.data($lang))})})},initAnime:function(){},initWatchPage:function(){let n=$(".watchpage").data("anime"),a=$(".watchpage").data("episode");const f=function(t){$(".ep-range").hide(),$(".filter.range button").html(t),$(`.ep-range[data-range="${t}"]`).show()},u=function(t,i){e[t]=!e[t],l(e[t],i),localStorage.setItem("watchConfig",JSON.stringify(e))},l=function(t,i){t?i.html(i.data("on")):i.html(i.data("off"))};typeof localStorage<"u"&&localStorage.getItem("watchConfig")!==null&&(e=localStorage.getItem("watchConfig"),e=JSON.parse(e));let c=$(".controls"),g=$(".player-wrapper"),s=c.find(".auto-play"),d=c.find(".auto-next"),h=c.find(".light"),o=$('<div style="width: 100%; height: 100%; position: fixed; left: 0px; top: 0px; z-index: 22; background: rgb(0, 0, 0); opacity: 0.95; display: none;"></div>');if($("body").append(o),h.on("click",function(){g.css("z-index",23),o.fadeToggle()}),o.on("click",function(){o.fadeToggle()}),e.autoPlay&&$(".play").click(),{autoPlay:function(){l(e.autoPlay,s)},autoNext:function(){l(e.autoNext,d)},init:function(){this.autoPlay(),this.autoNext()}}.init(),s.on("click",function(){u("autoPlay",s)}),d.on("click",function(){u("autoNext",d)}),typeof n<"u"&&n!==null){($('[data-dub="1"]').length<1||$('[data-sub="1"]').length<1)&&$(".filter.type").hide();let t=a?$(`[data-episode-id="${a.id}"] .ep-link`):$("#episodes").find(".ep-link").first();t.click(),t.addClass("active");let i=$(t).parents(".ep-range").data("range");f(i)}$(document).on("click",".filter.range .dropdown-item",function(){let t=$(this).data("value");console.log(t),f(t)})}};r.init();