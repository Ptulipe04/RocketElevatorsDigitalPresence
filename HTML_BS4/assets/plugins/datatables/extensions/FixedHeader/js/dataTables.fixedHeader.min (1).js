/*!
 FixedHeader 2.1.2
 ©2010-2014 SpryMedia Ltd - datatables.net/license
*/
var FixedHeader;
(function(j,k,h){var l=function(e){FixedHeader=function(a,b){if(!this instanceof FixedHeader)alert("FixedHeader warning: FixedHeader must be initialised with the 'new' keyword.");else{var c={aoCache:[],oSides:{top:!0,bottom:!1,left:0,right:0},oZIndexes:{top:104,bottom:103,left:102,right:101},oCloneOnDraw:{top:!1,bottom:!1,left:!0,right:!0},oMes:{iTableWidth:0,iTableHeight:0,iTableLeft:0,iTableRight:0,iTableTop:0,iTableBottom:0},oOffset:{top:0},nTable:null,bFooter:!1,bInitComplete:!1};this.fnGetSettings=
function(){return c};this.fnUpdate=function(){this._fnUpdateClones();this._fnUpdatePositions()};this.fnPosition=function(){this._fnUpdatePositions()};var d=e.fn.dataTable.Api?(new e.fn.dataTable.Api(a)).settings()[0]:a.fnSettings();d._oPluginFixedHeader=this;this.fnInit(d,b)}};FixedHeader.prototype={fnInit:function(a,b){var c=this.fnGetSettings(),d=this;this.fnInitSettings(c,b);""!==a.oScroll.sX||""!==a.oScroll.sY?alert("FixedHeader 2 is not supported with DataTables' scrolling mode at this time"):
(c.nTable=a.nTable,a.aoDrawCallback.unshift({fn:function(){FixedHeader.fnMeasure();d._fnUpdateClones.call(d);d._fnUpdatePositions.call(d)},sName:"FixedHeader"}),c.bFooter=0<e(">tfoot",c.nTable).length?!0:!1,c.oSides.top&&c.aoCache.push(d._fnCloneTable("fixedHeader","FixedHeader_Header",d._fnCloneThead)),c.oSides.bottom&&c.aoCache.push(d._fnCloneTable("fixedFooter","FixedHeader_Footer",d._fnCloneTfoot)),c.oSides.left&&c.aoCache.push(d._fnCloneTable("fixedLeft","FixedHeader_Left",d._fnCloneTLeft,c.oSides.left)),
c.oSides.right&&c.aoCache.push(d._fnCloneTable("fixedRight","FixedHeader_Right",d._fnCloneTRight,c.oSides.right)),FixedHeader.afnScroll.push(function(){d._fnUpdatePositions.call(d)}),e(j).resize(function(){FixedHeader.fnMeasure();d._fnUpdateClones.call(d);d._fnUpdatePositions.call(d)}),e(c.nTable).on("column-reorder.dt",function(){FixedHeader.fnMeasure();d._fnUpdateClones(!0);d._fnUpdatePositions()}).on("column-visibility.dt",function(){FixedHeader.fnMeasure();d._fnUpdateClones(!0);d._fnUpdatePositions()}),
FixedHeader.fnMeasure(),d._fnUpdateClones(),d._fnUpdatePositions(),c.bInitComplete=!0)},fnInitSettings:function(a,b){if(b!==h&&(b.top!==h&&(a.oSides.top=b.top),b.bottom!==h&&(a.oSides.bottom=b.bottom),"boolean"==typeof b.left?a.oSides.left=b.left?1:0:b.left!==h&&(a.oSides.left=b.left),"boolean"==typeof b.right?a.oSides.right=b.right?1:0:b.right!==h&&(a.oSides.right=b.right),b.zTop!==h&&(a.oZIndexes.top=b.zTop),b.zBottom!==h&&(a.oZIndexes.bottom=b.zBottom),b.zLeft!==h&&(a.oZIndexes.left=b.zLeft),b.zRight!==
h&&(a.oZIndexes.right=b.zRight),b.offsetTop!==h&&(a.oOffset.top=b.offsetTop),b.alwaysCloneTop!==h&&(a.oCloneOnDraw.top=b.alwaysCloneTop),b.alwaysCloneBottom!==h&&(a.oCloneOnDraw.bottom=b.alwaysCloneBottom),b.alwaysCloneLeft!==h&&(a.oCloneOnDraw.left=b.alwaysCloneLeft),b.alwaysCloneRight!==h))a.oCloneOnDraw.right=b.alwaysCloneRight},_fnCloneTable:function(a,b,c,d){var f=this.fnGetSettings(),g;"absolute"!=e(f.nTable.parentNode).css("position")&&(f.nTable.parentNode.style.position="relative");g=f.nTable.cloneNode(!1);
g.removeAttribute("id");var i=k.createElement("div");i.style.position="absolute";i.style.top="0px";i.style.left="0px";i.className+=" FixedHeader_Cloned "+a+" "+b;"fixedHeader"==a&&(i.style.zIndex=f.oZIndexes.top);"fixedFooter"==a&&(i.style.zIndex=f.oZIndexes.bottom);"fixedLeft"==a?i.style.zIndex=f.oZIndexes.left:"fixedRight"==a&&(i.style.zIndex=f.oZIndexes.right);g.style.margin="0";i.appendChild(g);k.body.appendChild(i);return{nNode:g,nWrapper:i,sType:a,sPosition:"",sTop:"",sLeft:"",fnClone:c,iCells:d}},
_fnMeasure:function(){var a=this.fnGetSettings(),b=a.oMes,c=e(a.nTable),d=c.offset(),f=this._fnSumScroll(a.nTable.parentNode,"scrollTop");this._fnSumScroll(a.nTable.parentNode,"scrollLeft");b.iTableWidth=c.outerWidth();b.iTableHeight=c.outerHeight();b.iTableLeft=d.left+a.nTable.parentNode.scrollLeft;b.iTableTop=d.top+f;b.iTableRight=b.iTableLeft+b.iTableWidth;b.iTableRight=FixedHeader.oDoc.iWidth-b.iTableLeft-b.iTableWidth;b.iTableBottom=FixedHeader.oDoc.iHeight-b.iTableTop-b.iTableHeight},_fnSumScroll:function(a,
b){for(var c=a[b];(a=a.parentNode)&&!("HTML"==a.nodeName||"BODY"==a.nodeName);)c=a[b];return c},_fnUpdatePositions:function(){var a=this.fnGetSettings();this._fnMeasure();for(var b=0,c=a.aoCache.length;b<c;b++)"fixedHeader"==a.aoCache[b].sType?this._fnScrollFixedHeader(a.aoCache[b]):"fixedFooter"==a.aoCache[b].sType?this._fnScrollFixedFooter(a.aoCache[b]):"fixedLeft"==a.aoCache[b].sType?this._fnScrollHorizontalLeft(a.aoCache[b]):this._fnScrollHorizontalRight(a.aoCache[b])},_fnUpdateClones:function(a){var b=
this.fnGetSettings();a&&(b.bInitComplete=!1);for(var c=0,d=b.aoCache.length;c<d;c++)b.aoCache[c].fnClone.call(this,b.aoCache[c]);a&&(b.bInitComplete=!0)},_fnScrollHorizontalRight:function(a){var b=this.fnGetSettings().oMes,c=FixedHeader.oWin,d=FixedHeader.oDoc,f=a.nWrapper,g=e(f).outerWidth();c.iScrollRight<b.iTableRight?(this._fnUpdateCache(a,"sPosition","absolute","position",f.style),this._fnUpdateCache(a,"sTop",b.iTableTop+"px","top",f.style),this._fnUpdateCache(a,"sLeft",b.iTableLeft+b.iTableWidth-
g+"px","left",f.style)):b.iTableLeft<d.iWidth-c.iScrollRight-g?(this._fnUpdateCache(a,"sPosition","fixed","position",f.style),this._fnUpdateCache(a,"sTop",b.iTableTop-c.iScrollTop+"px","top",f.style),this._fnUpdateCache(a,"sLeft",c.iWidth-g+"px","left",f.style)):(this._fnUpdateCache(a,"sPosition","absolute","position",f.style),this._fnUpdateCache(a,"sTop",b.iTableTop+"px","top",f.style),this._fnUpdateCache(a,"sLeft",b.iTableLeft+"px","left",f.style))},_fnScrollHorizontalLeft:function(a){var b=this.fnGetSettings().oMes,
c=FixedHeader.oWin,d=a.nWrapper,f=e(d).outerWidth();c.iScrollLeft<b.iTableLeft?(this._fnUpdateCache(a,"sPosition","absolute","position",d.style),this._fnUpdateCache(a,"sTop",b.iTableTop+"px","top",d.style),this._fnUpdateCache(a,"sLeft",b.iTableLeft+"px","left",d.style)):c.iScrollLeft<b.iTableLeft+b.iTableWidth-f?(this._fnUpdateCache(a,"sPosition","fixed","position",d.style),this._fnUpdateCache(a,"sTop",b.iTableTop-c.iScrollTop+"px","top",d.style),this._fnUpdateCache(a,"sLeft","0px","left",d.style)):
(this._fnUpdateCache(a,"sPosition","absolute","position",d.style),this._fnUpdateCache(a,"sTop",b.iTableTop+"px","top",d.style),this._fnUpdateCache(a,"sLeft",b.iTableLeft+b.iTableWidth-f+"px","left",d.style))},_fnScrollFixedFooter:function(a){var b=this.fnGetSettings(),c=b.oMes,d=FixedHeader.oWin,f=a.nWrapper,b=e("thead",b.nTable).outerHeight(),g=e(f).outerHeight();d.iScrollBottom<c.iTableBottom?(this._fnUpdateCache(a,"sPosition","absolute","position",f.style),this._fnUpdateCache(a,"sTop",c.iTableTop+
c.iTableHeight-g+"px","top",f.style),this._fnUpdateCache(a,"sLeft",c.iTableLeft+"px","left",f.style)):d.iScrollBottom<c.iTableBottom+c.iTableHeight-g-b?(this._fnUpdateCache(a,"sPosition","fixed","position",f.style),this._fnUpdateCache(a,"sTop",d.iHeight-g+"px","top",f.style),this._fnUpdateCache(a,"sLeft",c.iTableLeft-d.iScrollLeft+"px","left",f.style)):(this._fnUpdateCache(a,"sPosition","absolute","position",f.style),this._fnUpdateCache(a,"sTop",c.iTableTop+g+"px","top",f.style),this._fnUpdateCache(a,
"sLeft",c.iTableLeft+"px","left",f.style))},_fnScrollFixedHeader:function(a){for(var b=this.fnGetSettings(),c=b.oMes,d=FixedHeader.oWin,e=a.nWrapper,g=0,i=b.nTable.getElementsByTagName("tbody"),h=0;h<i.length;++h)g+=i[h].offsetHeight;c.iTableTop>d.iScrollTop+b.oOffset.top?(this._fnUpdateCache(a,"sPosition","absolute","position",e.style),this._fnUpdateCache(a,"sTop",c.iTableTop+"px","top",e.style),this._fnUpdateCache(a,"sLeft",c.iTableLeft+"px","left",e.style)):d.iScrollTop+b.oOffset.top>c.iTableTop+
g?(this._fnUpdateCache(a,"sPosition","absolute","position",e.style),this._fnUpdateCache(a,"sTop",c.iTableTop+g+"px","top",e.style),this._fnUpdateCache(a,"sLeft",c.iTableLeft+"px","left",e.style)):(this._fnUpdateCache(a,"sPosition","fixed","position",e.style),this._fnUpdateCache(a,"sTop",b.oOffset.top+"px","top",e.style),this._fnUpdateCache(a,"sLeft",c.iTableLeft-d.iScrollLeft+"px","left",e.style))},_fnUpdateCache:function(a,b,c,d,e){a[b]!=c&&(e[d]=c,a[b]=c)},_fnClassUpdate:function(a,b){var c=this;
if("TR"===a.nodeName.toUpperCase()||"TH"===a.nodeName.toUpperCase()||"TD"===a.nodeName.toUpperCase()||"SPAN"===a.nodeName.toUpperCase())b.className=a.className;e(a).children().each(function(d){c._fnClassUpdate(e(a).children()[d],e(b).children()[d])})},_fnCloneThead:function(a){var b=this.fnGetSettings(),c=a.nNode;if(b.bInitComplete&&!b.oCloneOnDraw.top)this._fnClassUpdate(e("thead",b.nTable)[0],e("thead",c)[0]);else{var d=e(b.nTable).outerWidth();a.nWrapper.style.width=d+"px";for(c.style.width=d+
"px";0<c.childNodes.length;)e("thead th",c).unbind("click"),c.removeChild(c.childNodes[0]);a=e("thead",b.nTable).clone(!0)[0];c.appendChild(a);var f=[],g=[];e("thead>tr th",b.nTable).each(function(){f.push(e(this).width())});e("thead>tr td",b.nTable).each(function(){g.push(e(this).width())});e("thead>tr th",b.nTable).each(function(a){e("thead>tr th:eq("+a+")",c).width(f[a]);e(this).width(f[a])});e("thead>tr td",b.nTable).each(function(a){e("thead>tr td:eq("+a+")",c).width(g[a]);e(this).width(g[a])});
e("th.sorting, th.sorting_desc, th.sorting_asc",c).bind("click",function(){this.blur()})}},_fnCloneTfoot:function(a){var b=this.fnGetSettings(),c=a.nNode;for(a.nWrapper.style.width=e(b.nTable).outerWidth()+"px";0<c.childNodes.length;)c.removeChild(c.childNodes[0]);a=e("tfoot",b.nTable).clone(!0)[0];c.appendChild(a);e("tfoot:eq(0)>tr th",b.nTable).each(function(a){e("tfoot:eq(0)>tr th:eq("+a+")",c).width(e(this).width())});e("tfoot:eq(0)>tr td",b.nTable).each(function(a){e("tfoot:eq(0)>tr td:eq("+
a+")",c).width(e(this).width())})},_fnCloneTLeft:function(a){for(var b=this.fnGetSettings(),c=a.nNode,d=e("tbody",b.nTable)[0];0<c.childNodes.length;)c.removeChild(c.childNodes[0]);c.appendChild(e("thead",b.nTable).clone(!0)[0]);c.appendChild(e("tbody",b.nTable).clone(!0)[0]);b.bFooter&&c.appendChild(e("tfoot",b.nTable).clone(!0)[0]);var f="gt("+(a.iCells-1)+")";e("thead tr",c).each(function(){e("th:"+f,this).remove()});e("tfoot tr",c).each(function(){e("th:"+f,this).remove()});e("tbody tr",c).each(function(){e("td:"+
f,this).remove()});this.fnEqualiseHeights("thead",d.parentNode,c);this.fnEqualiseHeights("tbody",d.parentNode,c);this.fnEqualiseHeights("tfoot",d.parentNode,c);for(var g=d=0;g<a.iCells;g++)d+=e("thead tr th:eq("+g+")",b.nTable).outerWidth();c.style.width=d+"px";a.nWrapper.style.width=d+"px"},_fnCloneTRight:function(a){for(var b=this.fnGetSettings(),c=e("tbody",b.nTable)[0],d=a.nNode,f=e("tbody tr:eq(0) td",b.nTable).length;0<d.childNodes.length;)d.removeChild(d.childNodes[0]);d.appendChild(e("thead",
b.nTable).clone(!0)[0]);d.appendChild(e("tbody",b.nTable).clone(!0)[0]);b.bFooter&&d.appendChild(e("tfoot",b.nTable).clone(!0)[0]);e("thead tr th:lt("+(f-a.iCells)+")",d).remove();e("tfoot tr th:lt("+(f-a.iCells)+")",d).remove();e("tbody tr",d).each(function(){e("td:lt("+(f-a.iCells)+")",this).remove()});this.fnEqualiseHeights("thead",c.parentNode,d);this.fnEqualiseHeights("tbody",c.parentNode,d);this.fnEqualiseHeights("tfoot",c.parentNode,d);for(var g=c=0;g<a.iCells;g++)c+=e("thead tr th:eq("+(f-
1-g)+")",b.nTable).outerWidth();d.style.width=c+"px";a.nWrapper.style.width=c+"px"},fnEqualiseHeights:function(a,b,c){var d=e(a+" tr",b),f;e(a+" tr",c).each(function(a){f=d.eq(a).css("height");"Microsoft Internet Explorer"==navigator.appName&&(f=parseInt(f,10)+1);e(this).css("height",f);d.eq(a).css("height",f)})}};FixedHeader.oWin={iScrollTop:0,iScrollRight:0,iScrollBottom:0,iScrollLeft:0,iHeight:0,iWidth:0};FixedHeader.oDoc={iHeight:0,iWidth:0};FixedHeader.afnScroll=[];FixedHeader.fnMeasure=function(){var a=
e(j),b=e(k),c=FixedHeader.oWin,d=FixedHeader.oDoc;d.iHeight=b.height();d.iWidth=b.width();c.iHeight=a.height();c.iWidth=a.width();c.iScrollTop=a.scrollTop();c.iScrollLeft=a.scrollLeft();c.iScrollRight=d.iWidth-c.iScrollLeft-c.iWidth;c.iScrollBottom=d.iHeight-c.iScrollTop-c.iHeight};FixedHeader.version="2.1.2";e(j).scroll(function(){FixedHeader.fnMeasure();for(var a=0,b=FixedHeader.afnScroll.length;a<b;a++)FixedHeader.afnScroll[a]()});e.fn.dataTable.FixedHeader=FixedHeader;return e.fn.DataTable.FixedHeader=
FixedHeader};"function"===typeof define&&define.amd?define(["jquery","datatables"],l):"object"===typeof exports?l(require("jquery"),require("datatables")):jQuery&&!jQuery.fn.dataTable.FixedHeader&&l(jQuery,jQuery.fn.dataTable)})(window,document);