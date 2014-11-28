(function(a){function Y(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function Z(a,b){return function(c){return bf(a.call(this,c),b)}}function $(a,b){return function(c){return this.lang().ordinal(a.call(this,c),b)}}function _(){}function ba(a){br(a),bc(this,a)}function bb(a){var b=bl(a),c=b.year||0,d=b.month||0,e=b.week||0,f=b.day||0,g=b.hour||0,h=b.minute||0,i=b.second||0,j=b.millisecond||0;this._milliseconds=+j+i*1e3+h*6e4+g*36e5,this._days=+f+e*7,this._months=+d+c*12,this._data={},this._bubble()}function bc(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return b.hasOwnProperty("toString")&&(a.toString=b.toString),b.hasOwnProperty("valueOf")&&(a.valueOf=b.valueOf),a}function bd(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&o.hasOwnProperty(c)&&(b[c]=a[c]);return b}function be(a){return a<0?Math.ceil(a):Math.floor(a)}function bf(a,b,c){var d=""+Math.abs(a),e=a>=0;while(d.length<b)d="0"+d;return(e?c?"+":"":"-")+d}function bg(a,c,d,e){var f=c._milliseconds,g=c._days,h=c._months,i,j;f&&a._d.setTime(+a._d+f*d);if(g||h)i=a.minute(),j=a.hour();g&&a.date(a.date()+g*d),h&&a.month(a.month()+h*d),f&&!e&&b.updateOffset(a);if(g||h)a.minute(i),a.hour(j)}function bh(a){return Object.prototype.toString.call(a)==="[object Array]"}function bi(a){return Object.prototype.toString.call(a)==="[object Date]"||a instanceof Date}function bj(a,b,c){var d=Math.min(a.length,b.length),e=Math.abs(a.length-b.length),f=0,g;for(g=0;g<d;g++)(c&&a[g]!==b[g]||!c&&bn(a[g])!==bn(b[g]))&&f++;return f+e}function bk(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=R[a]||S[b]||b}return a}function bl(a){var b={},c,d;for(d in a)a.hasOwnProperty(d)&&(c=bk(d),c&&(b[c]=a[d]));return b}function bm(c){var d,e;if(c.indexOf("week")===0)d=7,e="day";else if(c.indexOf("month")===0)d=12,e="month";else return;b[c]=function(f,g){var h,i,j=b.fn._lang[c],k=[];typeof f=="number"&&(g=f,f=a),i=function(a){var c=b().utc().set(e,a);return j.call(b.fn._lang,c,f||"")};if(g!=null)return i(g);for(h=0;h<d;h++)k.push(i(h));return k}}function bn(a){var b=+a,c=0;return b!==0&&isFinite(b)&&(b>=0?c=Math.floor(b):c=Math.ceil(b)),c}function bo(a,b){return(new Date(Date.UTC(a,b+1,0))).getUTCDate()}function bp(a){return bq(a)?366:365}function bq(a){return a%4===0&&a%100!==0||a%400===0}function br(a){var b;a._a&&a._pf.overflow===-2&&(b=a._a[h]<0||a._a[h]>11?h:a._a[i]<1||a._a[i]>bo(a._a[g],a._a[h])?i:a._a[j]<0||a._a[j]>23?j:a._a[k]<0||a._a[k]>59?k:a._a[l]<0||a._a[l]>59?l:a._a[m]<0||a._a[m]>999?m:-1,a._pf._overflowDayOfYear&&(b<g||b>i)&&(b=i),a._pf.overflow=b)}function bs(a){return a._isValid==null&&(a._isValid=!isNaN(a._d.getTime())&&a._pf.overflow<0&&!a._pf.empty&&!a._pf.invalidMonth&&!a._pf.nullInput&&!a._pf.invalidFormat&&!a._pf.userInvalidated,a._strict&&(a._isValid=a._isValid&&a._pf.charsLeftOver===0&&a._pf.unusedTokens.length===0)),a._isValid}function bt(a){return a?a.toLowerCase().replace("_","-"):a}function bu(a,c){return c._isUTC?b(a).zone(c._offset||0):b(a).local()}function bv(a,b){return b.abbr=a,n[a]||(n[a]=new _),n[a].set(b),n[a]}function bw(a){delete n[a]}function bx(a){var c=0,d,e,f,g,h=function(a){if(!n[a]&&p)try{require("./lang/"+a)}catch(b){}return n[a]};if(!a)return b.fn._lang;if(!bh(a)){e=h(a);if(e)return e;a=[a]}while(c<a.length){g=bt(a[c]).split("-"),d=g.length,f=bt(a[c+1]),f=f?f.split("-"):null;while(d>0){e=h(g.slice(0,d).join("-"));if(e)return e;if(f&&f.length>=d&&bj(g,f,!0)>=d-1)break;d--}c++}return b.fn._lang}function by(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function bz(a){var b=a.match(t),c,d;for(c=0,d=b.length;c<d;c++)W[b[c]]?b[c]=W[b[c]]:b[c]=by(b[c]);return function(e){var f="";for(c=0;c<d;c++)f+=b[c]instanceof Function?b[c].call(e,a):b[c];return f}}function bA(a,b){return a.isValid()?(b=bB(b,a.lang()),T[b]||(T[b]=bz(b)),T[b](a)):a.lang().invalidDate()}function bB(a,b){function d(a){return b.longDateFormat(a)||a}var c=5;u.lastIndex=0;while(c>=0&&u.test(a))a=a.replace(u,d),u.lastIndex=0,c-=1;return a}function bC(a,b){var c,d=b._strict;switch(a){case"DDDD":return G;case"YYYY":case"GGGG":case"gggg":return d?H:x;case"Y":case"G":case"g":return J;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?I:y;case"S":if(d)return E;case"SS":if(d)return F;case"SSS":if(d)return G;case"DDD":return w;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return A;case"a":case"A":return bx(b._l)._meridiemParse;case"X":return D;case"Z":case"ZZ":return B;case"T":return C;case"SSSS":return z;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?F:v;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return v;default:return c=new RegExp(bK(bJ(a.replace("\\","")),"i")),c}}function bD(a){a=a||"";var b=a.match(B)||[],c=b[b.length-1]||[],d=(c+"").match(O)||["-",0,0],e=+(d[1]*60)+bn(d[2]);return d[0]==="+"?-e:e}function bE(a,b,c){var d,e=c._a;switch(a){case"M":case"MM":b!=null&&(e[h]=bn(b)-1);break;case"MMM":case"MMMM":d=bx(c._l).monthsParse(b),d!=null?e[h]=d:c._pf.invalidMonth=b;break;case"D":case"DD":b!=null&&(e[i]=bn(b));break;case"DDD":case"DDDD":b!=null&&(c._dayOfYear=bn(b));break;case"YY":e[g]=bn(b)+(bn(b)>68?1900:2e3);break;case"YYYY":case"YYYYY":case"YYYYYY":e[g]=bn(b);break;case"a":case"A":c._isPm=bx(c._l).isPM(b);break;case"H":case"HH":case"h":case"hh":e[j]=bn(b);break;case"m":case"mm":e[k]=bn(b);break;case"s":case"ss":e[l]=bn(b);break;case"S":case"SS":case"SSS":case"SSSS":e[m]=bn(("0."+b)*1e3);break;case"X":c._d=new Date(parseFloat(b)*1e3);break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=bD(b);break;case"w":case"ww":case"W":case"WW":case"d":case"dd":case"ddd":case"dddd":case"e":case"E":a=a.substr(0,1);case"gg":case"gggg":case"GG":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=b)}}function bF(a){var c,d,e=[],f,l,m,n,o,p,q,r;if(a._d)return;f=bH(a),a._w&&a._a[i]==null&&a._a[h]==null&&(m=function(c){var d=parseInt(c,10);return c?c.length<3?d>68?1900+d:2e3+d:d:a._a[g]==null?b().weekYear():a._a[g]},n=a._w,n.GG!=null||n.W!=null||n.E!=null?o=bU(m(n.GG),n.W||1,n.E,4,1):(p=bx(a._l),q=n.d!=null?bQ(n.d,p):n.e!=null?parseInt(n.e,10)+p._week.dow:0,r=parseInt(n.w,10)||1,n.d!=null&&q<p._week.dow&&r++,o=bU(m(n.gg),r,q,p._week.doy,p._week.dow)),a._a[g]=o.year,a._dayOfYear=o.dayOfYear),a._dayOfYear&&(l=a._a[g]==null?f[g]:a._a[g],a._dayOfYear>bp(l)&&(a._pf._overflowDayOfYear=!0),d=bP(l,0,a._dayOfYear),a._a[h]=d.getUTCMonth(),a._a[i]=d.getUTCDate());for(c=0;c<3&&a._a[c]==null;++c)a._a[c]=e[c]=f[c];for(;c<7;c++)a._a[c]=e[c]=a._a[c]==null?c===2?1:0:a._a[c];e[j]+=bn((a._tzm||0)/60),e[k]+=bn((a._tzm||0)%60),a._d=(a._useUTC?bP:bO).apply(null,e)}function bG(a){var b;if(a._d)return;b=bl(a._i),a._a=[b.year,b.month,b.day,b.hour,b.minute,b.second,b.millisecond],bF(a)}function bH(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function bI(a){a._a=[],a._pf.empty=!0;var b=bx(a._l),c=""+a._i,d,e,f,g,h,i=c.length,k=0;f=bB(a._f,b).match(t)||[];for(d=0;d<f.length;d++)g=f[d],e=(c.match(bC(g,a))||[])[0],e&&(h=c.substr(0,c.indexOf(e)),h.length>0&&a._pf.unusedInput.push(h),c=c.slice(c.indexOf(e)+e.length),k+=e.length),W[g]?(e?a._pf.empty=!1:a._pf.unusedTokens.push(g),bE(g,e,a)):a._strict&&!e&&a._pf.unusedTokens.push(g);a._pf.charsLeftOver=i-k,c.length>0&&a._pf.unusedInput.push(c),a._isPm&&a._a[j]<12&&(a._a[j]+=12),a._isPm===!1&&a._a[j]===12&&(a._a[j]=0),bF(a),br(a)}function bJ(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function bK(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function bL(a){var b,c,d,e,f;if(a._f.length===0){a._pf.invalidFormat=!0,a._d=new Date(NaN);return}for(e=0;e<a._f.length;e++){f=0,b=bc({},a),b._pf=Y(),b._f=a._f[e],bI(b);if(!bs(b))continue;f+=b._pf.charsLeftOver,f+=b._pf.unusedTokens.length*10,b._pf.score=f;if(d==null||f<d)d=f,c=b}bc(a,c||b)}function bM(a){var b,c,d=a._i,e=K.exec(d);if(e){a._pf.iso=!0;for(b=0,c=M.length;b<c;b++)if(M[b][1].exec(d)){a._f=M[b][0]+(e[6]||" ");break}for(b=0,c=N.length;b<c;b++)if(N[b][1].exec(d)){a._f+=N[b][0];break}d.match(B)&&(a._f+="Z"),bI(a)}else a._d=new Date(d)}function bN(b){var c=b._i,d=q.exec(c);c===a?b._d=new Date:d?b._d=new Date(+d[1]):typeof c=="string"?bM(b):bh(c)?(b._a=c.slice(0),bF(b)):bi(c)?b._d=new Date(+c):typeof c=="object"?bG(b):b._d=new Date(c)}function bO(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return a<1970&&h.setFullYear(a),h}function bP(a){var b=new Date(Date.UTC.apply(null,arguments));return a<1970&&b.setUTCFullYear(a),b}function bQ(a,b){if(typeof a=="string")if(!isNaN(a))a=parseInt(a,10);else{a=b.weekdaysParse(a);if(typeof a!="number")return null}return a}function bR(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function bS(a,b,c){var d=e(Math.abs(a)/1e3),f=e(d/60),g=e(f/60),h=e(g/24),i=e(h/365),j=d<45&&["s",d]||f===1&&["m"]||f<45&&["mm",f]||g===1&&["h"]||g<22&&["hh",g]||h===1&&["d"]||h<=25&&["dd",h]||h<=45&&["M"]||h<345&&["MM",e(h/30)]||i===1&&["y"]||["yy",i];return j[2]=b,j[3]=a>0,j[4]=c,bR.apply({},j)}function bT(a,c,d){var e=d-c,f=d-a.day(),g;return f>e&&(f-=7),f<e-7&&(f+=7),g=b(a).add("d",f),{week:Math.ceil(g.dayOfYear()/7),year:g.year()}}function bU(a,b,c,d,e){var f=bP(a,0,1).getUTCDay(),g,h;return c=c!=null?c:e,g=e-f+(f>d?7:0)-(f<e?7:0),h=7*(b-1)+(c-e)+g+1,{year:h>0?a:a-1,dayOfYear:h>0?h:bp(a-1)+h}}function bV(a){var c=a._i,d=a._f;return c===null?b.invalid({nullInput:!0}):(typeof c=="string"&&(a._i=c=bx().preparse(c)),b.isMoment(c)?(a=bd(c),a._d=new Date(+c._d)):d?bh(d)?bL(a):bI(a):bN(a),new ba(a))}function bW(a,c){b.fn[a]=b.fn[a+"s"]=function(a){var d=this._isUTC?"UTC":"";return a!=null?(this._d["set"+d+c](a),b.updateOffset(this),this):this._d["get"+d+c]()}}function bX(a){b.duration.fn[a]=function(){return this._data[a]}}function bY(a,c){b.duration.fn["as"+a]=function(){return+this/c}}function bZ(a){var c=!1,e=b;if(typeof ender!="undefined")return;a?(d.moment=function(){return!c&&console&&console.warn&&(c=!0,console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")),e.apply(null,arguments)},bc(d.moment,e)):d.moment=b}var b,c="2.5.1",d=this,e=Math.round,f,g=0,h=1,i=2,j=3,k=4,l=5,m=6,n={},o={_isAMomentObject:null,_i:null,_f:null,_l:null,_strict:null,_isUTC:null,_offset:null,_pf:null,_lang:null},p=typeof module!="undefined"&&module.exports&&typeof require!="undefined",q=/^\/?Date\((\-?\d+)/i,r=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,s=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,t=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,u=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,v=/\d\d?/,w=/\d{1,3}/,x=/\d{1,4}/,y=/[+\-]?\d{1,6}/,z=/\d+/,A=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,B=/Z|[\+\-]\d\d:?\d\d/gi,C=/T/i,D=/[\+\-]?\d+(\.\d{1,3})?/,E=/\d/,F=/\d\d/,G=/\d{3}/,H=/\d{4}/,I=/[+-]?\d{6}/,J=/[+-]?\d+/,K=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,L="YYYY-MM-DDTHH:mm:ssZ",M=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],N=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],O=/([\+\-]|\d\d)/gi,P="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),Q={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},R={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},S={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},T={},U="DDD w W M D d".split(" "),V="M D H h m s w W".split(" "),W={M:function(){return this.month()+1},MMM:function(a){return this.lang().monthsShort(this,a)},MMMM:function(a){return this.lang().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.lang().weekdaysMin(this,a)},ddd:function(a){return this.lang().weekdaysShort(this,a)},dddd:function(a){return this.lang().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return bf(this.year()%100,2)},YYYY:function(){return bf(this.year(),4)},YYYYY:function(){return bf(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+bf(Math.abs(a),6)},gg:function(){return bf(this.weekYear()%100,2)},gggg:function(){return bf(this.weekYear(),4)},ggggg:function(){return bf(this.weekYear(),5)},GG:function(){return bf(this.isoWeekYear()%100,2)},GGGG:function(){return bf(this.isoWeekYear(),4)},GGGGG:function(){return bf(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return bn(this.milliseconds()/100)},SS:function(){return bf(bn(this.milliseconds()/10),2)},SSS:function(){return bf(this.milliseconds(),3)},SSSS:function(){return bf(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return a<0&&(a=-a,b="-"),b+bf(bn(a/60),2)+":"+bf(bn(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return a<0&&(a=-a,b="-"),b+bf(bn(a/60),2)+bf(bn(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},X=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];while(U.length)f=U.pop(),W[f+"o"]=$(W[f],f);while(V.length)f=V.pop(),W[f+f]=Z(W[f],2);W.DDDD=Z(W.DDD,3),bc(_.prototype,{set:function(a){var b,c;for(c in a)b=a[c],typeof b=="function"?this[c]=b:this["_"+c]=b},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a){var c,d,e;this._monthsParse||(this._monthsParse=[]);for(c=0;c<12;c++){this._monthsParse[c]||(d=b.utc([2e3,c]),e="^"+this.months(d,"")+"|^"+this.monthsShort(d,""),this._monthsParse[c]=new RegExp(e.replace(".",""),"i"));if(this._monthsParse[c].test(a))return c}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var c,d,e;this._weekdaysParse||(this._weekdaysParse=[]);for(c=0;c<7;c++){this._weekdaysParse[c]||(d=b([2e3,1]).day(c),e="^"+this.weekdays(d,"")+"|^"+this.weekdaysShort(d,"")+"|^"+this.weekdaysMin(d,""),this._weekdaysParse[c]=new RegExp(e.replace(".",""),"i"));if(this._weekdaysParse[c].test(a))return c}},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return(a+"").toLowerCase().charAt(0)==="p"},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b){var c=this._calendar[a];return typeof c=="function"?c.apply(b):c},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return typeof e=="function"?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return typeof c=="function"?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",preparse:function(a){return a},postformat:function(a){return a},week:function(a){return bT(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),b=function(b,c,d,e){var f;return typeof d=="boolean"&&(e=d,d=a),f={},f._isAMomentObject=!0,f._i=b,f._f=c,f._l=d,f._strict=e,f._isUTC=!1,f._pf=Y(),bV(f)},b.utc=function(b,c,d,e){var f;return typeof d=="boolean"&&(e=d,d=a),f={},f._isAMomentObject=!0,f._useUTC=!0,f._isUTC=!0,f._l=d,f._i=b,f._f=c,f._strict=e,f._pf=Y(),bV(f).utc()},b.unix=function(a){return b(a*1e3)},b.duration=function(a,c){var d=a,e=null,f,g,h;return b.isDuration(a)?d={ms:a._milliseconds,d:a._days,M:a._months}:typeof a=="number"?(d={},c?d[c]=a:d.milliseconds=a):(e=r.exec(a))?(f=e[1]==="-"?-1:1,d={y:0,d:bn(e[i])*f,h:bn(e[j])*f,m:bn(e[k])*f,s:bn(e[l])*f,ms:bn(e[m])*f}):!(e=s.exec(a))||(f=e[1]==="-"?-1:1,h=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*f},d={y:h(e[2]),M:h(e[3]),d:h(e[4]),h:h(e[5]),m:h(e[6]),s:h(e[7]),w:h(e[8])}),g=new bb(d),b.isDuration(a)&&a.hasOwnProperty("_lang")&&(g._lang=a._lang),g},b.version=c,b.defaultFormat=L,b.updateOffset=function(){},b.lang=function(a,c){var d;return a?(c?bv(bt(a),c):c===null?(bw(a),a="en"):n[a]||bx(a),d=b.duration.fn._lang=b.fn._lang=bx(a),d._abbr):b.fn._lang._abbr},b.langData=function(a){return a&&a._lang&&a._lang._abbr&&(a=a._lang._abbr),bx(a)},b.isMoment=function(a){return a instanceof ba||a!=null&&a.hasOwnProperty("_isAMomentObject")},b.isDuration=function(a){return a instanceof bb};for(f=X.length-1;f>=0;--f)bm(X[f]);b.normalizeUnits=function(a){return bk(a)},b.invalid=function(a){var c=b.utc(NaN);return a!=null?bc(c._pf,a):c._pf.userInvalidated=!0,c},b.parseZone=function(a){return b(a).parseZone()},bc(b.fn=ba.prototype,{clone:function(){return b(this)},valueOf:function(){return+this._d+(this._offset||0)*6e4},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=b(this).utc();return 0<a.year()&&a.year()<=9999?bA(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):bA(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return bs(this)},isDSTShifted:function(){return this._a?this.isValid()&&bj(this._a,(this._isUTC?b.utc(this._a):b(this._a)).toArray())>0:!1},parsingFlags:function(){return bc({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(a){var c=bA(this,a||b.defaultFormat);return this.lang().postformat(c)},add:function(a,c){var d;return typeof a=="string"?d=b.duration(+c,a):d=b.duration(a,c),bg(this,d,1),this},subtract:function(a,c){var d;return typeof a=="string"?d=b.duration(+c,a):d=b.duration(a,c),bg(this,d,-1),this},diff:function(a,c,d){var e=bu(a,this),f=(this.zone()-e.zone())*6e4,g,h;return c=bk(c),c==="year"||c==="month"?(g=(this.daysInMonth()+e.daysInMonth())*432e5,h=(this.year()-e.year())*12+(this.month()-e.month()),h+=(this-b(this).startOf("month")-(e-b(e).startOf("month")))/g,h-=(this.zone()-b(this).startOf("month").zone()-(e.zone()-b(e).startOf("month").zone()))*6e4/g,c==="year"&&(h=h/12)):(g=this-e,h=c==="second"?g/1e3:c==="minute"?g/6e4:c==="hour"?g/36e5:c==="day"?(g-f)/864e5:c==="week"?(g-f)/6048e5:g),d?h:be(h)},from:function(a,c){return b.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!c)},fromNow:function(a){return this.from(b(),a)},calendar:function(){var a=bu(b(),this).startOf("day"),c=this.diff(a,"days",!0),d=c<-6?"sameElse":c<-1?"lastWeek":c<0?"lastDay":c<1?"sameDay":c<2?"nextDay":c<7?"nextWeek":"sameElse";return this.format(this.lang().calendar(d,this))},isLeapYear:function(){return bq(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return a!=null?(a=bQ(a,this.lang()),this.add({d:a-b})):b},month:function(a){var c=this._isUTC?"UTC":"",d;if(a!=null){if(typeof a=="string"){a=this.lang().monthsParse(a);if(typeof a!="number")return this}return d=this.date(),this.date(1),this._d["set"+c+"Month"](a),this.date(Math.min(d,this.daysInMonth())),b.updateOffset(this),this}return this._d["get"+c+"Month"]()},startOf:function(a){a=bk(a);switch(a){case"year":this.month(0);case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return a==="week"?this.weekday(0):a==="isoWeek"&&this.isoWeekday(1),this},endOf:function(a){return a=bk(a),this.startOf(a).add(a==="isoWeek"?"week":a,1).subtract("ms",1)},isAfter:function(a,c){return c=typeof c!="undefined"?c:"millisecond",+this.clone().startOf(c)>+b(a).startOf(c)},isBefore:function(a,c){return c=typeof c!="undefined"?c:"millisecond",+this.clone().startOf(c)<+b(a).startOf(c)},isSame:function(a,b){return b=b||"ms",+this.clone().startOf(b)===+bu(a,this).startOf(b)},min:function(a){return a=b.apply(null,arguments),a<this?this:a},max:function(a){return a=b.apply(null,arguments),a>this?this:a},zone:function(a){var c=this._offset||0;if(a!=null)typeof a=="string"&&(a=bD(a)),Math.abs(a)<16&&(a=a*60),this._offset=a,this._isUTC=!0,c!==a&&bg(this,b.duration(c-a,"m"),1,!0);else return this._isUTC?c:this._d.getTimezoneOffset();return this},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):typeof this._i=="string"&&this.zone(this._i),this},hasAlignedHourOffset:function(a){return a?a=b(a).zone():a=0,(this.zone()-a)%60===0},daysInMonth:function(){return bo(this.year(),this.month())},dayOfYear:function(a){var c=e((b(this).startOf("day")-b(this).startOf("year"))/864e5)+1;return a==null?c:this.add("d",a-c)},quarter:function(){return Math.ceil((this.month()+1)/3)},weekYear:function(a){var b=bT(this,this.lang()._week.dow,this.lang()._week.doy).year;return a==null?b:this.add("y",a-b)},isoWeekYear:function(a){var b=bT(this,1,4).year;return a==null?b:this.add("y",a-b)},week:function(a){var b=this.lang().week(this);return a==null?b:this.add("d",(a-b)*7)},isoWeek:function(a){var b=bT(this,1,4).week;return a==null?b:this.add("d",(a-b)*7)},weekday:function(a){var b=(this.day()+7-this.lang()._week.dow)%7;return a==null?b:this.add("d",a-b)},isoWeekday:function(a){return a==null?this.day()||7:this.day(this.day()%7?a:a-7)},get:function(a){return a=bk(a),this[a]()},set:function(a,b){return a=bk(a),typeof this[a]=="function"&&this[a](b),this},lang:function(b){return b===a?this._lang:(this._lang=bx(b),this)}});for(f=0;f<P.length;f++)bW(P[f].toLowerCase().replace(/s$/,""),P[f]);bW("year","FullYear"),b.fn.days=b.fn.day,b.fn.months=b.fn.month,b.fn.weeks=b.fn.week,b.fn.isoWeeks=b.fn.isoWeek,b.fn.toJSON=b.fn.toISOString,bc(b.duration.fn=bb.prototype,{_bubble:function(){var a=this._milliseconds,b=this._days,c=this._months,d=this._data,e,f,g,h;d.milliseconds=a%1e3,e=be(a/1e3),d.seconds=e%60,f=be(e/60),d.minutes=f%60,g=be(f/60),d.hours=g%24,b+=be(g/24),d.days=b%30,c+=be(b/30),d.months=c%12,h=be(c/12),d.years=h},weeks:function(){return be(this.days()/7)},valueOf:function(){return this._milliseconds+this._days*864e5+this._months%12*2592e6+bn(this._months/12)*31536e6},humanize:function(a){var b=+this,c=bS(b,!a,this.lang());return a&&(c=this.lang().pastFuture(b,c)),this.lang().postformat(c)},add:function(a,c){var d=b.duration(a,c);return this._milliseconds+=d._milliseconds,this._days+=d._days,this._months+=d._months,this._bubble(),this},subtract:function(a,c){var d=b.duration(a,c);return this._milliseconds-=d._milliseconds,this._days-=d._days,this._months-=d._months,this._bubble(),this},get:function(a){return a=bk(a),this[a.toLowerCase()+"s"]()},as:function(a){return a=bk(a),this["as"+a.charAt(0).toUpperCase()+a.slice(1)+"s"]()},lang:b.fn.lang,toIsoString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"}});for(f in Q)Q.hasOwnProperty(f)&&(bY(f,Q[f]),bX(f.toLowerCase()));bY("Weeks",6048e5),b.duration.fn.asMonths=function(){return(+this-this.years()*31536e6)/2592e6+this.years()*12},b.lang("en",{ordinal:function(a){var b=a%10,c=bn(a%100/10)===1?"th":b===1?"st":b===2?"nd":b===3?"rd":"th";return a+c}}),p?(module.exports=b,bZ(!0)):typeof define=="function"&&define.amd?define("moment",function(c,d,e){return e.config&&e.config()&&e.config().noGlobal!==!0&&bZ(e.config().noGlobal===a),b}):bZ()}).call(this)