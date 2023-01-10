let c={autoPlay:!1,autoNext:!0,autoSkip:!1};const k=function(e,i){e=decodeURIComponent(window.atob(e));for(var l="",s=0;s<e.length;s++){var o=e[s];if(o.match(/[a-z]/i)){var t=o.charCodeAt(0);o.match(/[A-Z]/)?(t+=i,t>90?t=65+(t-91):t<65&&(t=91-(65-t))):(t+=i,t>122?t=97+(t-123):t<97&&(t=123-(97-t))),l+=String.fromCharCode(t)}else l+=o}return l},v=(e,i=!0,l="text/javascript")=>new Promise((s,o)=>{try{const t=document.createElement("script");t.type=l,t.async=i,t.src=e,t.addEventListener("load",r=>{s({status:!0})}),t.addEventListener("error",r=>{o({status:!1,message:"Failed to load the script \uFF04{FILE_URL}"})}),document.body.appendChild(t)}catch(t){o(t)}}),u={init:function(){u.initAnime(),$(".watchpage").length&&u.initWatchPage(),$(document).ready(function(){$(".tip").hover(function(){$(this).tooltip("show")}),$(document).on("click",".gotop",function(){return $("html, body").animate({scrollTop:0},"slow"),!1}),$(document).on("click","#menu-toggler",function(){$("#menu").slideToggle({duration:200})})}),$("#search").click(function(){$(this).toggleClass("show"),$(document).mouseup(function(e){console.log(e.target),(!$("form").is(e.target)||$("form").has(e.target).length===0)&&$("#search").removeClass("show")})})},initAnime:function(){let e={element:$("#recent-update"),name:$(".links .tab.active").data("name"),page:$(".links .tab.active").data("page")||1};const i=function(l,s=1){$.ajax({url:`/api/home/${l}?page=${s}`,success:function(o){$(".itemlist").html(o.data)}})};$(e.element).on("click",".links .tab",function(){e.name=$(this).data("name"),e.page=$(this).data("page")||1,$(".links .tab").removeClass("active"),$(this).addClass("active"),i(e.name,e.page),e.page<=1&&$(".paging .prev").addClass("disabled")}),$(e.element).on("click",".paging .next",function(){$(".paging .prev").removeClass("disabled"),i(e.name,++e.page)}),$(e.element).on("click",".paging .prev",function(){i(e.name,--e.page),e.page<=1&&$(".paging .prev").addClass("disabled")})},initWatchPage:function(){let e=$(".watchpage").data("anime"),i=$(".watchpage").data("episode");const l=function(a){$(".ep-range").hide(),$(".filter.range button").html(a),$(`.ep-range[data-range="${a}"]`).show()},s=function(a,n){c[a]=!c[a],o(c[a],n),localStorage.setItem("watchConfig",JSON.stringify(c))},o=function(a,n){a?n.html(n.data("on")):n.html(n.data("off"))};typeof localStorage<"u"&&localStorage.getItem("watchConfig")!==null&&(c=localStorage.getItem("watchConfig"),c=JSON.parse(c));let t=$(".controls"),r=$(".player-wrapper"),p=t.find(".auto-play"),f=t.find(".auto-next"),g=t.find(".auto-skip"),m=t.find(".light"),d=$('<div style="width: 100%; height: 100%; position: fixed; left: 0px; top: 0px; z-index: 22; background: rgb(0, 0, 0); opacity: 0.95; display: none;"></div>');if($("body").append(d),m.on("click",function(){r.css("z-index",23),d.fadeToggle()}),d.on("click",function(){d.fadeToggle()}),{autoPlay:function(){o(c.autoPlay,p)},autoNext:function(){o(c.autoNext,f)},autoSkip:function(){o(c.autoSkip,g)},bookmark:function(){let a=t.find('.bookmark [data-toggle="dropdown"]');a.html(a.data("add")),a.on("click",function(n){n.preventDefault()})},init:function(){for(let a in this)a!=="init"&&this[a]()}}.init(),p.on("click",function(){s("autoPlay",p)}),f.on("click",function(){s("autoNext",f)}),g.on("click",function(){s("autoSkip",g)}),typeof e<"u"&&e!==null){($('[data-dub="1"]').length<1||$('[data-sub="1"]').length<1)&&$(".filter.type").hide();let a=i?$(`[data-episode-id="${i.id}"] .ep-link`):$("#episodes").find(".ep-link").first();a.click(),a.addClass("active"),i=i||a.data("episode");let n=$(a).parents(".ep-range").data("range");l(n)}$(document).ready(function(){$(document).on("keyup",".filter input",function(){let a=$(this).val().toLowerCase();$(".ep-link").removeClass("highlight"),$("[data-episode-num='"+a+"']").find(".ep-link").addClass("highlight")}),$(document).on("click",".filter.range .dropdown-item",function(){let a=$(this).data("value");console.log(a),l(a)}),$(document).on("click",".toggler",function(){$(this).parents(".shorting").toggleClass("expand"),$(this).html($(this).html()=="[more]"?"[less]":"[more]")}),$(document).on("click",".switch",function(){$(this).find(".active").removeClass("active");let a=$(this).data("switch"),n=$(`[data-switch="${a}"]`);n.html(n.data($lang))}),$(document).on("click",".servers a",function(a){a.preventDefault();let n=$(this),h=n.data("url"),y=n.data("type");$(".servers a").removeClass("active"),n.addClass("active"),u.initPlayer(h,y)}),$(document).on("click",".play",function(a){$(".servers a").first().trigger("click")}),c.autoPlay&&$(".play").click()})},initPlayer:async function(e,i="mp4"){e=k(e,21);const l=document.getElementById("player");var s=$("backdrop").css("background-image");if(l.innerHTML="",i==="embed"){let r=$('<iframe src="'+e+'" frameborder="0" allowfullscreen></iframe>');r.css({width:"100%",height:"100%",position:"absolute",top:0,left:0}),$(l).html(r);return}const o={file:e,image:s,width:"100%",height:"100%",autostart:!0,mute:!0,controls:!0};typeof jwplayer>"u"&&(await v("https://ssl.p.jwpcdn.com/player/v/8.1.3/jwplayer.js"),jwplayer.key="W7zSm81+mmIsg7F+fyHRKhF3ggLkTqtGMhvI92kbqf/ysE99");var t=jwplayer(l).setup(o);t.on("ready",function(){c.autoPlay||t.play()}),t.onComplete(function(){if(c.autoNext){let r=$(".ep-link.active").parents(".ep-range").next().find(".ep-link").first();r.length>0&&r.click()}})}};u.init();