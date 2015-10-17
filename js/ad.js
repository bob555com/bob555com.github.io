//左右两边浮动广告
function lqdellmove(){
if(!document.ns){
var top=document.body.scrollTop;
if(top==0) top=document.documentElement.scrollTop;
document.getElementById("lqdel").style.top = top + 25 + "px";
document.getElementById("lqdel").style.left = document.body.scrollLeft + 8 + "px";
document.getElementById("lqder").style.top = top + 25 + "px";
document.getElementById("lqder").style.left = document.body.scrollLeft + document.body.clientWidth - 78 + "px";

document.getElementById("lqder22").style.top = top + "px";
document.getElementById("lqder22").style.left =(document.body.clientWidth)/2+490 + "px";

document.getElementById("lqder23").style.top = top + "px";
document.getElementById("lqder23").style.left =(document.body.clientWidth)/2-545 + "px";
}
setTimeout("lqdellmove();",200)}
document.write("<div id=lqdel style='position: absolute;visibility: visible;z-index:1;line-height:100%'><a href='http://bet99999.com/?f=bet368' target='_blank'><img src='images/js90x200.gif' width='80' height='180' border='0'/></a><br><a href='http://www.hg5669.com/?intr=1888' target='_blank'><img src='images/bet100X150.gif' width='80' height='180' border='0'/></a><br><a href='http://www.hg5669.com/?intr=1888' target='_blank'><img src='images/am110x160.gif' width='80' height='180' border='0'/></a></div>");


document.write("<div id=lqder style='position: absolute;visibility: visible;z-index:1;line-height:100%'><a href='http://www.pj8280.com/?intr=pjcaiwang' target='_blank'><img src='images/js90x200.gif' width='80' height='180' border='0'/></a><br><a href='http://www.hg5669.com/?intr=1888' target='_blank'><img src='images/bet100X150.gif' width='80' height='180' border='0'/></a><br><a href='http://www.hg5669.com/?intr=1888' target='_blank'><img src='images/am110x160.gif' width='80' height='180' border='0'/></a></div>");

document.write("<div id=lqder22 style='position: absolute;visibility: visible;z-index:1;line-height:100%'><a href=http://bet99999.com/?f=bet368 target=_blank><img border=0 alt='博吧555' src=images/hp55x284.gif width=55 height=290 border=0></a><br><br><a href=http://www.hg5669.com/?intr=1888 target=_blank><img border=0 alt='sun44' src=images/hp55x284.gif width=55 height=290 border=0></a></div>");

document.write("<div id=lqder23 style='position: absolute;visibility: visible;z-index:1;line-height:100%'><a href=http://www.pj8280.com/?intr=pjcaiwang target=_blank><img border=0 alt='博吧555' src=images/hp55x284.gif width=55 height=290 border=0></a><br><br><a href=http://www.hg5669.com/?intr=1888 target=_blank><img border=0 alt='sun44' src=images/hp55x284.gif width=55 height=290 border=0></a></div>");

lqdellmove();

