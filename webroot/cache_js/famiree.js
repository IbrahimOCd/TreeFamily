/*!
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */
(function(global,factory){if(typeof module==="object"&&typeof module.exports==="object"){module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}
return factory(w);};}else{factory(global);}}(typeof window!=="undefined"?window:this,function(window,noGlobal){var deletedIds=[];var document=window.document;var slice=deletedIds.slice;var concat=deletedIds.concat;var push=deletedIds.push;var indexOf=deletedIds.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var support={};var
version="1.12.4",jQuery=function(selector,context){return new jQuery.fn.init(selector,context);},rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi,fcamelCase=function(all,letter){return letter.toUpperCase();};jQuery.fn=jQuery.prototype={jquery:version,constructor:jQuery,selector:"",length:0,toArray:function(){return slice.call(this);},get:function(num){return num!=null?(num<0?this[num+this.length]:this[num]):slice.call(this);},pushStack:function(elems){var ret=jQuery.merge(this.constructor(),elems);ret.prevObject=this;ret.context=this.context;return ret;},each:function(callback){return jQuery.each(this,callback);},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function(){return this.pushStack(slice.apply(this,arguments));},first:function(){return this.eq(0);},last:function(){return this.eq(-1);},eq:function(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function(){return this.prevObject||this.constructor();},push:push,sort:deletedIds.sort,splice:deletedIds.splice};jQuery.extend=jQuery.fn.extend=function(){var src,copyIsArray,copy,name,options,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;if(typeof target==="boolean"){deep=target;target=arguments[i]||{};i++;}
if(typeof target!=="object"&&!jQuery.isFunction(target)){target={};}
if(i===length){target=this;i--;}
for(;i<length;i++){if((options=arguments[i])!=null){for(name in options){src=target[name];copy=options[name];if(target===copy){continue;}
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[];}else{clone=src&&jQuery.isPlainObject(src)?src:{};}
target[name]=jQuery.extend(deep,clone,copy);}else if(copy!==undefined){target[name]=copy;}}}}
return target;};jQuery.extend({expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),isReady:true,error:function(msg){throw new Error(msg);},noop:function(){},isFunction:function(obj){return jQuery.type(obj)==="function";},isArray:Array.isArray||function(obj){return jQuery.type(obj)==="array";},isWindow:function(obj){return obj!=null&&obj==obj.window;},isNumeric:function(obj){var realStringObj=obj&&obj.toString();return!jQuery.isArray(obj)&&(realStringObj-parseFloat(realStringObj)+1)>=0;},isEmptyObject:function(obj){var name;for(name in obj){return false;}
return true;},isPlainObject:function(obj){var key;if(!obj||jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false;}
try{if(obj.constructor&&!hasOwn.call(obj,"constructor")&&!hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false;}}catch(e){return false;}
if(!support.ownFirst){for(key in obj){return hasOwn.call(obj,key);}}
for(key in obj){}
return key===undefined||hasOwn.call(obj,key);},type:function(obj){if(obj==null){return obj+"";}
return typeof obj==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj;},globalEval:function(data){if(data&&jQuery.trim(data)){(window.execScript||function(data){window["eval"].call(window,data);})(data);}},camelCase:function(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();},each:function(obj,callback){var length,i=0;if(isArrayLike(obj)){length=obj.length;for(;i<length;i++){if(callback.call(obj[i],i,obj[i])===false){break;}}}else{for(i in obj){if(callback.call(obj[i],i,obj[i])===false){break;}}}
return obj;},trim:function(text){return text==null?"":(text+"").replace(rtrim,"");},makeArray:function(arr,results){var ret=results||[];if(arr!=null){if(isArrayLike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{push.call(ret,arr);}}
return ret;},inArray:function(elem,arr,i){var len;if(arr){if(indexOf){return indexOf.call(arr,elem,i);}
len=arr.length;i=i?i<0?Math.max(0,len+i):i:0;for(;i<len;i++){if(i in arr&&arr[i]===elem){return i;}}}
return-1;},merge:function(first,second){var len=+second.length,j=0,i=first.length;while(j<len){first[i++]=second[j++];}
if(len!==len){while(second[j]!==undefined){first[i++]=second[j++];}}
first.length=i;return first;},grep:function(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}
return matches;},map:function(elems,callback,arg){var length,value,i=0,ret=[];if(isArrayLike(elems)){length=elems.length;for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}
return concat.apply([],ret);},guid:1,proxy:function(fn,context){var args,proxy,tmp;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}
if(!jQuery.isFunction(fn)){return undefined;}
args=slice.call(arguments,2);proxy=function(){return fn.apply(context||this,args.concat(slice.call(arguments)));};proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;},now:function(){return+(new Date());},support:support});if(typeof Symbol==="function"){jQuery.fn[Symbol.iterator]=deletedIds[Symbol.iterator];}
jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArrayLike(obj){var length=!!obj&&"length"in obj&&obj.length,type=jQuery.type(obj);if(type==="function"||jQuery.isWindow(obj)){return false;}
return type==="array"||length===0||typeof length==="number"&&length>0&&(length-1)in obj;}
var Sizzle=
/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
(function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function(a,b){if(a===b){hasDuplicate=true;}
return 0;},MAX_NEGATIVE=1<<31,hasOwn=({}).hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,indexOf=function(list,elem){var i=0,len=list.length;for(;i<len;i++){if(list[i]===elem){return i;}}
return-1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",whitespace="[\\x20\\t\\r\\n\\f]",identifier="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+"*([*^$|!~]?=)"+whitespace+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+identifier+")(?:\\(("+"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+".*"+")\\)|)",rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+identifier+")"),"CLASS":new RegExp("^\\.("+identifier+")"),"TAG":new RegExp("^("+identifier+"|[*])"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+
whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,rescape=/'|\\/g,runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000;return high!==high||escapedWhitespace?escaped:high<0?String.fromCharCode(high+0x10000):String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);},unloadHandler=function(){setDocument();};try{push.apply((arr=slice.call(preferredDoc.childNodes)),preferredDoc.childNodes);arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length?function(target,els){push_native.apply(target,slice.call(els));}:function(target,els){var j=target.length,i=0;while((target[j++]=els[i++])){}
target.length=j-1;}};}
function Sizzle(selector,context,results,seed){var m,i,elem,nid,nidselect,match,groups,newSelector,newContext=context&&context.ownerDocument,nodeType=context?context.nodeType:9;results=results||[];if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results;}
if(!seed){if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}
context=context||document;if(documentIsHTML){if(nodeType!==11&&(match=rquickExpr.exec(selector))){if((m=match[1])){if(nodeType===9){if((elem=context.getElementById(m))){if(elem.id===m){results.push(elem);return results;}}else{return results;}}else{if(newContext&&(elem=newContext.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}}
if(support.qsa&&!compilerCache[selector+" "]&&(!rbuggyQSA||!rbuggyQSA.test(selector))){if(nodeType!==1){newContext=context;newSelector=selector;}else if(context.nodeName.toLowerCase()!=="object"){if((nid=context.getAttribute("id"))){nid=nid.replace(rescape,"\\$&");}else{context.setAttribute("id",(nid=expando));}
groups=tokenize(selector);i=groups.length;nidselect=ridentifier.test(nid)?"#"+nid:"[id='"+nid+"']";while(i--){groups[i]=nidselect+" "+toSelector(groups[i]);}
newSelector=groups.join(",");newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;}
if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){}finally{if(nid===expando){context.removeAttribute("id");}}}}}}
return select(selector.replace(rtrim,"$1"),context,results,seed);}
function createCache(){var keys=[];function cache(key,value){if(keys.push(key+" ")>Expr.cacheLength){delete cache[keys.shift()];}
return(cache[key+" "]=value);}
return cache;}
function markFunction(fn){fn[expando]=true;return fn;}
function assert(fn){var div=document.createElement("div");try{return!!fn(div);}catch(e){return false;}finally{if(div.parentNode){div.parentNode.removeChild(div);}
div=null;}}
function addHandle(attrs,handler){var arr=attrs.split("|"),i=arr.length;while(i--){Expr.attrHandle[arr[i]]=handler;}}
function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&(~b.sourceIndex||MAX_NEGATIVE)-
(~a.sourceIndex||MAX_NEGATIVE);if(diff){return diff;}
if(cur){while((cur=cur.nextSibling)){if(cur===b){return-1;}}}
return a?1:-1;}
function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}
function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}
function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;while(i--){if(seed[(j=matchIndexes[i])]){seed[j]=!(matches[j]=seed[j]);}}});});}
function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context;}
support=Sizzle.support={};isXML=Sizzle.isXML=function(elem){var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};setDocument=Sizzle.setDocument=function(node){var hasCompare,parent,doc=node?node.ownerDocument||node:preferredDoc;if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;}
document=doc;docElem=document.documentElement;documentIsHTML=!isXML(document);if((parent=document.defaultView)&&parent.top!==parent){if(parent.addEventListener){parent.addEventListener("unload",unloadHandler,false);}else if(parent.attachEvent){parent.attachEvent("onunload",unloadHandler);}}
support.attributes=assert(function(div){div.className="i";return!div.getAttribute("className");});support.getElementsByTagName=assert(function(div){div.appendChild(document.createComment(""));return!div.getElementsByTagName("*").length;});support.getElementsByClassName=rnative.test(document.getElementsByClassName);support.getById=assert(function(div){docElem.appendChild(div).id=expando;return!document.getElementsByName||!document.getElementsByName(expando).length;});if(support.getById){Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var m=context.getElementById(id);return m?[m]:[];}};Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};}else{delete Expr.find["ID"];Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId;};};}
Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag);}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0,results=context.getElementsByTagName(tag);if(tag==="*"){while((elem=results[i++])){if(elem.nodeType===1){tmp.push(elem);}}
return tmp;}
return results;};Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){return context.getElementsByClassName(className);}};rbuggyMatches=[];rbuggyQSA=[];if((support.qsa=rnative.test(document.querySelectorAll))){assert(function(div){docElem.appendChild(div).innerHTML="<a id='"+expando+"'></a>"+"<select id='"+expando+"-\r\\' msallowcapture=''>"+"<option selected=''></option></select>";if(div.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");}
if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");}
if(!div.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=");}
if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}
if(!div.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]");}});assert(function(div){var input=document.createElement("input");input.setAttribute("type","hidden");div.appendChild(input).setAttribute("name","D");if(div.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");}
if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled");}
div.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}
if((support.matchesSelector=rnative.test((matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)))){assert(function(div){support.disconnectedMatch=matches.call(div,"div");matches.call(div,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}
rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));hasCompare=rnative.test(docElem.compareDocumentPosition);contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while((b=b.parentNode)){if(b===a){return true;}}}
return false;};sortOrder=hasCompare?function(a,b){if(a===b){hasDuplicate=true;return 0;}
var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;}
compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1;if(compare&1||(!support.sortDetached&&b.compareDocumentPosition(a)===compare)){if(a===document||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return-1;}
if(b===document||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1;}
return sortInput?(indexOf(sortInput,a)-indexOf(sortInput,b)):0;}
return compare&4?-1:1;}:function(a,b){if(a===b){hasDuplicate=true;return 0;}
var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];if(!aup||!bup){return a===document?-1:b===document?1:aup?-1:bup?1:sortInput?(indexOf(sortInput,a)-indexOf(sortInput,b)):0;}else if(aup===bup){return siblingCheck(a,b);}
cur=a;while((cur=cur.parentNode)){ap.unshift(cur);}
cur=b;while((cur=cur.parentNode)){bp.unshift(cur);}
while(ap[i]===bp[i]){i++;}
return i?siblingCheck(ap[i],bp[i]):ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};return document;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){if((elem.ownerDocument||elem)!==document){setDocument(elem);}
expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&!compilerCache[expr+" "]&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);if(ret||support.disconnectedMatch||elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}
return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){if((context.ownerDocument||context)!==document){setDocument(context);}
return contains(context,elem);};Sizzle.attr=function(elem,name){if((elem.ownerDocument||elem)!==document){setDocument(elem);}
var fn=Expr.attrHandle[name.toLowerCase()],val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while((elem=results[i++])){if(elem===results[i]){j=duplicates.push(i);}}
while(j--){results.splice(duplicates[j],1);}}
sortInput=null;return results;};getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){while((node=elem[i++])){ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){if(typeof elem.textContent==="string"){return elem.textContent;}else{for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}
return ret;};Expr=Sizzle.selectors={cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function(match){match[1]=match[1].replace(runescape,funescape);match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}
return match.slice(0,4);},"CHILD":function(match){match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){if(!match[3]){Sizzle.error(match[0]);}
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+((match[7]+match[8])||match[3]==="odd");}else if(match[3]){Sizzle.error(match[0]);}
return match;},"PSEUDO":function(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;}
if(match[3]){match[2]=match[4]||match[5]||"";}else if(unquoted&&rpseudo.test(unquoted)&&(excess=tokenize(unquoted,true))&&(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}
return match.slice(0,3);}},filter:{"TAG":function(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");});},"ATTR":function(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}
if(!operator){return true;}
result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?function(elem){return!!elem.parentNode;}:function(elem,context,xml){var cache,uniqueCache,outerCache,node,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType,diff=false;if(parent){if(simple){while(dir){node=elem;while((node=node[dir])){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}}
start=dir=type==="only"&&!start&&"nextSibling";}
return true;}
start=[forward?parent.firstChild:parent.lastChild];if(forward&&useCache){node=parent;outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if(node.nodeType===1&&++diff&&node===elem){uniqueCache[type]=[dirruns,nodeIndex,diff];break;}}}else{if(useCache){node=elem;outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex;}
if(diff===false){while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){if(useCache){outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});uniqueCache[type]=[dirruns,diff];}
if(node===elem){break;}}}}}
diff-=last;return diff===first||(diff%first===0&&diff / first>=0);}};},"PSEUDO":function(pseudo,argument){var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);if(fn[expando]){return fn(argument);}
if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}
return fn;}},pseudos:{"not":markFunction(function(selector){var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;while(i--){if((elem=unmatched[i])){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);input[0]=null;return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}),"lang":markFunction(function(lang){if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}
lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if((elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang"))){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),"target":function(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function(elem){return elem===docElem;},"focus":function(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},"enabled":function(elem){return elem.disabled===false;},"disabled":function(elem){return elem.disabled===true;},"checked":function(elem){var nodeName=elem.nodeName.toLowerCase();return(nodeName==="input"&&!!elem.checked)||(nodeName==="option"&&!!elem.selected);},"selected":function(elem){if(elem.parentNode){elem.parentNode.selectedIndex;}
return elem.selected===true;},"empty":function(elem){for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}
return true;},"parent":function(elem){return!Expr.pseudos["empty"](elem);},"header":function(elem){return rheader.test(elem.nodeName);},"input":function(elem){return rinputs.test(elem.nodeName);},"button":function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&((attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");},"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(matchIndexes,length){return[length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i);}
return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}
return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}
for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}
function setFilters(){}
setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}
soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){if(!matched||(match=rcomma.exec(soFar))){if(match){soFar=soFar.slice(match[0].length)||soFar;}
groups.push((tokens=[]));}
matched=false;if((match=rcombinators.exec(soFar))){matched=match.shift();tokens.push({value:matched,type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);}
for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}
if(!matched){break;}}
return parseOnly?soFar.length:soFar?Sizzle.error(selector):tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}
return selector;}
function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base&&dir==="parentNode",doneName=done++;return combinator.first?function(elem,context,xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}}:function(elem,context,xml){var oldCache,uniqueCache,outerCache,newCache=[dirruns,doneName];if(xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});if((oldCache=uniqueCache[dir])&&oldCache[0]===dirruns&&oldCache[1]===doneName){return(newCache[2]=oldCache[2]);}else{uniqueCache[dir]=newCache;if((newCache[2]=matcher(elem,context,xml))){return true;}}}}}};}
function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}
return true;}:matchers[0];}
function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}
return results;}
function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if((elem=unmatched[i])){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}
return newUnmatched;}
function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}
if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}
return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?postFinder||(seed?preFilter:preexisting||postFilter)?[]:results:matcherIn;if(matcher){matcher(matcherIn,matcherOut,context,xml);}
if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);i=temp.length;while(i--){if((elem=temp[i])){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}
if(seed){if(postFinder||preFilter){if(postFinder){temp=[];i=matcherOut.length;while(i--){if((elem=matcherOut[i])){temp.push((matcherIn[i]=elem));}}
postFinder(null,(matcherOut=[]),temp,xml);}
i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}
function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=(!leadingRelative&&(xml||context!==outermostContext))||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));checkContext=null;return ret;}];for(;i<len;i++){if((matcher=Expr.relative[tokens[i].type])){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);if(matcher[expando]){j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}
return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens((tokens=tokens.slice(j))),j<len&&toSelector(tokens));}
matchers.push(matcher);}}
return elementMatcher(matchers);}
function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,elems=seed||byElement&&Expr.find["TAG"]("*",outermost),dirrunsUnique=(dirruns+=contextBackup==null?1:Math.random()||0.1),len=elems.length;if(outermost){outermostContext=context===document||context||outermost;}
for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;if(!context&&elem.ownerDocument!==document){setDocument(elem);xml=!documentIsHTML;}
while((matcher=elementMatchers[j++])){if(matcher(elem,context||document,xml)){results.push(elem);break;}}
if(outermost){dirruns=dirrunsUnique;}}
if(bySet){if((elem=!matcher&&elem)){matchedCount--;}
if(seed){unmatched.push(elem);}}}
matchedCount+=i;if(bySet&&i!==matchedCount){j=0;while((matcher=setMatchers[j++])){matcher(unmatched,setMatched,context,xml);}
if(seed){if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}
setMatched=condense(setMatched);}
push.apply(results,setMatched);if(outermost&&!seed&&setMatched.length>0&&(matchedCount+setMatchers.length)>1){Sizzle.uniqueSort(results);}}
if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}
return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}
compile=Sizzle.compile=function(selector,match){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){if(!match){match=tokenize(selector);}
i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));cached.selector=selector;}
return cached;};select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize((selector=compiled.selector||selector));results=results||[];if(match.length===1){tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&support.getById&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;}else if(compiled){context=context.parentNode;}
selector=selector.slice(tokens.shift().value.length);}
i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];if(Expr.relative[(type=token.type)]){break;}
if((find=Expr.find[type])){if((seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context))){tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}
break;}}}}
(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,!context||rsibling.test(selector)&&testContext(context.parentNode)||context);return results;};support.sortStable=expando.split("").sort(sortOrder).join("")===expando;support.detectDuplicates=!!hasDuplicate;setDocument();support.sortDetached=assert(function(div1){return div1.compareDocumentPosition(document.createElement("div"))&1;});if(!assert(function(div){div.innerHTML="<a href='#'></a>";return div.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});}
if(!support.attributes||!assert(function(div){div.innerHTML="<input/>";div.firstChild.setAttribute("value","");return div.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});}
if(!assert(function(div){return div.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;}});}
return Sizzle;})(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;var dir=function(elem,dir,until){var matched=[],truncate=until!==undefined;while((elem=elem[dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break;}
matched.push(elem);}}
return matched;};var siblings=function(n,elem){var matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n);}}
return matched;};var rneedsContext=jQuery.expr.match.needsContext;var rsingleTag=(/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/);var risSimple=/^.[^:#\[\.,]*$/;function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not;});}
if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return(elem===qualifier)!==not;});}
if(typeof qualifier==="string"){if(risSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not);}
qualifier=jQuery.filter(qualifier,elements);}
return jQuery.grep(elements,function(elem){return(jQuery.inArray(elem,qualifier)>-1)!==not;});}
jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}
return elems.length===1&&elem.nodeType===1?jQuery.find.matchesSelector(elem,expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function(selector){var i,ret=[],self=this,len=self.length;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}
for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}
ret=this.pushStack(len>1?jQuery.unique(ret):ret);ret.selector=this.selector?this.selector+" "+selector:selector;return ret;},filter:function(selector){return this.pushStack(winnow(this,selector||[],false));},not:function(selector){return this.pushStack(winnow(this,selector||[],true));},is:function(selector){return!!winnow(this,typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}});var rootjQuery,rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,init=jQuery.fn.init=function(selector,context,root){var match,elem;if(!selector){return this;}
root=root||rootjQuery;if(typeof selector==="string"){if(selector.charAt(0)==="<"&&selector.charAt(selector.length-1)===">"&&selector.length>=3){match=[null,selector,null];}else{match=rquickExpr.exec(selector);}
if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){if(jQuery.isFunction(this[match])){this[match](context[match]);}else{this.attr(match,context[match]);}}}
return this;}else{elem=document.getElementById(match[2]);if(elem&&elem.parentNode){if(elem.id!==match[2]){return rootjQuery.find(selector);}
this.length=1;this[0]=elem;}
this.context=document;this.selector=selector;return this;}}else if(!context||context.jquery){return(context||root).find(selector);}else{return this.constructor(context).find(selector);}}else if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this;}else if(jQuery.isFunction(selector)){return typeof root.ready!=="undefined"?root.ready(selector):selector(jQuery);}
if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context;}
return jQuery.makeArray(selector,this);};init.prototype=jQuery.fn;rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({has:function(target){var i,targets=jQuery(target,this),len=targets.length;return this.filter(function(){for(i=0;i<len;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function(selectors,context){var cur,i=0,l=this.length,matched=[],pos=rneedsContext.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){if(cur.nodeType<11&&(pos?pos.index(cur)>-1:cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}
return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);},index:function(elem){if(!elem){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1;}
if(typeof elem==="string"){return jQuery.inArray(this[0],jQuery(elem));}
return jQuery.inArray(elem.jquery?elem[0]:elem,this);},add:function(selector,context){return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){do{cur=cur[dir];}while(cur&&cur.nodeType!==1);return cur;}
jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function(elem){return dir(elem,"parentNode");},parentsUntil:function(elem,i,until){return dir(elem,"parentNode",until);},next:function(elem){return sibling(elem,"nextSibling");},prev:function(elem){return sibling(elem,"previousSibling");},nextAll:function(elem){return dir(elem,"nextSibling");},prevAll:function(elem){return dir(elem,"previousSibling");},nextUntil:function(elem,i,until){return dir(elem,"nextSibling",until);},prevUntil:function(elem,i,until){return dir(elem,"previousSibling",until);},siblings:function(elem){return siblings((elem.parentNode||{}).firstChild,elem);},children:function(elem){return siblings(elem.firstChild);},contents:function(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var ret=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}
if(selector&&typeof selector==="string"){ret=jQuery.filter(selector,ret);}
if(this.length>1){if(!guaranteedUnique[name]){ret=jQuery.uniqueSort(ret);}
if(rparentsprev.test(name)){ret=ret.reverse();}}
return this.pushStack(ret);};});var rnotwhite=(/\S+/g);function createOptions(options){var object={};jQuery.each(options.match(rnotwhite)||[],function(_,flag){object[flag]=true;});return object;}
jQuery.Callbacks=function(options){options=typeof options==="string"?createOptions(options):jQuery.extend({},options);var
firing,memory,fired,locked,list=[],queue=[],firingIndex=-1,fire=function(){locked=options.once;fired=firing=true;for(;queue.length;firingIndex=-1){memory=queue.shift();while(++firingIndex<list.length){if(list[firingIndex].apply(memory[0],memory[1])===false&&options.stopOnFalse){firingIndex=list.length;memory=false;}}}
if(!options.memory){memory=false;}
firing=false;if(locked){if(memory){list=[];}else{list="";}}},self={add:function(){if(list){if(memory&&!firing){firingIndex=list.length-1;queue.push(memory);}
(function add(args){jQuery.each(args,function(_,arg){if(jQuery.isFunction(arg)){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&jQuery.type(arg)!=="string"){add(arg);}});})(arguments);if(memory&&!firing){fire();}}
return this;},remove:function(){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);if(index<=firingIndex){firingIndex--;}}});return this;},has:function(fn){return fn?jQuery.inArray(fn,list)>-1:list.length>0;},empty:function(){if(list){list=[];}
return this;},disable:function(){locked=queue=[];list=memory="";return this;},disabled:function(){return!list;},lock:function(){locked=true;if(!memory){self.disable();}
return this;},locked:function(){return!!locked;},fireWith:function(context,args){if(!locked){args=args||[];args=[context,args.slice?args.slice():args];queue.push(args);if(!firing){fire();}}
return this;},fire:function(){self.fireWith(this,arguments);return this;},fired:function(){return!!fired;}};return self;};jQuery.extend({Deferred:function(func){var tuples=[["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],state="pending",promise={state:function(){return state;},always:function(){deferred.done(arguments).fail(arguments);return this;},then:function(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var fn=jQuery.isFunction(fns[i])&&fns[i];deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);}else{newDefer[tuple[0]+"With"](this===promise?newDefer.promise():this,fn?[returned]:arguments);}});});fns=null;}).promise();},promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise;}},deferred={};promise.pipe=promise.then;jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3];promise[tuple[1]]=list.add;if(stateString){list.add(function(){state=stateString;},tuples[i^1][2].disable,tuples[2][2].lock);}
deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?promise:this,arguments);return this;};deferred[tuple[0]+"With"]=list.fireWith;});promise.promise(deferred);if(func){func.call(deferred,deferred);}
return deferred;},when:function(subordinate){var i=0,resolveValues=slice.call(arguments),length=resolveValues.length,remaining=length!==1||(subordinate&&jQuery.isFunction(subordinate.promise))?length:0,deferred=remaining===1?subordinate:jQuery.Deferred(),updateFunc=function(i,contexts,values){return function(value){contexts[i]=this;values[i]=arguments.length>1?slice.call(arguments):value;if(values===progressValues){deferred.notifyWith(contexts,values);}else if(!(--remaining)){deferred.resolveWith(contexts,values);}};},progressValues,progressContexts,resolveContexts;if(length>1){progressValues=new Array(length);progressContexts=new Array(length);resolveContexts=new Array(length);for(;i<length;i++){if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().progress(updateFunc(i,progressContexts,progressValues)).done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject);}else{--remaining;}}}
if(!remaining){deferred.resolveWith(resolveContexts,resolveValues);}
return deferred.promise();}});var readyList;jQuery.fn.ready=function(fn){jQuery.ready.promise().done(fn);return this;};jQuery.extend({isReady:false,readyWait:1,holdReady:function(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}},ready:function(wait){if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}
jQuery.isReady=true;if(wait!==true&&--jQuery.readyWait>0){return;}
readyList.resolveWith(document,[jQuery]);if(jQuery.fn.triggerHandler){jQuery(document).triggerHandler("ready");jQuery(document).off("ready");}}});function detach(){if(document.addEventListener){document.removeEventListener("DOMContentLoaded",completed);window.removeEventListener("load",completed);}else{document.detachEvent("onreadystatechange",completed);window.detachEvent("onload",completed);}}
function completed(){if(document.addEventListener||window.event.type==="load"||document.readyState==="complete"){detach();jQuery.ready();}}
jQuery.ready.promise=function(obj){if(!readyList){readyList=jQuery.Deferred();if(document.readyState==="complete"||(document.readyState!=="loading"&&!document.documentElement.doScroll)){window.setTimeout(jQuery.ready);}else if(document.addEventListener){document.addEventListener("DOMContentLoaded",completed);window.addEventListener("load",completed);}else{document.attachEvent("onreadystatechange",completed);window.attachEvent("onload",completed);var top=false;try{top=window.frameElement==null&&document.documentElement;}catch(e){}
if(top&&top.doScroll){(function doScrollCheck(){if(!jQuery.isReady){try{top.doScroll("left");}catch(e){return window.setTimeout(doScrollCheck,50);}
detach();jQuery.ready();}})();}}}
return readyList.promise(obj);};jQuery.ready.promise();var i;for(i in jQuery(support)){break;}
support.ownFirst=i==="0";support.inlineBlockNeedsLayout=false;jQuery(function(){var val,div,body,container;body=document.getElementsByTagName("body")[0];if(!body||!body.style){return;}
div=document.createElement("div");container=document.createElement("div");container.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";body.appendChild(container).appendChild(div);if(typeof div.style.zoom!=="undefined"){div.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";support.inlineBlockNeedsLayout=val=div.offsetWidth===3;if(val){body.style.zoom=1;}}
body.removeChild(container);});(function(){var div=document.createElement("div");support.deleteExpando=true;try{delete div.test;}catch(e){support.deleteExpando=false;}
div=null;})();var acceptData=function(elem){var noData=jQuery.noData[(elem.nodeName+" ").toLowerCase()],nodeType=+elem.nodeType||1;return nodeType!==1&&nodeType!==9?false:!noData||noData!==true&&elem.getAttribute("classid")===noData;};var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/([A-Z])/g;function dataAttr(elem,key,data){if(data===undefined&&elem.nodeType===1){var name="data-"+key.replace(rmultiDash,"-$1").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:+data+""===data?+data:rbrace.test(data)?jQuery.parseJSON(data):data;}catch(e){}
jQuery.data(elem,key,data);}else{data=undefined;}}
return data;}
function isEmptyDataObject(obj){var name;for(name in obj){if(name==="data"&&jQuery.isEmptyObject(obj[name])){continue;}
if(name!=="toJSON"){return false;}}
return true;}
function internalData(elem,name,data,pvt){if(!acceptData(elem)){return;}
var ret,thisCache,internalKey=jQuery.expando,isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[internalKey]:elem[internalKey]&&internalKey;if((!id||!cache[id]||(!pvt&&!cache[id].data))&&data===undefined&&typeof name==="string"){return;}
if(!id){if(isNode){id=elem[internalKey]=deletedIds.pop()||jQuery.guid++;}else{id=internalKey;}}
if(!cache[id]){cache[id]=isNode?{}:{toJSON:jQuery.noop};}
if(typeof name==="object"||typeof name==="function"){if(pvt){cache[id]=jQuery.extend(cache[id],name);}else{cache[id].data=jQuery.extend(cache[id].data,name);}}
thisCache=cache[id];if(!pvt){if(!thisCache.data){thisCache.data={};}
thisCache=thisCache.data;}
if(data!==undefined){thisCache[jQuery.camelCase(name)]=data;}
if(typeof name==="string"){ret=thisCache[name];if(ret==null){ret=thisCache[jQuery.camelCase(name)];}}else{ret=thisCache;}
return ret;}
function internalRemoveData(elem,name,pvt){if(!acceptData(elem)){return;}
var thisCache,i,isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[jQuery.expando]:jQuery.expando;if(!cache[id]){return;}
if(name){thisCache=pvt?cache[id]:cache[id].data;if(thisCache){if(!jQuery.isArray(name)){if(name in thisCache){name=[name];}else{name=jQuery.camelCase(name);if(name in thisCache){name=[name];}else{name=name.split(" ");}}}else{name=name.concat(jQuery.map(name,jQuery.camelCase));}
i=name.length;while(i--){delete thisCache[name[i]];}
if(pvt?!isEmptyDataObject(thisCache):!jQuery.isEmptyObject(thisCache)){return;}}}
if(!pvt){delete cache[id].data;if(!isEmptyDataObject(cache[id])){return;}}
if(isNode){jQuery.cleanData([elem],true);}else if(support.deleteExpando||cache!=cache.window){delete cache[id];}else{cache[id]=undefined;}}
jQuery.extend({cache:{},noData:{"applet ":true,"embed ":true,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(elem){elem=elem.nodeType?jQuery.cache[elem[jQuery.expando]]:elem[jQuery.expando];return!!elem&&!isEmptyDataObject(elem);},data:function(elem,name,data){return internalData(elem,name,data);},removeData:function(elem,name){return internalRemoveData(elem,name);},_data:function(elem,name,data){return internalData(elem,name,data,true);},_removeData:function(elem,name){return internalRemoveData(elem,name,true);}});jQuery.fn.extend({data:function(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;if(key===undefined){if(this.length){data=jQuery.data(elem);if(elem.nodeType===1&&!jQuery._data(elem,"parsedAttrs")){i=attrs.length;while(i--){if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}
jQuery._data(elem,"parsedAttrs",true);}}
return data;}
if(typeof key==="object"){return this.each(function(){jQuery.data(this,key);});}
return arguments.length>1?this.each(function(){jQuery.data(this,key,value);}):elem?dataAttr(elem,key,jQuery.data(elem,key)):undefined;},removeData:function(key){return this.each(function(){jQuery.removeData(this,key);});}});jQuery.extend({queue:function(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=jQuery._data(elem,type);if(data){if(!queue||jQuery.isArray(data)){queue=jQuery._data(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}
return queue||[];}},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type);};if(fn==="inprogress"){fn=queue.shift();startLength--;}
if(fn){if(type==="fx"){queue.unshift("inprogress");}
delete hooks.stop;fn.call(elem,next,hooks);}
if(!startLength&&hooks){hooks.empty.fire();}},_queueHooks:function(elem,type){var key=type+"queueHooks";return jQuery._data(elem,key)||jQuery._data(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){jQuery._removeData(elem,type+"queue");jQuery._removeData(elem,key);})});}});jQuery.fn.extend({queue:function(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}
if(arguments.length<setter){return jQuery.queue(this[0],type);}
return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function(type){return this.queue(type||"fx",[]);},promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(!(--count)){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}
type=type||"fx";while(i--){tmp=jQuery._data(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}
resolve();return defer.promise(obj);}});(function(){var shrinkWrapBlocksVal;support.shrinkWrapBlocks=function(){if(shrinkWrapBlocksVal!=null){return shrinkWrapBlocksVal;}
shrinkWrapBlocksVal=false;var div,body,container;body=document.getElementsByTagName("body")[0];if(!body||!body.style){return;}
div=document.createElement("div");container=document.createElement("div");container.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";body.appendChild(container).appendChild(div);if(typeof div.style.zoom!=="undefined"){div.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;"+"box-sizing:content-box;display:block;margin:0;border:0;"+"padding:1px;width:1px;zoom:1";div.appendChild(document.createElement("div")).style.width="5px";shrinkWrapBlocksVal=div.offsetWidth!==3;}
body.removeChild(container);return shrinkWrapBlocksVal;};})();var pnum=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");var cssExpand=["Top","Right","Bottom","Left"];var isHidden=function(elem,el){elem=el||elem;return jQuery.css(elem,"display")==="none"||!jQuery.contains(elem.ownerDocument,elem);};function adjustCSS(elem,prop,valueParts,tween){var adjusted,scale=1,maxIterations=20,currentValue=tween?function(){return tween.cur();}:function(){return jQuery.css(elem,prop,"");},initial=currentValue(),unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),initialInUnit=(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit&&initialInUnit[3]!==unit){unit=unit||initialInUnit[3];valueParts=valueParts||[];initialInUnit=+initial||1;do{scale=scale||".5";initialInUnit=initialInUnit / scale;jQuery.style(elem,prop,initialInUnit+unit);}while(scale!==(scale=currentValue()/ initial)&&scale!==1&&--maxIterations);}
if(valueParts){initialInUnit=+initialInUnit||+initial||0;adjusted=valueParts[1]?initialInUnit+(valueParts[1]+1)*valueParts[2]:+valueParts[2];if(tween){tween.unit=unit;tween.start=initialInUnit;tween.end=adjusted;}}
return adjusted;}
var access=function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,length=elems.length,bulk=key==null;if(jQuery.type(key)==="object"){chainable=true;for(i in key){access(elems,fn,i,key[i],true,emptyGet,raw);}}else if(value!==undefined){chainable=true;if(!jQuery.isFunction(value)){raw=true;}
if(bulk){if(raw){fn.call(elems,value);fn=null;}else{bulk=fn;fn=function(elem,key,value){return bulk.call(jQuery(elem),value);};}}
if(fn){for(;i<length;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}
return chainable?elems:bulk?fn.call(elems):length?fn(elems[0],key):emptyGet;};var rcheckableType=(/^(?:checkbox|radio)$/i);var rtagName=(/<([\w:-]+)/);var rscriptType=(/^$|\/(?:java|ecma)script/i);var rleadingWhitespace=(/^\s+/);var nodeNames="abbr|article|aside|audio|bdi|canvas|data|datalist|"+"details|dialog|figcaption|figure|footer|header|hgroup|main|"+"mark|meter|nav|output|picture|progress|section|summary|template|time|video";function createSafeFragment(document){var list=nodeNames.split("|"),safeFrag=document.createDocumentFragment();if(safeFrag.createElement){while(list.length){safeFrag.createElement(list.pop());}}
return safeFrag;}
(function(){var div=document.createElement("div"),fragment=document.createDocumentFragment(),input=document.createElement("input");div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";support.leadingWhitespace=div.firstChild.nodeType===3;support.tbody=!div.getElementsByTagName("tbody").length;support.htmlSerialize=!!div.getElementsByTagName("link").length;support.html5Clone=document.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>";input.type="checkbox";input.checked=true;fragment.appendChild(input);support.appendChecked=input.checked;div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;fragment.appendChild(div);input=document.createElement("input");input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input);support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;support.noCloneEvent=!!div.addEventListener;div[jQuery.expando]=1;support.attributes=!div.getAttribute(jQuery.expando);})();var wrapMap={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;function getAll(context,tag){var elems,elem,i=0,found=typeof context.getElementsByTagName!=="undefined"?context.getElementsByTagName(tag||"*"):typeof context.querySelectorAll!=="undefined"?context.querySelectorAll(tag||"*"):undefined;if(!found){for(found=[],elems=context.childNodes||context;(elem=elems[i])!=null;i++){if(!tag||jQuery.nodeName(elem,tag)){found.push(elem);}else{jQuery.merge(found,getAll(elem,tag));}}}
return tag===undefined||tag&&jQuery.nodeName(context,tag)?jQuery.merge([context],found):found;}
function setGlobalEval(elems,refElements){var elem,i=0;for(;(elem=elems[i])!=null;i++){jQuery._data(elem,"globalEval",!refElements||jQuery._data(refElements[i],"globalEval"));}}
var rhtml=/<|&#?\w+;/,rtbody=/<tbody/i;function fixDefaultChecked(elem){if(rcheckableType.test(elem.type)){elem.defaultChecked=elem.checked;}}
function buildFragment(elems,context,scripts,selection,ignored){var j,elem,contains,tmp,tag,tbody,wrap,l=elems.length,safe=createSafeFragment(context),nodes=[],i=0;for(;i<l;i++){elem=elems[i];if(elem||elem===0){if(jQuery.type(elem)==="object"){jQuery.merge(nodes,elem.nodeType?[elem]:elem);}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));}else{tmp=tmp||safe.appendChild(context.createElement("div"));tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2];j=wrap[0];while(j--){tmp=tmp.lastChild;}
if(!support.leadingWhitespace&&rleadingWhitespace.test(elem)){nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));}
if(!support.tbody){elem=tag==="table"&&!rtbody.test(elem)?tmp.firstChild:wrap[1]==="<table>"&&!rtbody.test(elem)?tmp:0;j=elem&&elem.childNodes.length;while(j--){if(jQuery.nodeName((tbody=elem.childNodes[j]),"tbody")&&!tbody.childNodes.length){elem.removeChild(tbody);}}}
jQuery.merge(nodes,tmp.childNodes);tmp.textContent="";while(tmp.firstChild){tmp.removeChild(tmp.firstChild);}
tmp=safe.lastChild;}}}
if(tmp){safe.removeChild(tmp);}
if(!support.appendChecked){jQuery.grep(getAll(nodes,"input"),fixDefaultChecked);}
i=0;while((elem=nodes[i++])){if(selection&&jQuery.inArray(elem,selection)>-1){if(ignored){ignored.push(elem);}
continue;}
contains=jQuery.contains(elem.ownerDocument,elem);tmp=getAll(safe.appendChild(elem),"script");if(contains){setGlobalEval(tmp);}
if(scripts){j=0;while((elem=tmp[j++])){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}
tmp=null;return safe;}
(function(){var i,eventName,div=document.createElement("div");for(i in{submit:true,change:true,focusin:true}){eventName="on"+i;if(!(support[i]=eventName in window)){div.setAttribute(eventName,"t");support[i]=div.attributes[eventName].expando===false;}}
div=null;})();var rformElems=/^(?:input|select|textarea)$/i,rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,rtypenamespace=/^([^.]*)(?:\.(.+)|)/;function returnTrue(){return true;}
function returnFalse(){return false;}
function safeActiveElement(){try{return document.activeElement;}catch(err){}}
function on(elem,types,selector,data,fn,one){var origFn,type;if(typeof types==="object"){if(typeof selector!=="string"){data=data||selector;selector=undefined;}
for(type in types){on(elem,type,selector,data,types[type],one);}
return elem;}
if(data==null&&fn==null){fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){fn=data;data=undefined;}else{fn=data;data=selector;selector=undefined;}}
if(fn===false){fn=returnFalse;}else if(!fn){return elem;}
if(one===1){origFn=fn;fn=function(event){jQuery().off(event);return origFn.apply(this,arguments);};fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}
return elem.each(function(){jQuery.event.add(this,types,fn,data,selector);});}
jQuery.event={global:{},add:function(elem,types,handler,data,selector){var tmp,events,t,handleObjIn,special,eventHandle,handleObj,handlers,type,namespaces,origType,elemData=jQuery._data(elem);if(!elemData){return;}
if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}
if(!handler.guid){handler.guid=jQuery.guid++;}
if(!(events=elemData.events)){events=elemData.events={};}
if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){return typeof jQuery!=="undefined"&&(!e||jQuery.event.triggered!==e.type)?jQuery.event.dispatch.apply(eventHandle.elem,arguments):undefined;};eventHandle.elem=elem;}
types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;special=jQuery.event.special[type]||{};handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle,false);}else if(elem.attachEvent){elem.attachEvent("on"+type,eventHandle);}}}
if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}
if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}
jQuery.event.global[type]=true;}
elem=null;},remove:function(elem,types,handler,selector,mappedTypes){var j,handleObj,tmp,origCount,t,events,special,handlers,type,namespaces,origType,elemData=jQuery.hasData(elem)&&jQuery._data(elem);if(!elemData||!(events=elemData.events)){return;}
types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}
continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}
if(special.remove){special.remove.call(elem,handleObj);}}}
if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}
delete events[type];}}
if(jQuery.isEmptyObject(events)){delete elemData.handle;jQuery._removeData(elem,"events");}},trigger:function(event,data,elem,onlyHandlers){var handle,ontype,cur,bubbleType,special,tmp,i,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=tmp=elem=elem||document;if(elem.nodeType===3||elem.nodeType===8){return;}
if(rfocusMorph.test(type+jQuery.event.triggered)){return;}
if(type.indexOf(".")>-1){namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}
ontype=type.indexOf(":")<0&&"on"+type;event=event[jQuery.expando]?event:new jQuery.Event(type,typeof event==="object"&&event);event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.rnamespace=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;event.result=undefined;if(!event.target){event.target=elem;}
data=data==null?[event]:jQuery.makeArray(data,[event]);special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}
if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}
for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}
if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}}
i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type;handle=(jQuery._data(cur,"events")||{})[event.type]&&jQuery._data(cur,"handle");if(handle){handle.apply(cur,data);}
handle=ontype&&cur[ontype];if(handle&&handle.apply&&acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}
event.type=type;if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&acceptData(elem)){if(ontype&&elem[type]&&!jQuery.isWindow(elem)){tmp=elem[ontype];if(tmp){elem[ontype]=null;}
jQuery.event.triggered=type;try{elem[type]();}catch(e){}
jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}
return event.result;},dispatch:function(event){event=jQuery.event.fix(event);var i,j,ret,matched,handleObj,handlerQueue=[],args=slice.call(arguments),handlers=(jQuery._data(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};args[0]=event;event.delegateTarget=this;if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}
handlerQueue=jQuery.event.handlers.call(this,event,handlers);i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){if(!event.rnamespace||event.rnamespace.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}}
if(special.postDispatch){special.postDispatch.call(this,event);}
return event.result;},handlers:function(event,handlers){var i,matches,sel,handleObj,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;if(delegateCount&&cur.nodeType&&(event.type!=="click"||isNaN(event.button)||event.button<1)){for(;cur!=this;cur=cur.parentNode||this){if(cur.nodeType===1&&(cur.disabled!==true||event.type!=="click")){matches=[];for(i=0;i<delegateCount;i++){handleObj=handlers[i];sel=handleObj.selector+" ";if(matches[sel]===undefined){matches[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>-1:jQuery.find(sel,this,null,[cur]).length;}
if(matches[sel]){matches.push(handleObj);}}
if(matches.length){handlerQueue.push({elem:cur,handlers:matches});}}}}
if(delegateCount<handlers.length){handlerQueue.push({elem:this,handlers:handlers.slice(delegateCount)});}
return handlerQueue;},fix:function(event){if(event[jQuery.expando]){return event;}
var i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[type];if(!fixHook){this.fixHooks[type]=fixHook=rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{};}
copy=fixHook.props?this.props.concat(fixHook.props):this.props;event=new jQuery.Event(originalEvent);i=copy.length;while(i--){prop=copy[i];event[prop]=originalEvent[prop];}
if(!event.target){event.target=originalEvent.srcElement||document;}
if(event.target.nodeType===3){event.target=event.target.parentNode;}
event.metaKey=!!event.metaKey;return fixHook.filter?fixHook.filter(event,originalEvent):event;},props:("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase "+"metaKey relatedTarget shiftKey target timeStamp view which").split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(event,original){if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode;}
return event;}},mouseHooks:{props:("button buttons clientX clientY fromElement offsetX offsetY "+"pageX pageY screenX screenY toElement").split(" "),filter:function(event,original){var body,eventDoc,doc,button=original.button,fromElement=original.fromElement;if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;doc=eventDoc.documentElement;body=eventDoc.body;event.pageX=original.clientX+
(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-
(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=original.clientY+
(doc&&doc.scrollTop||body&&body.scrollTop||0)-
(doc&&doc.clientTop||body&&body.clientTop||0);}
if(!event.relatedTarget&&fromElement){event.relatedTarget=fromElement===event.target?original.toElement:fromElement;}
if(!event.which&&button!==undefined){event.which=(button&1?1:(button&2?3:(button&4?2:0)));}
return event;}},special:{load:{noBubble:true},focus:{trigger:function(){if(this!==safeActiveElement()&&this.focus){try{this.focus();return false;}catch(e){}}},delegateType:"focusin"},blur:{trigger:function(){if(this===safeActiveElement()&&this.blur){this.blur();return false;}},delegateType:"focusout"},click:{trigger:function(){if(jQuery.nodeName(this,"input")&&this.type==="checkbox"&&this.click){this.click();return false;}},_default:function(event){return jQuery.nodeName(event.target,"a");}},beforeunload:{postDispatch:function(event){if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}},simulate:function(type,elem,event){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true});jQuery.event.trigger(e,null,elem);if(e.isDefaultPrevented()){event.preventDefault();}}};jQuery.removeEvent=document.removeEventListener?function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle);}}:function(elem,type,handle){var name="on"+type;if(elem.detachEvent){if(typeof elem[name]==="undefined"){elem[name]=null;}
elem.detachEvent(name,handle);}};jQuery.Event=function(src,props){if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}
if(src&&src.type){this.originalEvent=src;this.type=src.type;this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&src.returnValue===false?returnTrue:returnFalse;}else{this.type=src;}
if(props){jQuery.extend(this,props);}
this.timeStamp=src&&src.timeStamp||jQuery.now();this[jQuery.expando]=true;};jQuery.Event.prototype={constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(!e){return;}
if(e.preventDefault){e.preventDefault();}else{e.returnValue=false;}},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(!e||this.isSimulated){return;}
if(e.stopPropagation){e.stopPropagation();}
e.cancelBubble=true;},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e&&e.stopImmediatePropagation){e.stopImmediatePropagation();}
this.stopPropagation();}};jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;if(!related||(related!==target&&!jQuery.contains(target,related))){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}
return ret;}};});if(!support.submit){jQuery.event.special.submit={setup:function(){if(jQuery.nodeName(this,"form")){return false;}
jQuery.event.add(this,"click._submit keypress._submit",function(e){var elem=e.target,form=jQuery.nodeName(elem,"input")||jQuery.nodeName(elem,"button")?jQuery.prop(elem,"form"):undefined;if(form&&!jQuery._data(form,"submit")){jQuery.event.add(form,"submit._submit",function(event){event._submitBubble=true;});jQuery._data(form,"submit",true);}});},postDispatch:function(event){if(event._submitBubble){delete event._submitBubble;if(this.parentNode&&!event.isTrigger){jQuery.event.simulate("submit",this.parentNode,event);}}},teardown:function(){if(jQuery.nodeName(this,"form")){return false;}
jQuery.event.remove(this,"._submit");}};}
if(!support.change){jQuery.event.special.change={setup:function(){if(rformElems.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){jQuery.event.add(this,"propertychange._change",function(event){if(event.originalEvent.propertyName==="checked"){this._justChanged=true;}});jQuery.event.add(this,"click._change",function(event){if(this._justChanged&&!event.isTrigger){this._justChanged=false;}
jQuery.event.simulate("change",this,event);});}
return false;}
jQuery.event.add(this,"beforeactivate._change",function(e){var elem=e.target;if(rformElems.test(elem.nodeName)&&!jQuery._data(elem,"change")){jQuery.event.add(elem,"change._change",function(event){if(this.parentNode&&!event.isSimulated&&!event.isTrigger){jQuery.event.simulate("change",this.parentNode,event);}});jQuery._data(elem,"change",true);}});},handle:function(event){var elem=event.target;if(this!==elem||event.isSimulated||event.isTrigger||(elem.type!=="radio"&&elem.type!=="checkbox")){return event.handleObj.handler.apply(this,arguments);}},teardown:function(){jQuery.event.remove(this,"._change");return!rformElems.test(this.nodeName);}};}
if(!support.focusin){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){var handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event));};jQuery.event.special[fix]={setup:function(){var doc=this.ownerDocument||this,attaches=jQuery._data(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}
jQuery._data(doc,fix,(attaches||0)+1);},teardown:function(){var doc=this.ownerDocument||this,attaches=jQuery._data(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,true);jQuery._removeData(doc,fix);}else{jQuery._data(doc,fix,attaches);}}};});}
jQuery.fn.extend({on:function(types,selector,data,fn){return on(this,types,selector,data,fn);},one:function(types,selector,data,fn){return on(this,types,selector,data,fn,1);},off:function(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}
if(typeof types==="object"){for(type in types){this.off(type,selector,types[type]);}
return this;}
if(selector===false||typeof selector==="function"){fn=selector;selector=undefined;}
if(fn===false){fn=returnFalse;}
return this.each(function(){jQuery.event.remove(this,types,fn,selector);});},trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});var rinlinejQuery=/ jQuery\d+="(?:null|\d+)"/g,rnoshimcache=new RegExp("<(?:"+nodeNames+")[\\s/>]","i"),rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,rnoInnerhtml=/<script|<style|<link/i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,safeFragment=createSafeFragment(document),fragmentDiv=safeFragment.appendChild(document.createElement("div"));function manipulationTarget(elem,content){return jQuery.nodeName(elem,"table")&&jQuery.nodeName(content.nodeType!==11?content:content.firstChild,"tr")?elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody")):elem;}
function disableScript(elem){elem.type=(jQuery.find.attr(elem,"type")!==null)+"/"+elem.type;return elem;}
function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1];}else{elem.removeAttribute("type");}
return elem;}
function cloneCopyEvent(src,dest){if(dest.nodeType!==1||!jQuery.hasData(src)){return;}
var type,i,l,oldData=jQuery._data(src),curData=jQuery._data(dest,oldData),events=oldData.events;if(events){delete curData.handle;curData.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}
if(curData.data){curData.data=jQuery.extend({},curData.data);}}
function fixCloneNodeIssues(src,dest){var nodeName,e,data;if(dest.nodeType!==1){return;}
nodeName=dest.nodeName.toLowerCase();if(!support.noCloneEvent&&dest[jQuery.expando]){data=jQuery._data(dest);for(e in data.events){jQuery.removeEvent(dest,e,data.handle);}
dest.removeAttribute(jQuery.expando);}
if(nodeName==="script"&&dest.text!==src.text){disableScript(dest).text=src.text;restoreScript(dest);}else if(nodeName==="object"){if(dest.parentNode){dest.outerHTML=src.outerHTML;}
if(support.html5Clone&&(src.innerHTML&&!jQuery.trim(dest.innerHTML))){dest.innerHTML=src.innerHTML;}}else if(nodeName==="input"&&rcheckableType.test(src.type)){dest.defaultChecked=dest.checked=src.checked;if(dest.value!==src.value){dest.value=src.value;}}else if(nodeName==="option"){dest.defaultSelected=dest.selected=src.defaultSelected;}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}
function domManip(collection,args,callback,ignored){args=concat.apply([],args);var first,node,hasScripts,scripts,doc,fragment,i=0,l=collection.length,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value);if(isFunction||(l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value))){return collection.each(function(index){var self=collection.eq(index);if(isFunction){args[0]=value.call(this,index,self.html());}
domManip(self,args,callback,ignored);});}
if(l){fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}
if(first||ignored){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);if(hasScripts){jQuery.merge(scripts,getAll(node,"script"));}}
callback.call(collection[i],node,i);}
if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;jQuery.map(scripts,restoreScript);for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!jQuery._data(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){if(jQuery._evalUrl){jQuery._evalUrl(node.src);}}else{jQuery.globalEval((node.text||node.textContent||node.innerHTML||"").replace(rcleanScript,""));}}}}
fragment=first=null;}}
return collection;}
function remove(elem,selector,keepData){var node,elems=selector?jQuery.filter(selector,elem):elem,i=0;for(;(node=elems[i])!=null;i++){if(!keepData&&node.nodeType===1){jQuery.cleanData(getAll(node));}
if(node.parentNode){if(keepData&&jQuery.contains(node.ownerDocument,node)){setGlobalEval(getAll(node,"script"));}
node.parentNode.removeChild(node);}}
return elem;}
jQuery.extend({htmlPrefilter:function(html){return html.replace(rxhtmlTag,"<$1></$2>");},clone:function(elem,dataAndEvents,deepDataAndEvents){var destElements,node,clone,i,srcElements,inPage=jQuery.contains(elem.ownerDocument,elem);if(support.html5Clone||jQuery.isXMLDoc(elem)||!rnoshimcache.test("<"+elem.nodeName+">")){clone=elem.cloneNode(true);}else{fragmentDiv.innerHTML=elem.outerHTML;fragmentDiv.removeChild(clone=fragmentDiv.firstChild);}
if((!support.noCloneEvent||!support.noCloneChecked)&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){destElements=getAll(clone);srcElements=getAll(elem);for(i=0;(node=srcElements[i])!=null;++i){if(destElements[i]){fixCloneNodeIssues(node,destElements[i]);}}}
if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0;(node=srcElements[i])!=null;i++){cloneCopyEvent(node,destElements[i]);}}else{cloneCopyEvent(elem,clone);}}
destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}
destElements=srcElements=node=null;return clone;},cleanData:function(elems,forceAcceptData){var elem,type,id,data,i=0,internalKey=jQuery.expando,cache=jQuery.cache,attributes=support.attributes,special=jQuery.event.special;for(;(elem=elems[i])!=null;i++){if(forceAcceptData||acceptData(elem)){id=elem[internalKey];data=id&&cache[id];if(data){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);}else{jQuery.removeEvent(elem,type,data.handle);}}}
if(cache[id]){delete cache[id];if(!attributes&&typeof elem.removeAttribute!=="undefined"){elem.removeAttribute(internalKey);}else{elem[internalKey]=undefined;}
deletedIds.push(id);}}}}}});jQuery.fn.extend({domManip:domManip,detach:function(selector){return remove(this,selector,true);},remove:function(selector){return remove(this,selector);},text:function(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(value));},null,value,arguments.length);},append:function(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},empty:function(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));}
while(elem.firstChild){elem.removeChild(elem.firstChild);}
if(elem.options&&jQuery.nodeName(elem,"select")){elem.options.length=0;}}
return this;},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined){return elem.nodeType===1?elem.innerHTML.replace(rinlinejQuery,""):undefined;}
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&(support.htmlSerialize||!rnoshimcache.test(value))&&(support.leadingWhitespace||!rleadingWhitespace.test(value))&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=jQuery.htmlPrefilter(value);try{for(;i<l;i++){elem=this[i]||{};if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}
elem=0;}catch(e){}}
if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function(){var ignored=[];return domManip(this,arguments,function(elem){var parent=this.parentNode;if(jQuery.inArray(this,ignored)<0){jQuery.cleanData(getAll(this));if(parent){parent.replaceChild(elem,this);}}},ignored);}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,i=0,ret=[],insert=jQuery(selector),last=insert.length-1;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);push.apply(ret,elems.get());}
return this.pushStack(ret);};});var iframe,elemdisplay={HTML:"block",BODY:"block"};function actualDisplay(name,doc){var elem=jQuery(doc.createElement(name)).appendTo(doc.body),display=jQuery.css(elem[0],"display");elem.detach();return display;}
function defaultDisplay(nodeName){var doc=document,display=elemdisplay[nodeName];if(!display){display=actualDisplay(nodeName,doc);if(display==="none"||!display){iframe=(iframe||jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);doc=(iframe[0].contentWindow||iframe[0].contentDocument).document;doc.write();doc.close();display=actualDisplay(nodeName,doc);iframe.detach();}
elemdisplay[nodeName]=display;}
return display;}
var rmargin=(/^margin/);var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var swap=function(elem,options,callback,args){var ret,name,old={};for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}
ret=callback.apply(elem,args||[]);for(name in options){elem.style[name]=old[name];}
return ret;};var documentElement=document.documentElement;(function(){var pixelPositionVal,pixelMarginRightVal,boxSizingReliableVal,reliableHiddenOffsetsVal,reliableMarginRightVal,reliableMarginLeftVal,container=document.createElement("div"),div=document.createElement("div");if(!div.style){return;}
div.style.cssText="float:left;opacity:.5";support.opacity=div.style.opacity==="0.5";support.cssFloat=!!div.style.cssFloat;div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";container=document.createElement("div");container.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;"+"padding:0;margin-top:1px;position:absolute";div.innerHTML="";container.appendChild(div);support.boxSizing=div.style.boxSizing===""||div.style.MozBoxSizing===""||div.style.WebkitBoxSizing==="";jQuery.extend(support,{reliableHiddenOffsets:function(){if(pixelPositionVal==null){computeStyleTests();}
return reliableHiddenOffsetsVal;},boxSizingReliable:function(){if(pixelPositionVal==null){computeStyleTests();}
return boxSizingReliableVal;},pixelMarginRight:function(){if(pixelPositionVal==null){computeStyleTests();}
return pixelMarginRightVal;},pixelPosition:function(){if(pixelPositionVal==null){computeStyleTests();}
return pixelPositionVal;},reliableMarginRight:function(){if(pixelPositionVal==null){computeStyleTests();}
return reliableMarginRightVal;},reliableMarginLeft:function(){if(pixelPositionVal==null){computeStyleTests();}
return reliableMarginLeftVal;}});function computeStyleTests(){var contents,divStyle,documentElement=document.documentElement;documentElement.appendChild(container);div.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;"+"position:relative;display:block;"+"margin:auto;border:1px;padding:1px;"+"top:1%;width:50%";pixelPositionVal=boxSizingReliableVal=reliableMarginLeftVal=false;pixelMarginRightVal=reliableMarginRightVal=true;if(window.getComputedStyle){divStyle=window.getComputedStyle(div);pixelPositionVal=(divStyle||{}).top!=="1%";reliableMarginLeftVal=(divStyle||{}).marginLeft==="2px";boxSizingReliableVal=(divStyle||{width:"4px"}).width==="4px";div.style.marginRight="50%";pixelMarginRightVal=(divStyle||{marginRight:"4px"}).marginRight==="4px";contents=div.appendChild(document.createElement("div"));contents.style.cssText=div.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;"+"box-sizing:content-box;display:block;margin:0;border:0;padding:0";contents.style.marginRight=contents.style.width="0";div.style.width="1px";reliableMarginRightVal=!parseFloat((window.getComputedStyle(contents)||{}).marginRight);div.removeChild(contents);}
div.style.display="none";reliableHiddenOffsetsVal=div.getClientRects().length===0;if(reliableHiddenOffsetsVal){div.style.display="";div.innerHTML="<table><tr><td></td><td>t</td></tr></table>";div.childNodes[0].style.borderCollapse="separate";contents=div.getElementsByTagName("td");contents[0].style.cssText="margin:0;border:0;padding:0;display:none";reliableHiddenOffsetsVal=contents[0].offsetHeight===0;if(reliableHiddenOffsetsVal){contents[0].style.display="";contents[1].style.display="none";reliableHiddenOffsetsVal=contents[0].offsetHeight===0;}}
documentElement.removeChild(container);}})();var getStyles,curCSS,rposition=/^(top|right|bottom|left)$/;if(window.getComputedStyle){getStyles=function(elem){var view=elem.ownerDocument.defaultView;if(!view||!view.opener){view=window;}
return view.getComputedStyle(elem);};curCSS=function(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed=computed||getStyles(elem);ret=computed?computed.getPropertyValue(name)||computed[name]:undefined;if((ret===""||ret===undefined)&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);}
if(computed){if(!support.pixelMarginRight()&&rnumnonpx.test(ret)&&rmargin.test(name)){width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}
return ret===undefined?ret:ret+"";};}else if(documentElement.currentStyle){getStyles=function(elem){return elem.currentStyle;};curCSS=function(elem,name,computed){var left,rs,rsLeft,ret,style=elem.style;computed=computed||getStyles(elem);ret=computed?computed[name]:undefined;if(ret==null&&style&&style[name]){ret=style[name];}
if(rnumnonpx.test(ret)&&!rposition.test(name)){left=style.left;rs=elem.runtimeStyle;rsLeft=rs&&rs.left;if(rsLeft){rs.left=elem.currentStyle.left;}
style.left=name==="fontSize"?"1em":ret;ret=style.pixelLeft+"px";style.left=left;if(rsLeft){rs.left=rsLeft;}}
return ret===undefined?ret:ret+""||"auto";};}
function addGetHookIf(conditionFn,hookFn){return{get:function(){if(conditionFn()){delete this.get;return;}
return(this.get=hookFn).apply(this,arguments);}};}
var
ralpha=/alpha\([^)]*\)/i,ropacity=/opacity\s*=\s*([^)]*)/i,rdisplayswap=/^(none|table(?!-c[ea]).+)/,rnumsplit=new RegExp("^("+pnum+")(.*)$","i"),cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","O","Moz","ms"],emptyStyle=document.createElement("div").style;function vendorPropName(name){if(name in emptyStyle){return name;}
var capName=name.charAt(0).toUpperCase()+name.slice(1),i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in emptyStyle){return name;}}}
function showHide(elements,show){var display,elem,hidden,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}
values[index]=jQuery._data(elem,"olddisplay");display=elem.style.display;if(show){if(!values[index]&&display==="none"){elem.style.display="";}
if(elem.style.display===""&&isHidden(elem)){values[index]=jQuery._data(elem,"olddisplay",defaultDisplay(elem.nodeName));}}else{hidden=isHidden(elem);if(display&&display!=="none"||!hidden){jQuery._data(elem,"olddisplay",hidden?display:jQuery.css(elem,"display"));}}}
for(index=0;index<length;index++){elem=elements[index];if(!elem.style){continue;}
if(!show||elem.style.display==="none"||elem.style.display===""){elem.style.display=show?values[index]||"":"none";}}
return elements;}
function setPositiveNumber(elem,value,subtract){var matches=rnumsplit.exec(value);return matches?Math.max(0,matches[1]-(subtract||0))+(matches[2]||"px"):value;}
function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i=extra===(isBorderBox?"border":"content")?4:name==="width"?1:0,val=0;for(;i<4;i+=2){if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles);}
if(isBorderBox){if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);}
if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else{val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}
return val;}
function getWidthOrHeight(elem,name,extra){var valueIsBorderBox=true,val=name==="width"?elem.offsetWidth:elem.offsetHeight,styles=getStyles(elem),isBorderBox=support.boxSizing&&jQuery.css(elem,"boxSizing",false,styles)==="border-box";if(val<=0||val==null){val=curCSS(elem,name,styles);if(val<0||val==null){val=elem.style[name];}
if(rnumnonpx.test(val)){return val;}
valueIsBorderBox=isBorderBox&&(support.boxSizingReliable()||val===elem.style[name]);val=parseFloat(val)||0;}
return(val+
augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles))+"px";}
jQuery.extend({cssHooks:{opacity:{get:function(elem,computed){if(computed){var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},cssNumber:{"animationIterationCount":true,"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},cssProps:{"float":support.cssFloat?"cssFloat":"styleFloat"},style:function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}
var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName);hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(value!==undefined){type=typeof value;if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){value=adjustCSS(elem,name,ret);type="number";}
if(value==null||value!==value){return;}
if(type==="number"){value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");}
if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";}
if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){try{style[name]=value;}catch(e){}}}else{if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}
return style[name];}},css:function(elem,name,extra,styles){var num,val,hooks,origName=jQuery.camelCase(name);name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName);hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}
if(val===undefined){val=curCSS(elem,name,styles);}
if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}
if(extra===""||extra){num=parseFloat(val);return extra===true||isFinite(num)?num||0:val;}
return val;}});jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function(elem,computed,extra){if(computed){return rdisplayswap.test(jQuery.css(elem,"display"))&&elem.offsetWidth===0?swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);}):getWidthOrHeight(elem,name,extra);}},set:function(elem,value,extra){var styles=extra&&getStyles(elem);return setPositiveNumber(elem,value,extra?augmentWidthOrHeight(elem,name,extra,support.boxSizing&&jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles):0);}};});if(!support.opacity){jQuery.cssHooks.opacity={get:function(elem,computed){return ropacity.test((computed&&elem.currentStyle?elem.currentStyle.filter:elem.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":computed?"1":"";},set:function(elem,value){var style=elem.style,currentStyle=elem.currentStyle,opacity=jQuery.isNumeric(value)?"alpha(opacity="+value*100+")":"",filter=currentStyle&&currentStyle.filter||style.filter||"";style.zoom=1;if((value>=1||value==="")&&jQuery.trim(filter.replace(ralpha,""))===""&&style.removeAttribute){style.removeAttribute("filter");if(value===""||currentStyle&&!currentStyle.filter){return;}}
style.filter=ralpha.test(filter)?filter.replace(ralpha,opacity):filter+" "+opacity;}};}
jQuery.cssHooks.marginRight=addGetHookIf(support.reliableMarginRight,function(elem,computed){if(computed){return swap(elem,{"display":"inline-block"},curCSS,[elem,"marginRight"]);}});jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,function(elem,computed){if(computed){return(parseFloat(curCSS(elem,"marginLeft"))||(jQuery.contains(elem.ownerDocument,elem)?elem.getBoundingClientRect().left-
swap(elem,{marginLeft:0},function(){return elem.getBoundingClientRect().left;}):0))+"px";}});jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){var i=0,expanded={},parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}
return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(jQuery.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}
return map;}
return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);},show:function(){return showHide(this,true);},hide:function(){return showHide(this);},toggle:function(state){if(typeof state==="boolean"){return state?this.show():this.hide();}
return this.each(function(){if(isHidden(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}
jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||jQuery.easing._default;this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}
this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}
if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}
return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function(tween){var result;if(tween.elem.nodeType!==1||tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){return tween.elem[tween.prop];}
result=jQuery.css(tween.elem,tween.prop,"");return!result||result==="auto"?0:result;},set:function(tween){if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.nodeType===1&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function(p){return p;},swing:function(p){return 0.5-Math.cos(p*Math.PI)/ 2;},_default:"swing"};jQuery.fx=Tween.prototype.init;jQuery.fx.step={};var
fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/;function createFxNow(){window.setTimeout(function(){fxNow=undefined;});return(fxNow=jQuery.now());}
function genFx(type,includeWidth){var which,attrs={height:type},i=0;includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}
if(includeWidth){attrs.opacity=attrs.width=type;}
return attrs;}
function createTween(value,prop,animation){var tween,collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if((tween=collection[index].call(animation,prop,value))){return tween;}}}
function defaultPrefilter(elem,props,opts){var prop,value,toggle,tween,hooks,oldfire,display,checkDisplay,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHidden(elem),dataShow=jQuery._data(elem,"fxshow");if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}
hooks.unqueued++;anim.always(function(){anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}
if(elem.nodeType===1&&("height"in props||"width"in props)){opts.overflow=[style.overflow,style.overflowX,style.overflowY];display=jQuery.css(elem,"display");checkDisplay=display==="none"?jQuery._data(elem,"olddisplay")||defaultDisplay(elem.nodeName):display;if(checkDisplay==="inline"&&jQuery.css(elem,"float")==="none"){if(!support.inlineBlockNeedsLayout||defaultDisplay(elem.nodeName)==="inline"){style.display="inline-block";}else{style.zoom=1;}}}
if(opts.overflow){style.overflow="hidden";if(!support.shrinkWrapBlocks()){anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}}
for(prop in props){value=props[prop];if(rfxtypes.exec(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;}else{continue;}}
orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);}else{display=undefined;}}
if(!jQuery.isEmptyObject(orig)){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden;}}else{dataShow=jQuery._data(elem,"fxshow",{});}
if(toggle){dataShow.hidden=!hidden;}
if(hidden){jQuery(elem).show();}else{anim.done(function(){jQuery(elem).hide();});}
anim.done(function(){var prop;jQuery._removeData(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});for(prop in orig){tween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=tween.start;if(hidden){tween.end=tween.start;tween.start=prop==="width"||prop==="height"?1:0;}}}}else if((display==="none"?defaultDisplay(elem.nodeName):display)==="inline"){style.display=display;}}
function propFilter(props,specialEasing){var index,name,easing,value,hooks;for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0];}
if(index!==name){props[name]=value;delete props[index];}
hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}
function Animation(elem,properties,options){var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){delete tick.elem;}),tick=function(){if(stopped){return false;}
var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),temp=remaining / animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}
deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}else{deferred.resolveWith(elem,[animation]);return false;}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function(gotoEnd){var index=0,length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}
stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}
if(gotoEnd){deferred.notifyWith(elem,[animation,1,0]);deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}
return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=Animation.prefilters[index].call(animation,elem,props,animation.opts);if(result){if(jQuery.isFunction(result.stop)){jQuery._queueHooks(animation.elem,animation.opts.queue).stop=jQuery.proxy(result.stop,result);}
return result;}}
jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}
jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);}
jQuery.Animation=jQuery.extend(Animation,{tweeners:{"*":[function(prop,value){var tween=this.createTween(prop,value);adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);return tween;}]},tweener:function(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"];}else{props=props.match(rnotwhite);}
var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];Animation.tweeners[prop]=Animation.tweeners[prop]||[];Animation.tweeners[prop].unshift(callback);}},prefilters:[defaultPrefilter],prefilter:function(callback,prepend){if(prepend){Animation.prefilters.unshift(callback);}else{Animation.prefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;if(opt.queue==null||opt.queue===true){opt.queue="fx";}
opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}
if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){return this.filter(isHidden).css("opacity",0).show().end().animate({opacity:to},speed,easing,callback);},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){var anim=Animation(this,jQuery.extend({},prop),optall);if(empty||jQuery._data(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}
if(clearQueue&&type!==false){this.queue(type||"fx",[]);}
return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=jQuery._data(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}
for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}
if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function(type){if(type!==false){type=type||"fx";}
return this.each(function(){var index,data=jQuery._data(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;data.finish=true;jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);}
for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}}
for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}}
delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,timers=jQuery.timers,i=0;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i];if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}
if(!timers.length){jQuery.fx.stop();}
fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);if(timer()){jQuery.fx.start();}else{jQuery.timers.pop();}};jQuery.fx.interval=13;jQuery.fx.start=function(){if(!timerId){timerId=window.setInterval(jQuery.fx.tick,jQuery.fx.interval);}};jQuery.fx.stop=function(){window.clearInterval(timerId);timerId=null;};jQuery.fx.speeds={slow:600,fast:200,_default:400};jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=window.setTimeout(next,time);hooks.stop=function(){window.clearTimeout(timeout);};});};(function(){var a,input=document.createElement("input"),div=document.createElement("div"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));div=document.createElement("div");div.setAttribute("className","t");div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";a=div.getElementsByTagName("a")[0];input.setAttribute("type","checkbox");div.appendChild(input);a=div.getElementsByTagName("a")[0];a.style.cssText="top:1px";support.getSetAttribute=div.className!=="t";support.style=/top/.test(a.getAttribute("style"));support.hrefNormalized=a.getAttribute("href")==="/a";support.checkOn=!!input.value;support.optSelected=opt.selected;support.enctype=!!document.createElement("form").enctype;select.disabled=true;support.optDisabled=!opt.disabled;input=document.createElement("input");input.setAttribute("value","");support.input=input.getAttribute("value")==="";input.value="t";input.setAttribute("type","radio");support.radioValue=input.value==="t";})();var rreturn=/\r/g,rspaces=/[\x20\t\r\n\f]+/g;jQuery.fn.extend({val:function(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}
ret=elem.value;return typeof ret==="string"?ret.replace(rreturn,""):ret==null?"":ret;}
return;}
isFunction=jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}
if(isFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;}
if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}
hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:jQuery.trim(jQuery.text(elem)).replace(rspaces," ");}},select:{get:function(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one"||index<0,values=one?null:[],max=one?index+1:options.length,i=index<0?max:one?index:0;for(;i<max;i++){option=options[i];if((option.selected||i===index)&&(support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){value=jQuery(option).val();if(one){return value;}
values.push(value);}}
return values;},set:function(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];if(jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1){try{option.selected=optionSet=true;}catch(_){option.scrollHeight;}}else{option.selected=false;}}
if(!optionSet){elem.selectedIndex=-1;}
return options;}}}});jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function(elem,value){if(jQuery.isArray(value)){return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1);}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}});var nodeHook,boolHook,attrHandle=jQuery.expr.attrHandle,ruseDefault=/^(?:checked|selected)$/i,getSetAttribute=support.getSetAttribute,getSetInput=support.input;jQuery.fn.extend({attr:function(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function(elem,name,value){var ret,hooks,nType=elem.nodeType;if(nType===3||nType===8||nType===2){return;}
if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value);}
if(nType!==1||!jQuery.isXMLDoc(elem)){name=name.toLowerCase();hooks=jQuery.attrHooks[name]||(jQuery.expr.match.bool.test(name)?boolHook:nodeHook);}
if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return;}
if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}
elem.setAttribute(name,value+"");return value;}
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}
ret=jQuery.find.attr(elem,name);return ret==null?undefined:ret;},attrHooks:{type:{set:function(elem,value){if(!support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}
return value;}}}},removeAttr:function(elem,value){var name,propName,i=0,attrNames=value&&value.match(rnotwhite);if(attrNames&&elem.nodeType===1){while((name=attrNames[i++])){propName=jQuery.propFix[name]||name;if(jQuery.expr.match.bool.test(name)){if(getSetInput&&getSetAttribute||!ruseDefault.test(name)){elem[propName]=false;}else{elem[jQuery.camelCase("default-"+name)]=elem[propName]=false;}}else{jQuery.attr(elem,name,"");}
elem.removeAttribute(getSetAttribute?name:propName);}}}});boolHook={set:function(elem,value,name){if(value===false){jQuery.removeAttr(elem,name);}else if(getSetInput&&getSetAttribute||!ruseDefault.test(name)){elem.setAttribute(!getSetAttribute&&jQuery.propFix[name]||name,name);}else{elem[jQuery.camelCase("default-"+name)]=elem[name]=true;}
return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;if(getSetInput&&getSetAttribute||!ruseDefault.test(name)){attrHandle[name]=function(elem,name,isXML){var ret,handle;if(!isXML){handle=attrHandle[name];attrHandle[name]=ret;ret=getter(elem,name,isXML)!=null?name.toLowerCase():null;attrHandle[name]=handle;}
return ret;};}else{attrHandle[name]=function(elem,name,isXML){if(!isXML){return elem[jQuery.camelCase("default-"+name)]?name.toLowerCase():null;}};}});if(!getSetInput||!getSetAttribute){jQuery.attrHooks.value={set:function(elem,value,name){if(jQuery.nodeName(elem,"input")){elem.defaultValue=value;}else{return nodeHook&&nodeHook.set(elem,value,name);}}};}
if(!getSetAttribute){nodeHook={set:function(elem,value,name){var ret=elem.getAttributeNode(name);if(!ret){elem.setAttributeNode((ret=elem.ownerDocument.createAttribute(name)));}
ret.value=value+="";if(name==="value"||value===elem.getAttribute(name)){return value;}}};attrHandle.id=attrHandle.name=attrHandle.coords=function(elem,name,isXML){var ret;if(!isXML){return(ret=elem.getAttributeNode(name))&&ret.value!==""?ret.value:null;}};jQuery.valHooks.button={get:function(elem,name){var ret=elem.getAttributeNode(name);if(ret&&ret.specified){return ret.value;}},set:nodeHook.set};jQuery.attrHooks.contenteditable={set:function(elem,value,name){nodeHook.set(elem,value===""?false:value,name);}};jQuery.each(["width","height"],function(i,name){jQuery.attrHooks[name]={set:function(elem,value){if(value===""){elem.setAttribute(name,"auto");return value;}}};});}
if(!support.style){jQuery.attrHooks.style={get:function(elem){return elem.style.cssText||undefined;},set:function(elem,value){return(elem.style.cssText=value+"");}};}
var rfocusable=/^(?:input|select|textarea|button|object)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function(name){name=jQuery.propFix[name]||name;return this.each(function(){try{this[name]=undefined;delete this[name];}catch(e){}});}});jQuery.extend({prop:function(elem,name,value){var ret,hooks,nType=elem.nodeType;if(nType===3||nType===8||nType===2){return;}
if(nType!==1||!jQuery.isXMLDoc(elem)){name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}
if(value!==undefined){if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}
return(elem[name]=value);}
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}
return elem[name];},propHooks:{tabIndex:{get:function(elem){var tabindex=jQuery.find.attr(elem,"tabindex");return tabindex?parseInt(tabindex,10):rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:-1;}}},propFix:{"for":"htmlFor","class":"className"}});if(!support.hrefNormalized){jQuery.each(["href","src"],function(i,name){jQuery.propHooks[name]={get:function(elem){return elem.getAttribute(name,4);}};});}
if(!support.optSelected){jQuery.propHooks.selected={get:function(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}
return null;},set:function(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}}};}
jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});if(!support.enctype){jQuery.propFix.enctype="encoding";}
var rclass=/[\t\r\n\f]/g;function getClass(elem){return jQuery.attr(elem,"class")||"";}
jQuery.fn.extend({addClass:function(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,getClass(this)));});}
if(typeof value==="string"&&value){classes=value.match(rnotwhite)||[];while((elem=this[i++])){curValue=getClass(elem);cur=elem.nodeType===1&&(" "+curValue+" ").replace(rclass," ");if(cur){j=0;while((clazz=classes[j++])){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}}
finalValue=jQuery.trim(cur);if(curValue!==finalValue){jQuery.attr(elem,"class",finalValue);}}}}
return this;},removeClass:function(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,getClass(this)));});}
if(!arguments.length){return this.attr("class","");}
if(typeof value==="string"&&value){classes=value.match(rnotwhite)||[];while((elem=this[i++])){curValue=getClass(elem);cur=elem.nodeType===1&&(" "+curValue+" ").replace(rclass," ");if(cur){j=0;while((clazz=classes[j++])){while(cur.indexOf(" "+clazz+" ")>-1){cur=cur.replace(" "+clazz+" "," ");}}
finalValue=jQuery.trim(cur);if(curValue!==finalValue){jQuery.attr(elem,"class",finalValue);}}}}
return this;},toggleClass:function(value,stateVal){var type=typeof value;if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value);}
if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal);});}
return this.each(function(){var className,i,self,classNames;if(type==="string"){i=0;self=jQuery(this);classNames=value.match(rnotwhite)||[];while((className=classNames[i++])){if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}}else if(value===undefined||type==="boolean"){className=getClass(this);if(className){jQuery._data(this,"__className__",className);}
jQuery.attr(this,"class",className||value===false?"":jQuery._data(this,"__className__")||"");}});},hasClass:function(selector){var className,elem,i=0;className=" "+selector+" ";while((elem=this[i++])){if(elem.nodeType===1&&(" "+getClass(elem)+" ").replace(rclass," ").indexOf(className)>-1){return true;}}
return false;}});jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});var location=window.location;var nonce=jQuery.now();var rquery=(/\?/);var rvalidtokens=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;jQuery.parseJSON=function(data){if(window.JSON&&window.JSON.parse){return window.JSON.parse(data+"");}
var requireNonComma,depth=null,str=jQuery.trim(data+"");return str&&!jQuery.trim(str.replace(rvalidtokens,function(token,comma,open,close){if(requireNonComma&&comma){depth=0;}
if(depth===0){return token;}
requireNonComma=open||comma;depth+=!close-!open;return"";}))?(Function("return "+str))():jQuery.error("Invalid JSON: "+data);};jQuery.parseXML=function(data){var xml,tmp;if(!data||typeof data!=="string"){return null;}
try{if(window.DOMParser){tmp=new window.DOMParser();xml=tmp.parseFromString(data,"text/xml");}else{xml=new window.ActiveXObject("Microsoft.XMLDOM");xml.async="false";xml.loadXML(data);}}catch(e){xml=undefined;}
if(!xml||!xml.documentElement||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}
return xml;};var
rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,rurl=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,prefilters={},transports={},allTypes="*/".concat("*"),ajaxLocation=location.href,ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase())||[];function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}
var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnotwhite)||[];if(jQuery.isFunction(func)){while((dataType=dataTypes[i++])){if(dataType.charAt(0)==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=(structure===transports);function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}
return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}
function ajaxExtend(target,src){var deep,key,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:(deep||(deep={})))[key]=src[key];}}
if(deep){jQuery.extend(true,target,deep);}
return target;}
function ajaxHandleResponses(s,jqXHR,responses){var firstDataType,ct,finalDataType,type,contents=s.contents,dataTypes=s.dataTypes;while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}}
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}
if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}
if(!firstDataType){firstDataType=type;}}
finalDataType=finalDataType||firstDataType;}
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}
return responses[finalDataType];}}
function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},dataTypes=s.dataTypes.slice();if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}
current=dataTypes.shift();while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;}
if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}
prev=current;current=dataTypes.shift();if(current){if(current==="*"){current=prev;}else if(prev!=="*"&&prev!==current){conv=converters[prev+" "+current]||converters["* "+current];if(!conv){for(conv2 in converters){tmp=conv2.split(" ");if(tmp[1]===current){conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){if(conv===true){conv=converters[conv2];}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}
break;}}}}
if(conv!==true){if(conv&&s["throws"]){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}
return{state:"success",data:response};}
jQuery.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ajaxLocation,type:"GET",isLocal:rlocalProtocol.test(ajaxLocParts[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":jQuery.parseJSON,"text xml":jQuery.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(target,settings){return settings?ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){if(typeof url==="object"){options=url;url=undefined;}
options=options||{};var
parts,i,cacheURL,responseHeadersString,timeoutTimer,fireGlobals,transport,responseHeaders,s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),statusCode=s.statusCode||{},requestHeaders={},requestHeadersNames={},state=0,strAbort="canceled",jqXHR={readyState:0,getResponseHeader:function(key){var match;if(state===2){if(!responseHeaders){responseHeaders={};while((match=rheaders.exec(responseHeadersString))){responseHeaders[match[1].toLowerCase()]=match[2];}}
match=responseHeaders[key.toLowerCase()];}
return match==null?null:match;},getAllResponseHeaders:function(){return state===2?responseHeadersString:null;},setRequestHeader:function(name,value){var lname=name.toLowerCase();if(!state){name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;requestHeaders[name]=value;}
return this;},overrideMimeType:function(type){if(!state){s.mimeType=type;}
return this;},statusCode:function(map){var code;if(map){if(state<2){for(code in map){statusCode[code]=[statusCode[code],map[code]];}}else{jqXHR.always(map[jqXHR.status]);}}
return this;},abort:function(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}
done(0,finalText);return this;}};deferred.promise(jqXHR).complete=completeDeferred.add;jqXHR.success=jqXHR.done;jqXHR.error=jqXHR.fail;s.url=((url||s.url||ajaxLocation)+"").replace(rhash,"").replace(rprotocol,ajaxLocParts[1]+"//");s.type=options.method||options.type||s.method||s.type;s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().match(rnotwhite)||[""];if(s.crossDomain==null){parts=rurl.exec(s.url.toLowerCase());s.crossDomain=!!(parts&&(parts[1]!==ajaxLocParts[1]||parts[2]!==ajaxLocParts[2]||(parts[3]||(parts[1]==="http:"?"80":"443"))!==(ajaxLocParts[3]||(ajaxLocParts[1]==="http:"?"80":"443"))));}
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);if(state===2){return jqXHR;}
fireGlobals=jQuery.event&&s.global;if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}
s.type=s.type.toUpperCase();s.hasContent=!rnoContent.test(s.type);cacheURL=s.url;if(!s.hasContent){if(s.data){cacheURL=(s.url+=(rquery.test(cacheURL)?"&":"?")+s.data);delete s.data;}
if(s.cache===false){s.url=rts.test(cacheURL)?cacheURL.replace(rts,"$1_="+nonce++):cacheURL+(rquery.test(cacheURL)?"&":"?")+"_="+nonce++;}}
if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}
if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}}
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+
(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){return jqXHR.abort();}
strAbort="abort";for(i in{success:1,error:1,complete:1}){jqXHR[i](s[i]);}
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}
if(state===2){return jqXHR;}
if(s.async&&s.timeout>0){timeoutTimer=window.setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}
try{state=1;transport.send(requestHeaders,done);}catch(e){if(state<2){done(-1,e);}else{throw e;}}}
function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;if(state===2){return;}
state=2;if(timeoutTimer){window.clearTimeout(timeoutTimer);}
transport=undefined;responseHeadersString=headers||"";jqXHR.readyState=status>0?4:0;isSuccess=status>=200&&status<300||status===304;if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}
response=ajaxConvert(s,response,jqXHR,isSuccess);if(isSuccess){if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}
modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}}
if(status===204||s.type==="HEAD"){statusText="nocontent";}else if(status===304){statusText="notmodified";}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}}
jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}
jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);}
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop");}}}
return jqXHR;},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;}
return jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url)&&url));};});jQuery._evalUrl=function(url){return jQuery.ajax({url:url,type:"GET",dataType:"script",cache:true,async:false,global:false,"throws":true});};jQuery.fn.extend({wrapAll:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i));});}
if(this[0]){var wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}
wrap.map(function(){var elem=this;while(elem.firstChild&&elem.firstChild.nodeType===1){elem=elem.firstChild;}
return elem;}).append(this);}
return this;},wrapInner:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}
return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes);}}).end();}});function getDisplay(elem){return elem.style&&elem.style.display||jQuery.css(elem,"display");}
function filterHidden(elem){if(!jQuery.contains(elem.ownerDocument||document,elem)){return true;}
while(elem&&elem.nodeType===1){if(getDisplay(elem)==="none"||elem.type==="hidden"){return true;}
elem=elem.parentNode;}
return false;}
jQuery.expr.filters.hidden=function(elem){return support.reliableHiddenOffsets()?(elem.offsetWidth<=0&&elem.offsetHeight<=0&&!elem.getClientRects().length):filterHidden(elem);};jQuery.expr.filters.visible=function(elem){return!jQuery.expr.filters.hidden(elem);};var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v);}else{buildParams(prefix+"["+(typeof v==="object"&&v!=null?i:"")+"]",v,traditional,add);}});}else if(!traditional&&jQuery.type(obj)==="object"){for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{add(prefix,obj);}}
jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,value){value=jQuery.isFunction(value)?value():(value==null?"":value);s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value);};if(traditional===undefined){traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional;}
if(jQuery.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){jQuery.each(a,function(){add(this.name,this.value);});}else{for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}
return s.join("&").replace(r20,"+");};jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type;return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}):{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});jQuery.ajaxSettings.xhr=window.ActiveXObject!==undefined?function(){if(this.isLocal){return createActiveXHR();}
if(document.documentMode>8){return createStandardXHR();}
return/^(get|post|head|put|delete|options)$/i.test(this.type)&&createStandardXHR()||createActiveXHR();}:createStandardXHR;var xhrId=0,xhrCallbacks={},xhrSupported=jQuery.ajaxSettings.xhr();if(window.attachEvent){window.attachEvent("onunload",function(){for(var key in xhrCallbacks){xhrCallbacks[key](undefined,true);}});}
support.cors=!!xhrSupported&&("withCredentials"in xhrSupported);xhrSupported=support.ajax=!!xhrSupported;if(xhrSupported){jQuery.ajaxTransport(function(options){if(!options.crossDomain||support.cors){var callback;return{send:function(headers,complete){var i,xhr=options.xhr(),id=++xhrId;xhr.open(options.type,options.url,options.async,options.username,options.password);if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}}
if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);}
if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}
for(i in headers){if(headers[i]!==undefined){xhr.setRequestHeader(i,headers[i]+"");}}
xhr.send((options.hasContent&&options.data)||null);callback=function(_,isAbort){var status,statusText,responses;if(callback&&(isAbort||xhr.readyState===4)){delete xhrCallbacks[id];callback=undefined;xhr.onreadystatechange=jQuery.noop;if(isAbort){if(xhr.readyState!==4){xhr.abort();}}else{responses={};status=xhr.status;if(typeof xhr.responseText==="string"){responses.text=xhr.responseText;}
try{statusText=xhr.statusText;}catch(e){statusText="";}
if(!status&&options.isLocal&&!options.crossDomain){status=responses.text?200:404;}else if(status===1223){status=204;}}}
if(responses){complete(status,statusText,responses,xhr.getAllResponseHeaders());}};if(!options.async){callback();}else if(xhr.readyState===4){window.setTimeout(callback);}else{xhr.onreadystatechange=xhrCallbacks[id]=callback;}},abort:function(){if(callback){callback(undefined,true);}}};}});}
function createStandardXHR(){try{return new window.XMLHttpRequest();}catch(e){}}
function createActiveXHR(){try{return new window.ActiveXObject("Microsoft.XMLHTTP");}catch(e){}}
jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, "+"application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(text){jQuery.globalEval(text);return text;}}});jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}
if(s.crossDomain){s.type="GET";s.global=false;}});jQuery.ajaxTransport("script",function(s){if(s.crossDomain){var script,head=document.head||jQuery("head")[0]||document.documentElement;return{send:function(_,callback){script=document.createElement("script");script.async=true;if(s.scriptCharset){script.charset=s.scriptCharset;}
script.src=s.url;script.onload=script.onreadystatechange=function(_,isAbort){if(isAbort||!script.readyState||/loaded|complete/.test(script.readyState)){script.onload=script.onreadystatechange=null;if(script.parentNode){script.parentNode.removeChild(script);}
script=null;if(!isAbort){callback(200,"success");}}};head.insertBefore(script,head.firstChild);},abort:function(){if(script){script.onload(undefined,true);}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(nonce++));this[callback]=true;return callback;}});jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&rjsonp.test(s.data)&&"data");if(jsonProp||s.dataTypes[0]==="jsonp"){callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;}
s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}
return responseContainer[0];};s.dataTypes[0]="json";overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};jqXHR.always(function(){if(overwritten===undefined){jQuery(window).removeProp(callbackName);}else{window[callbackName]=overwritten;}
if(s[callbackName]){s.jsonpCallback=originalSettings.jsonpCallback;oldCallbacks.push(callbackName);}
if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}
responseContainer=overwritten=undefined;});return"script";}});jQuery.parseHTML=function(data,context,keepScripts){if(!data||typeof data!=="string"){return null;}
if(typeof context==="boolean"){keepScripts=context;context=false;}
context=context||document;var parsed=rsingleTag.exec(data),scripts=!keepScripts&&[];if(parsed){return[context.createElement(parsed[1])];}
parsed=buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}
return jQuery.merge([],parsed.childNodes);};var _load=jQuery.fn.load;jQuery.fn.load=function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments);}
var selector,type,response,self=this,off=url.indexOf(" ");if(off>-1){selector=jQuery.trim(url.slice(off,url.length));url=url.slice(0,off);}
if(jQuery.isFunction(params)){callback=params;params=undefined;}else if(params&&typeof params==="object"){type="POST";}
if(self.length>0){jQuery.ajax({url:url,type:type||"GET",dataType:"html",data:params}).done(function(responseText){response=arguments;self.html(selector?jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):responseText);}).always(callback&&function(jqXHR,status){self.each(function(){callback.apply(this,response||[jqXHR.responseText,status,jqXHR]);});});}
return this;};jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9?elem.defaultView||elem.parentWindow:false;}
jQuery.offset={setOffset:function(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};if(position==="static"){elem.style.position="relative";}
curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&jQuery.inArray("auto",[curCSSTop,curCSSLeft])>-1;if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}
if(jQuery.isFunction(options)){options=options.call(elem,i,jQuery.extend({},curOffset));}
if(options.top!=null){props.top=(options.top-curOffset.top)+curTop;}
if(options.left!=null){props.left=(options.left-curOffset.left)+curLeft;}
if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({offset:function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}
var docElem,win,box={top:0,left:0},elem=this[0],doc=elem&&elem.ownerDocument;if(!doc){return;}
docElem=doc.documentElement;if(!jQuery.contains(docElem,elem)){return box;}
if(typeof elem.getBoundingClientRect!=="undefined"){box=elem.getBoundingClientRect();}
win=getWindow(doc);return{top:box.top+(win.pageYOffset||docElem.scrollTop)-(docElem.clientTop||0),left:box.left+(win.pageXOffset||docElem.scrollLeft)-(docElem.clientLeft||0)};},position:function(){if(!this[0]){return;}
var offsetParent,offset,parentOffset={top:0,left:0},elem=this[0];if(jQuery.css(elem,"position")==="fixed"){offset=elem.getBoundingClientRect();}else{offsetParent=this.offsetParent();offset=this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset();}
parentOffset.top+=jQuery.css(offsetParent[0],"borderTopWidth",true);parentOffset.left+=jQuery.css(offsetParent[0],"borderLeftWidth",true);}
return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent;while(offsetParent&&(!jQuery.nodeName(offsetParent,"html")&&jQuery.css(offsetParent,"position")==="static")){offsetParent=offsetParent.offsetParent;}
return offsetParent||documentElement;});}});jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top=/Y/.test(prop);jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?(prop in win)?win[prop]:win.document.documentElement[method]:elem[method];}
if(win){win.scrollTo(!top?val:jQuery(win).scrollLeft(),top?val:jQuery(win).scrollTop());}else{elem[method]=val;}},method,val,arguments.length,null);};});jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});});jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){return elem.document.documentElement["client"+name];}
if(elem.nodeType===9){doc=elem.documentElement;return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}
return value===undefined?jQuery.css(elem,type,extra):jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable,null);};});});jQuery.fn.extend({bind:function(types,data,fn){return this.on(types,null,data,fn);},unbind:function(types,fn){return this.off(types,null,fn);},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function(selector,types,fn){return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);}});jQuery.fn.size=function(){return this.length;};jQuery.fn.andSelf=jQuery.fn.addBack;if(typeof define==="function"&&define.amd){define("jquery",[],function(){return jQuery;});}
var
_jQuery=window.jQuery,_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}
if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}
return jQuery;};if(!noGlobal){window.jQuery=window.$=jQuery;}
return jQuery;}));
/*! jQuery UI - v1.12.1 - 2024-10-05
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/draggable.js, widgets/droppable.js, widgets/sortable.js, widgets/autocomplete.js, widgets/menu.js, widgets/mouse.js, effect.js, effects/effect-highlight.js, effects/effect-size.js, effects/effect-slide.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory);}else{factory(jQuery);}}(function($){$.ui=$.ui||{};var version=$.ui.version="1.12.1";
/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var widgetUuid=0;var widgetSlice=Array.prototype.slice;$.cleanData=(function(orig){return function(elems){var events,elem,i;for(i=0;(elem=elems[i])!=null;i++){try{events=$._data(elem,"events");if(events&&events.remove){$(elem).triggerHandler("remove");}}catch(e){}}
orig(elems);};})($.cleanData);$.widget=function(name,base,prototype){var existingConstructor,constructor,basePrototype;var proxiedPrototype={};var namespace=name.split(".")[0];name=name.split(".")[1];var fullName=namespace+"-"+name;if(!prototype){prototype=base;base=$.Widget;}
if($.isArray(prototype)){prototype=$.extend.apply(null,[{}].concat(prototype));}
$.expr[":"][fullName.toLowerCase()]=function(elem){return!!$.data(elem,fullName);};$[namespace]=$[namespace]||{};existingConstructor=$[namespace][name];constructor=$[namespace][name]=function(options,element){if(!this._createWidget){return new constructor(options,element);}
if(arguments.length){this._createWidget(options,element);}};$.extend(constructor,existingConstructor,{version:prototype.version,_proto:$.extend({},prototype),_childConstructors:[]});basePrototype=new base();basePrototype.options=$.widget.extend({},basePrototype.options);$.each(prototype,function(prop,value){if(!$.isFunction(value)){proxiedPrototype[prop]=value;return;}
proxiedPrototype[prop]=(function(){function _super(){return base.prototype[prop].apply(this,arguments);}
function _superApply(args){return base.prototype[prop].apply(this,args);}
return function(){var __super=this._super;var __superApply=this._superApply;var returnValue;this._super=_super;this._superApply=_superApply;returnValue=value.apply(this,arguments);this._super=__super;this._superApply=__superApply;return returnValue;};})();});constructor.prototype=$.widget.extend(basePrototype,{widgetEventPrefix:existingConstructor?(basePrototype.widgetEventPrefix||name):name},proxiedPrototype,{constructor:constructor,namespace:namespace,widgetName:name,widgetFullName:fullName});if(existingConstructor){$.each(existingConstructor._childConstructors,function(i,child){var childPrototype=child.prototype;$.widget(childPrototype.namespace+"."+childPrototype.widgetName,constructor,child._proto);});delete existingConstructor._childConstructors;}else{base._childConstructors.push(constructor);}
$.widget.bridge(name,constructor);return constructor;};$.widget.extend=function(target){var input=widgetSlice.call(arguments,1);var inputIndex=0;var inputLength=input.length;var key;var value;for(;inputIndex<inputLength;inputIndex++){for(key in input[inputIndex]){value=input[inputIndex][key];if(input[inputIndex].hasOwnProperty(key)&&value!==undefined){if($.isPlainObject(value)){target[key]=$.isPlainObject(target[key])?$.widget.extend({},target[key],value):$.widget.extend({},value);}else{target[key]=value;}}}}
return target;};$.widget.bridge=function(name,object){var fullName=object.prototype.widgetFullName||name;$.fn[name]=function(options){var isMethodCall=typeof options==="string";var args=widgetSlice.call(arguments,1);var returnValue=this;if(isMethodCall){if(!this.length&&options==="instance"){returnValue=undefined;}else{this.each(function(){var methodValue;var instance=$.data(this,fullName);if(options==="instance"){returnValue=instance;return false;}
if(!instance){return $.error("cannot call methods on "+name+" prior to initialization; "+"attempted to call method '"+options+"'");}
if(!$.isFunction(instance[options])||options.charAt(0)==="_"){return $.error("no such method '"+options+"' for "+name+" widget instance");}
methodValue=instance[options].apply(instance,args);if(methodValue!==instance&&methodValue!==undefined){returnValue=methodValue&&methodValue.jquery?returnValue.pushStack(methodValue.get()):methodValue;return false;}});}}else{if(args.length){options=$.widget.extend.apply(null,[options].concat(args));}
this.each(function(){var instance=$.data(this,fullName);if(instance){instance.option(options||{});if(instance._init){instance._init();}}else{$.data(this,fullName,new object(options,this));}});}
return returnValue;};};$.Widget=function(){};$.Widget._childConstructors=[];$.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:false,create:null},_createWidget:function(options,element){element=$(element||this.defaultElement||this)[0];this.element=$(element);this.uuid=widgetUuid++;this.eventNamespace="."+this.widgetName+this.uuid;this.bindings=$();this.hoverable=$();this.focusable=$();this.classesElementLookup={};if(element!==this){$.data(element,this.widgetFullName,this);this._on(true,this.element,{remove:function(event){if(event.target===element){this.destroy();}}});this.document=$(element.style?element.ownerDocument:element.document||element);this.window=$(this.document[0].defaultView||this.document[0].parentWindow);}
this.options=$.widget.extend({},this.options,this._getCreateOptions(),options);this._create();if(this.options.disabled){this._setOptionDisabled(this.options.disabled);}
this._trigger("create",null,this._getCreateEventData());this._init();},_getCreateOptions:function(){return{};},_getCreateEventData:$.noop,_create:$.noop,_init:$.noop,destroy:function(){var that=this;this._destroy();$.each(this.classesElementLookup,function(key,value){that._removeClass(value,key);});this.element.off(this.eventNamespace).removeData(this.widgetFullName);this.widget().off(this.eventNamespace).removeAttr("aria-disabled");this.bindings.off(this.eventNamespace);},_destroy:$.noop,widget:function(){return this.element;},option:function(key,value){var options=key;var parts;var curOption;var i;if(arguments.length===0){return $.widget.extend({},this.options);}
if(typeof key==="string"){options={};parts=key.split(".");key=parts.shift();if(parts.length){curOption=options[key]=$.widget.extend({},this.options[key]);for(i=0;i<parts.length-1;i++){curOption[parts[i]]=curOption[parts[i]]||{};curOption=curOption[parts[i]];}
key=parts.pop();if(arguments.length===1){return curOption[key]===undefined?null:curOption[key];}
curOption[key]=value;}else{if(arguments.length===1){return this.options[key]===undefined?null:this.options[key];}
options[key]=value;}}
this._setOptions(options);return this;},_setOptions:function(options){var key;for(key in options){this._setOption(key,options[key]);}
return this;},_setOption:function(key,value){if(key==="classes"){this._setOptionClasses(value);}
this.options[key]=value;if(key==="disabled"){this._setOptionDisabled(value);}
return this;},_setOptionClasses:function(value){var classKey,elements,currentElements;for(classKey in value){currentElements=this.classesElementLookup[classKey];if(value[classKey]===this.options.classes[classKey]||!currentElements||!currentElements.length){continue;}
elements=$(currentElements.get());this._removeClass(currentElements,classKey);elements.addClass(this._classes({element:elements,keys:classKey,classes:value,add:true}));}},_setOptionDisabled:function(value){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!value);if(value){this._removeClass(this.hoverable,null,"ui-state-hover");this._removeClass(this.focusable,null,"ui-state-focus");}},enable:function(){return this._setOptions({disabled:false});},disable:function(){return this._setOptions({disabled:true});},_classes:function(options){var full=[];var that=this;options=$.extend({element:this.element,classes:this.options.classes||{}},options);function processClassString(classes,checkOption){var current,i;for(i=0;i<classes.length;i++){current=that.classesElementLookup[classes[i]]||$();if(options.add){current=$($.unique(current.get().concat(options.element.get())));}else{current=$(current.not(options.element).get());}
that.classesElementLookup[classes[i]]=current;full.push(classes[i]);if(checkOption&&options.classes[classes[i]]){full.push(options.classes[classes[i]]);}}}
this._on(options.element,{"remove":"_untrackClassesElement"});if(options.keys){processClassString(options.keys.match(/\S+/g)||[],true);}
if(options.extra){processClassString(options.extra.match(/\S+/g)||[]);}
return full.join(" ");},_untrackClassesElement:function(event){var that=this;$.each(that.classesElementLookup,function(key,value){if($.inArray(event.target,value)!==-1){that.classesElementLookup[key]=$(value.not(event.target).get());}});},_removeClass:function(element,keys,extra){return this._toggleClass(element,keys,extra,false);},_addClass:function(element,keys,extra){return this._toggleClass(element,keys,extra,true);},_toggleClass:function(element,keys,extra,add){add=(typeof add==="boolean")?add:extra;var shift=(typeof element==="string"||element===null),options={extra:shift?keys:extra,keys:shift?element:keys,element:shift?this.element:element,add:add};options.element.toggleClass(this._classes(options),add);return this;},_on:function(suppressDisabledCheck,element,handlers){var delegateElement;var instance=this;if(typeof suppressDisabledCheck!=="boolean"){handlers=element;element=suppressDisabledCheck;suppressDisabledCheck=false;}
if(!handlers){handlers=element;element=this.element;delegateElement=this.widget();}else{element=delegateElement=$(element);this.bindings=this.bindings.add(element);}
$.each(handlers,function(event,handler){function handlerProxy(){if(!suppressDisabledCheck&&(instance.options.disabled===true||$(this).hasClass("ui-state-disabled"))){return;}
return(typeof handler==="string"?instance[handler]:handler).apply(instance,arguments);}
if(typeof handler!=="string"){handlerProxy.guid=handler.guid=handler.guid||handlerProxy.guid||$.guid++;}
var match=event.match(/^([\w:-]*)\s*(.*)$/);var eventName=match[1]+instance.eventNamespace;var selector=match[2];if(selector){delegateElement.on(eventName,selector,handlerProxy);}else{element.on(eventName,handlerProxy);}});},_off:function(element,eventName){eventName=(eventName||"").split(" ").join(this.eventNamespace+" ")+
this.eventNamespace;element.off(eventName).off(eventName);this.bindings=$(this.bindings.not(element).get());this.focusable=$(this.focusable.not(element).get());this.hoverable=$(this.hoverable.not(element).get());},_delay:function(handler,delay){function handlerProxy(){return(typeof handler==="string"?instance[handler]:handler).apply(instance,arguments);}
var instance=this;return setTimeout(handlerProxy,delay||0);},_hoverable:function(element){this.hoverable=this.hoverable.add(element);this._on(element,{mouseenter:function(event){this._addClass($(event.currentTarget),null,"ui-state-hover");},mouseleave:function(event){this._removeClass($(event.currentTarget),null,"ui-state-hover");}});},_focusable:function(element){this.focusable=this.focusable.add(element);this._on(element,{focusin:function(event){this._addClass($(event.currentTarget),null,"ui-state-focus");},focusout:function(event){this._removeClass($(event.currentTarget),null,"ui-state-focus");}});},_trigger:function(type,event,data){var prop,orig;var callback=this.options[type];data=data||{};event=$.Event(event);event.type=(type===this.widgetEventPrefix?type:this.widgetEventPrefix+type).toLowerCase();event.target=this.element[0];orig=event.originalEvent;if(orig){for(prop in orig){if(!(prop in event)){event[prop]=orig[prop];}}}
this.element.trigger(event,data);return!($.isFunction(callback)&&callback.apply(this.element[0],[event].concat(data))===false||event.isDefaultPrevented());}};$.each({show:"fadeIn",hide:"fadeOut"},function(method,defaultEffect){$.Widget.prototype["_"+method]=function(element,options,callback){if(typeof options==="string"){options={effect:options};}
var hasOptions;var effectName=!options?method:options===true||typeof options==="number"?defaultEffect:options.effect||defaultEffect;options=options||{};if(typeof options==="number"){options={duration:options};}
hasOptions=!$.isEmptyObject(options);options.complete=callback;if(options.delay){element.delay(options.delay);}
if(hasOptions&&$.effects&&$.effects.effect[effectName]){element[method](options);}else if(effectName!==method&&element[effectName]){element[effectName](options.duration,options.easing,callback);}else{element.queue(function(next){$(this)[method]();if(callback){callback.call(element[0]);}
next();});}};});var widget=$.widget;
/*!
 * jQuery UI Position 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
(function(){var cachedScrollbarWidth,max=Math.max,abs=Math.abs,rhorizontal=/left|center|right/,rvertical=/top|center|bottom/,roffset=/[\+\-]\d+(\.[\d]+)?%?/,rposition=/^\w+/,rpercent=/%$/,_position=$.fn.position;function getOffsets(offsets,width,height){return[parseFloat(offsets[0])*(rpercent.test(offsets[0])?width / 100:1),parseFloat(offsets[1])*(rpercent.test(offsets[1])?height / 100:1)];}
function parseCss(element,property){return parseInt($.css(element,property),10)||0;}
function getDimensions(elem){var raw=elem[0];if(raw.nodeType===9){return{width:elem.width(),height:elem.height(),offset:{top:0,left:0}};}
if($.isWindow(raw)){return{width:elem.width(),height:elem.height(),offset:{top:elem.scrollTop(),left:elem.scrollLeft()}};}
if(raw.preventDefault){return{width:0,height:0,offset:{top:raw.pageY,left:raw.pageX}};}
return{width:elem.outerWidth(),height:elem.outerHeight(),offset:elem.offset()};}
$.position={scrollbarWidth:function(){if(cachedScrollbarWidth!==undefined){return cachedScrollbarWidth;}
var w1,w2,div=$("<div "+"style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'>"+"<div style='height:100px;width:auto;'></div></div>"),innerDiv=div.children()[0];$("body").append(div);w1=innerDiv.offsetWidth;div.css("overflow","scroll");w2=innerDiv.offsetWidth;if(w1===w2){w2=div[0].clientWidth;}
div.remove();return(cachedScrollbarWidth=w1-w2);},getScrollInfo:function(within){var overflowX=within.isWindow||within.isDocument?"":within.element.css("overflow-x"),overflowY=within.isWindow||within.isDocument?"":within.element.css("overflow-y"),hasOverflowX=overflowX==="scroll"||(overflowX==="auto"&&within.width<within.element[0].scrollWidth),hasOverflowY=overflowY==="scroll"||(overflowY==="auto"&&within.height<within.element[0].scrollHeight);return{width:hasOverflowY?$.position.scrollbarWidth():0,height:hasOverflowX?$.position.scrollbarWidth():0};},getWithinInfo:function(element){var withinElement=$(element||window),isWindow=$.isWindow(withinElement[0]),isDocument=!!withinElement[0]&&withinElement[0].nodeType===9,hasOffset=!isWindow&&!isDocument;return{element:withinElement,isWindow:isWindow,isDocument:isDocument,offset:hasOffset?$(element).offset():{left:0,top:0},scrollLeft:withinElement.scrollLeft(),scrollTop:withinElement.scrollTop(),width:withinElement.outerWidth(),height:withinElement.outerHeight()};}};$.fn.position=function(options){if(!options||!options.of){return _position.apply(this,arguments);}
options=$.extend({},options);var atOffset,targetWidth,targetHeight,targetOffset,basePosition,dimensions,target=$(options.of),within=$.position.getWithinInfo(options.within),scrollInfo=$.position.getScrollInfo(within),collision=(options.collision||"flip").split(" "),offsets={};dimensions=getDimensions(target);if(target[0].preventDefault){options.at="left top";}
targetWidth=dimensions.width;targetHeight=dimensions.height;targetOffset=dimensions.offset;basePosition=$.extend({},targetOffset);$.each(["my","at"],function(){var pos=(options[this]||"").split(" "),horizontalOffset,verticalOffset;if(pos.length===1){pos=rhorizontal.test(pos[0])?pos.concat(["center"]):rvertical.test(pos[0])?["center"].concat(pos):["center","center"];}
pos[0]=rhorizontal.test(pos[0])?pos[0]:"center";pos[1]=rvertical.test(pos[1])?pos[1]:"center";horizontalOffset=roffset.exec(pos[0]);verticalOffset=roffset.exec(pos[1]);offsets[this]=[horizontalOffset?horizontalOffset[0]:0,verticalOffset?verticalOffset[0]:0];options[this]=[rposition.exec(pos[0])[0],rposition.exec(pos[1])[0]];});if(collision.length===1){collision[1]=collision[0];}
if(options.at[0]==="right"){basePosition.left+=targetWidth;}else if(options.at[0]==="center"){basePosition.left+=targetWidth / 2;}
if(options.at[1]==="bottom"){basePosition.top+=targetHeight;}else if(options.at[1]==="center"){basePosition.top+=targetHeight / 2;}
atOffset=getOffsets(offsets.at,targetWidth,targetHeight);basePosition.left+=atOffset[0];basePosition.top+=atOffset[1];return this.each(function(){var collisionPosition,using,elem=$(this),elemWidth=elem.outerWidth(),elemHeight=elem.outerHeight(),marginLeft=parseCss(this,"marginLeft"),marginTop=parseCss(this,"marginTop"),collisionWidth=elemWidth+marginLeft+parseCss(this,"marginRight")+
scrollInfo.width,collisionHeight=elemHeight+marginTop+parseCss(this,"marginBottom")+
scrollInfo.height,position=$.extend({},basePosition),myOffset=getOffsets(offsets.my,elem.outerWidth(),elem.outerHeight());if(options.my[0]==="right"){position.left-=elemWidth;}else if(options.my[0]==="center"){position.left-=elemWidth / 2;}
if(options.my[1]==="bottom"){position.top-=elemHeight;}else if(options.my[1]==="center"){position.top-=elemHeight / 2;}
position.left+=myOffset[0];position.top+=myOffset[1];collisionPosition={marginLeft:marginLeft,marginTop:marginTop};$.each(["left","top"],function(i,dir){if($.ui.position[collision[i]]){$.ui.position[collision[i]][dir](position,{targetWidth:targetWidth,targetHeight:targetHeight,elemWidth:elemWidth,elemHeight:elemHeight,collisionPosition:collisionPosition,collisionWidth:collisionWidth,collisionHeight:collisionHeight,offset:[atOffset[0]+myOffset[0],atOffset[1]+myOffset[1]],my:options.my,at:options.at,within:within,elem:elem});}});if(options.using){using=function(props){var left=targetOffset.left-position.left,right=left+targetWidth-elemWidth,top=targetOffset.top-position.top,bottom=top+targetHeight-elemHeight,feedback={target:{element:target,left:targetOffset.left,top:targetOffset.top,width:targetWidth,height:targetHeight},element:{element:elem,left:position.left,top:position.top,width:elemWidth,height:elemHeight},horizontal:right<0?"left":left>0?"right":"center",vertical:bottom<0?"top":top>0?"bottom":"middle"};if(targetWidth<elemWidth&&abs(left+right)<targetWidth){feedback.horizontal="center";}
if(targetHeight<elemHeight&&abs(top+bottom)<targetHeight){feedback.vertical="middle";}
if(max(abs(left),abs(right))>max(abs(top),abs(bottom))){feedback.important="horizontal";}else{feedback.important="vertical";}
options.using.call(this,props,feedback);};}
elem.offset($.extend(position,{using:using}));});};$.ui.position={fit:{left:function(position,data){var within=data.within,withinOffset=within.isWindow?within.scrollLeft:within.offset.left,outerWidth=within.width,collisionPosLeft=position.left-data.collisionPosition.marginLeft,overLeft=withinOffset-collisionPosLeft,overRight=collisionPosLeft+data.collisionWidth-outerWidth-withinOffset,newOverRight;if(data.collisionWidth>outerWidth){if(overLeft>0&&overRight<=0){newOverRight=position.left+overLeft+data.collisionWidth-outerWidth-
withinOffset;position.left+=overLeft-newOverRight;}else if(overRight>0&&overLeft<=0){position.left=withinOffset;}else{if(overLeft>overRight){position.left=withinOffset+outerWidth-data.collisionWidth;}else{position.left=withinOffset;}}}else if(overLeft>0){position.left+=overLeft;}else if(overRight>0){position.left-=overRight;}else{position.left=max(position.left-collisionPosLeft,position.left);}},top:function(position,data){var within=data.within,withinOffset=within.isWindow?within.scrollTop:within.offset.top,outerHeight=data.within.height,collisionPosTop=position.top-data.collisionPosition.marginTop,overTop=withinOffset-collisionPosTop,overBottom=collisionPosTop+data.collisionHeight-outerHeight-withinOffset,newOverBottom;if(data.collisionHeight>outerHeight){if(overTop>0&&overBottom<=0){newOverBottom=position.top+overTop+data.collisionHeight-outerHeight-
withinOffset;position.top+=overTop-newOverBottom;}else if(overBottom>0&&overTop<=0){position.top=withinOffset;}else{if(overTop>overBottom){position.top=withinOffset+outerHeight-data.collisionHeight;}else{position.top=withinOffset;}}}else if(overTop>0){position.top+=overTop;}else if(overBottom>0){position.top-=overBottom;}else{position.top=max(position.top-collisionPosTop,position.top);}}},flip:{left:function(position,data){var within=data.within,withinOffset=within.offset.left+within.scrollLeft,outerWidth=within.width,offsetLeft=within.isWindow?within.scrollLeft:within.offset.left,collisionPosLeft=position.left-data.collisionPosition.marginLeft,overLeft=collisionPosLeft-offsetLeft,overRight=collisionPosLeft+data.collisionWidth-outerWidth-offsetLeft,myOffset=data.my[0]==="left"?-data.elemWidth:data.my[0]==="right"?data.elemWidth:0,atOffset=data.at[0]==="left"?data.targetWidth:data.at[0]==="right"?-data.targetWidth:0,offset=-2*data.offset[0],newOverRight,newOverLeft;if(overLeft<0){newOverRight=position.left+myOffset+atOffset+offset+data.collisionWidth-
outerWidth-withinOffset;if(newOverRight<0||newOverRight<abs(overLeft)){position.left+=myOffset+atOffset+offset;}}else if(overRight>0){newOverLeft=position.left-data.collisionPosition.marginLeft+myOffset+
atOffset+offset-offsetLeft;if(newOverLeft>0||abs(newOverLeft)<overRight){position.left+=myOffset+atOffset+offset;}}},top:function(position,data){var within=data.within,withinOffset=within.offset.top+within.scrollTop,outerHeight=within.height,offsetTop=within.isWindow?within.scrollTop:within.offset.top,collisionPosTop=position.top-data.collisionPosition.marginTop,overTop=collisionPosTop-offsetTop,overBottom=collisionPosTop+data.collisionHeight-outerHeight-offsetTop,top=data.my[1]==="top",myOffset=top?-data.elemHeight:data.my[1]==="bottom"?data.elemHeight:0,atOffset=data.at[1]==="top"?data.targetHeight:data.at[1]==="bottom"?-data.targetHeight:0,offset=-2*data.offset[1],newOverTop,newOverBottom;if(overTop<0){newOverBottom=position.top+myOffset+atOffset+offset+data.collisionHeight-
outerHeight-withinOffset;if(newOverBottom<0||newOverBottom<abs(overTop)){position.top+=myOffset+atOffset+offset;}}else if(overBottom>0){newOverTop=position.top-data.collisionPosition.marginTop+myOffset+atOffset+
offset-offsetTop;if(newOverTop>0||abs(newOverTop)<overBottom){position.top+=myOffset+atOffset+offset;}}}},flipfit:{left:function(){$.ui.position.flip.left.apply(this,arguments);$.ui.position.fit.left.apply(this,arguments);},top:function(){$.ui.position.flip.top.apply(this,arguments);$.ui.position.fit.top.apply(this,arguments);}}};})();var position=$.ui.position;
/*!
 * jQuery UI :data 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var data=$.extend($.expr[":"],{data:$.expr.createPseudo?$.expr.createPseudo(function(dataName){return function(elem){return!!$.data(elem,dataName);};}):function(elem,i,match){return!!$.data(elem,match[3]);}});
/*!
 * jQuery UI Disable Selection 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var disableSelection=$.fn.extend({disableSelection:(function(){var eventType="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(eventType+".ui-disableSelection",function(event){event.preventDefault();});};})(),enableSelection:function(){return this.off(".ui-disableSelection");}});
/*!
 * jQuery UI Focusable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
$.ui.focusable=function(element,hasTabindex){var map,mapName,img,focusableIfVisible,fieldset,nodeName=element.nodeName.toLowerCase();if("area"===nodeName){map=element.parentNode;mapName=map.name;if(!element.href||!mapName||map.nodeName.toLowerCase()!=="map"){return false;}
img=$("img[usemap='#"+mapName+"']");return img.length>0&&img.is(":visible");}
if(/^(input|select|textarea|button|object)$/.test(nodeName)){focusableIfVisible=!element.disabled;if(focusableIfVisible){fieldset=$(element).closest("fieldset")[0];if(fieldset){focusableIfVisible=!fieldset.disabled;}}}else if("a"===nodeName){focusableIfVisible=element.href||hasTabindex;}else{focusableIfVisible=hasTabindex;}
return focusableIfVisible&&$(element).is(":visible")&&visible($(element));};function visible(element){var visibility=element.css("visibility");while(visibility==="inherit"){element=element.parent();visibility=element.css("visibility");}
return visibility!=="hidden";}
$.extend($.expr[":"],{focusable:function(element){return $.ui.focusable(element,$.attr(element,"tabindex")!=null);}});var focusable=$.ui.focusable;var form=$.fn.form=function(){return typeof this[0].form==="string"?this.closest("form"):$(this[0].form);};
/*!
 * jQuery UI Form Reset Mixin 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var formResetMixin=$.ui.formResetMixin={_formResetHandler:function(){var form=$(this);setTimeout(function(){var instances=form.data("ui-form-reset-instances");$.each(instances,function(){this.refresh();});});},_bindFormResetHandler:function(){this.form=this.element.form();if(!this.form.length){return;}
var instances=this.form.data("ui-form-reset-instances")||[];if(!instances.length){this.form.on("reset.ui-form-reset",this._formResetHandler);}
instances.push(this);this.form.data("ui-form-reset-instances",instances);},_unbindFormResetHandler:function(){if(!this.form.length){return;}
var instances=this.form.data("ui-form-reset-instances");instances.splice($.inArray(this,instances),1);if(instances.length){this.form.data("ui-form-reset-instances",instances);}else{this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset");}}};
/*!
 * jQuery UI Support for jQuery core 1.7.x 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
if($.fn.jquery.substring(0,3)==="1.7"){$.each(["Width","Height"],function(i,name){var side=name==="Width"?["Left","Right"]:["Top","Bottom"],type=name.toLowerCase(),orig={innerWidth:$.fn.innerWidth,innerHeight:$.fn.innerHeight,outerWidth:$.fn.outerWidth,outerHeight:$.fn.outerHeight};function reduce(elem,size,border,margin){$.each(side,function(){size-=parseFloat($.css(elem,"padding"+this))||0;if(border){size-=parseFloat($.css(elem,"border"+this+"Width"))||0;}
if(margin){size-=parseFloat($.css(elem,"margin"+this))||0;}});return size;}
$.fn["inner"+name]=function(size){if(size===undefined){return orig["inner"+name].call(this);}
return this.each(function(){$(this).css(type,reduce(this,size)+"px");});};$.fn["outer"+name]=function(size,margin){if(typeof size!=="number"){return orig["outer"+name].call(this,size);}
return this.each(function(){$(this).css(type,reduce(this,size,true,margin)+"px");});};});$.fn.addBack=function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));};};
/*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var keycode=$.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38};var escapeSelector=$.ui.escapeSelector=(function(){var selectorEscape=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
 return function( selector ) {
  return selector.replace( selectorEscape, "\\$1" );
 };
} )();


/*!
 * jQuery UI Labels 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: labels
//>>group: Core
//>>description: Find all the labels associated with a given input
//>>docs: http://api.jqueryui.com/labels/



var labels = $.fn.labels = function() {
 var ancestor, selector, id, labels, ancestors;

 // Check control.labels first
 if ( this[ 0 ].labels && this[ 0 ].labels.length ) {
  return this.pushStack( this[ 0 ].labels );
 }

 // Support: IE <= 11, FF <= 37, Android <= 2.3 only
 // Above browsers do not support control.labels. Everything below is to support them
 // as well as document fragments. control.labels does not work on document fragments
 labels = this.eq( 0 ).parents( "label" );

 // Look for the label based on the id
 id = this.attr( "id" );
 if ( id ) {

  // We don't search against the document in case the element
  // is disconnected from the DOM
  ancestor = this.eq( 0 ).parents().last();

  // Get a full set of top level ancestors
  ancestors = ancestor.add( ancestor.length ? ancestor.siblings() : this.siblings() );

  // Create a selector for the label based on the id
  selector = "label[for='" + $.ui.escapeSelector( id ) + "']";

  labels = labels.add( ancestors.find( selector ).addBack( selector ) );

 }

 // Return whatever we have found for labels
 return this.pushStack( labels );
};


/*!
 * jQuery UI Scroll Parent 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: scrollParent
//>>group: Core
//>>description: Get the closest ancestor element that is scrollable.
//>>docs: http://api.jqueryui.com/scrollParent/



var scrollParent = $.fn.scrollParent = function( includeHidden ) {
 var position = this.css( "position" ),
  excludeStaticParent = position === "absolute",
  overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
  scrollParent = this.parents().filter( function() {
   var parent = $( this );
   if ( excludeStaticParent && parent.css( "position" ) === "static" ) {
    return false;
   }
   return overflowRegex.test( parent.css( "overflow" ) + parent.css( "overflow-y" ) +
    parent.css( "overflow-x" ) );
  } ).eq( 0 );

 return position === "fixed" || !scrollParent.length ?
  $( this[ 0 ].ownerDocument || document ) :
  scrollParent;
};


/*!
 * jQuery UI Tabbable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: :tabbable Selector
//>>group: Core
//>>description: Selects elements which can be tabbed to.
//>>docs: http://api.jqueryui.com/tabbable-selector/



var tabbable = $.extend( $.expr[ ":" ], {
 tabbable: function( element ) {
  var tabIndex = $.attr( element, "tabindex" ),
   hasTabindex = tabIndex != null;
  return ( !hasTabindex || tabIndex >= 0 ) && $.ui.focusable( element, hasTabindex );
 }
} );


/*!
 * jQuery UI Unique ID 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: uniqueId
//>>group: Core
//>>description: Functions to generate and remove uniqueId's
//>>docs: http://api.jqueryui.com/uniqueId/



var uniqueId = $.fn.extend( {
 uniqueId: ( function() {
  var uuid = 0;

  return function() {
   return this.each( function() {
    if ( !this.id ) {
     this.id = "ui-id-" + ( ++uuid );
    }
   } );
  };
 } )(),

 removeUniqueId: function() {
  return this.each( function() {
   if ( /^ui-id-\d+$/.test( this.id ) ) {
    $( this ).removeAttr( "id" );
   }
  } );
 }
} );




// This file is deprecated
var ie = $.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );

/*!
 * jQuery UI Mouse 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Mouse
//>>group: Widgets
//>>description: Abstracts mouse-based interactions to assist in creating certain widgets.
//>>docs: http://api.jqueryui.com/mouse/



var mouseHandled = false;
$( document ).on( "mouseup", function() {
 mouseHandled = false;
} );

var widgetsMouse = $.widget( "ui.mouse", {
 version: "1.12.1",
 options: {
  cancel: "input, textarea, button, select, option",
  distance: 1,
  delay: 0
 },
 _mouseInit: function() {
  var that = this;

  this.element
   .on( "mousedown." + this.widgetName, function( event ) {
    return that._mouseDown( event );
   } )
   .on( "click." + this.widgetName, function( event ) {
    if ( true === $.data( event.target, that.widgetName + ".preventClickEvent" ) ) {
     $.removeData( event.target, that.widgetName + ".preventClickEvent" );
     event.stopImmediatePropagation();
     return false;
    }
   } );

  this.started = false;
 },

 // TODO: make sure destroying one instance of mouse doesn't mess with
 // other instances of mouse
 _mouseDestroy: function() {
  this.element.off( "." + this.widgetName );
  if ( this._mouseMoveDelegate ) {
   this.document
    .off( "mousemove." + this.widgetName, this._mouseMoveDelegate )
    .off( "mouseup." + this.widgetName, this._mouseUpDelegate );
  }
 },

 _mouseDown: function( event ) {

  // don't let more than one widget handle mouseStart
  if ( mouseHandled ) {
   return;
  }

  this._mouseMoved = false;

  // We may have missed mouseup (out of window)
  ( this._mouseStarted && this._mouseUp( event ) );

  this._mouseDownEvent = event;

  var that = this,
   btnIsLeft = ( event.which === 1 ),

   // event.target.nodeName works around a bug in IE 8 with
   // disabled inputs (#7620)
   elIsCancel = ( typeof this.options.cancel === "string" && event.target.nodeName ?
    $( event.target ).closest( this.options.cancel ).length : false );
  if ( !btnIsLeft || elIsCancel || !this._mouseCapture( event ) ) {
   return true;
  }

  this.mouseDelayMet = !this.options.delay;
  if ( !this.mouseDelayMet ) {
   this._mouseDelayTimer = setTimeout( function() {
    that.mouseDelayMet = true;
   }, this.options.delay );
  }

  if ( this._mouseDistanceMet( event ) && this._mouseDelayMet( event ) ) {
   this._mouseStarted = ( this._mouseStart( event ) !== false );
   if ( !this._mouseStarted ) {
    event.preventDefault();
    return true;
   }
  }

  // Click event may never have fired (Gecko & Opera)
  if ( true === $.data( event.target, this.widgetName + ".preventClickEvent" ) ) {
   $.removeData( event.target, this.widgetName + ".preventClickEvent" );
  }

  // These delegates are required to keep context
  this._mouseMoveDelegate = function( event ) {
   return that._mouseMove( event );
  };
  this._mouseUpDelegate = function( event ) {
   return that._mouseUp( event );
  };

  this.document
   .on( "mousemove." + this.widgetName, this._mouseMoveDelegate )
   .on( "mouseup." + this.widgetName, this._mouseUpDelegate );

  event.preventDefault();

  mouseHandled = true;
  return true;
 },

 _mouseMove: function( event ) {

  // Only check for mouseups outside the document if you've moved inside the document
  // at least once. This prevents the firing of mouseup in the case of IE<9, which will
  // fire a mousemove event if content is placed under the cursor. See #7778
  // Support: IE <9
  if ( this._mouseMoved ) {

   // IE mouseup check - mouseup happened when mouse was out of window
   if ( $.ui.ie && ( !document.documentMode || document.documentMode < 9 ) &&
     !event.button ) {
    return this._mouseUp( event );

   // Iframe mouseup check - mouseup occurred in another document
   } else if ( !event.which ) {

    // Support: Safari <=8 - 9
    // Safari sets which to 0 if you press any of the following keys
    // during a drag (#14461)
    if ( event.originalEvent.altKey || event.originalEvent.ctrlKey ||
      event.originalEvent.metaKey || event.originalEvent.shiftKey ) {
     this.ignoreMissingWhich = true;
    } else if ( !this.ignoreMissingWhich ) {
     return this._mouseUp( event );
    }
   }
  }

  if ( event.which || event.button ) {
   this._mouseMoved = true;
  }

  if ( this._mouseStarted ) {
   this._mouseDrag( event );
   return event.preventDefault();
  }

  if ( this._mouseDistanceMet( event ) && this._mouseDelayMet( event ) ) {
   this._mouseStarted =
    ( this._mouseStart( this._mouseDownEvent, event ) !== false );
   ( this._mouseStarted ? this._mouseDrag( event ) : this._mouseUp( event ) );
  }

  return !this._mouseStarted;
 },

 _mouseUp: function( event ) {
  this.document
   .off( "mousemove." + this.widgetName, this._mouseMoveDelegate )
   .off( "mouseup." + this.widgetName, this._mouseUpDelegate );

  if ( this._mouseStarted ) {
   this._mouseStarted = false;

   if ( event.target === this._mouseDownEvent.target ) {
    $.data( event.target, this.widgetName + ".preventClickEvent", true );
   }

   this._mouseStop( event );
  }

  if ( this._mouseDelayTimer ) {
   clearTimeout( this._mouseDelayTimer );
   delete this._mouseDelayTimer;
  }

  this.ignoreMissingWhich = false;
  mouseHandled = false;
  event.preventDefault();
 },

 _mouseDistanceMet: function( event ) {
  return ( Math.max(
    Math.abs( this._mouseDownEvent.pageX - event.pageX ),
    Math.abs( this._mouseDownEvent.pageY - event.pageY )
   ) >= this.options.distance
  );
 },

 _mouseDelayMet: function( /* event */ ) {
  return this.mouseDelayMet;
 },

 // These are placeholder methods, to be overriden by extending plugin
 _mouseStart: function( /* event */ ) {},
 _mouseDrag: function( /* event */ ) {},
 _mouseStop: function( /* event */ ) {},
 _mouseCapture: function( /* event */ ) { return true; }
} );




// $.ui.plugin is deprecated. Use $.widget() extensions instead.
var plugin = $.ui.plugin = {
 add: function( module, option, set ) {
  var i,
   proto = $.ui[ module ].prototype;
  for ( i in set ) {
   proto.plugins[ i ] = proto.plugins[ i ] || [];
   proto.plugins[ i ].push( [ option, set[ i ] ] );
  }
 },
 call: function( instance, name, args, allowDisconnected ) {
  var i,
   set = instance.plugins[ name ];

  if ( !set ) {
   return;
  }

  if ( !allowDisconnected && ( !instance.element[ 0 ].parentNode ||
    instance.element[ 0 ].parentNode.nodeType === 11 ) ) {
   return;
  }

  for ( i = 0; i < set.length; i++ ) {
   if ( instance.options[ set[ i ][ 0 ] ] ) {
    set[ i ][ 1 ].apply( instance.element, args );
   }
  }
 }
};



var safeActiveElement = $.ui.safeActiveElement = function( document ) {
 var activeElement;

 // Support: IE 9 only
 // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
 try {
  activeElement = document.activeElement;
 } catch ( error ) {
  activeElement = document.body;
 }

 // Support: IE 9 - 11 only
 // IE may return null instead of an element
 // Interestingly, this only seems to occur when NOT in an iframe
 if ( !activeElement ) {
  activeElement = document.body;
 }

 // Support: IE 11 only
 // IE11 returns a seemingly empty object in some cases when accessing
 // document.activeElement from an <iframe>
 if ( !activeElement.nodeName ) {
  activeElement = document.body;
 }

 return activeElement;
};



var safeBlur = $.ui.safeBlur = function( element ) {

 // Support: IE9 - 10 only
 // If the <body> is blurred, IE will switch windows, see #9420
 if ( element && element.nodeName.toLowerCase() !== "body" ) {
  $( element ).trigger( "blur" );
 }
};


/*!
 * jQuery UI Draggable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Draggable
//>>group: Interactions
//>>description: Enables dragging functionality for any element.
//>>docs: http://api.jqueryui.com/draggable/
//>>demos: http://jqueryui.com/draggable/
//>>css.structure: ../../themes/base/draggable.css



$.widget( "ui.draggable", $.ui.mouse, {
 version: "1.12.1",
 widgetEventPrefix: "drag",
 options: {
  addClasses: true,
  appendTo: "parent",
  axis: false,
  connectToSortable: false,
  containment: false,
  cursor: "auto",
  cursorAt: false,
  grid: false,
  handle: false,
  helper: "original",
  iframeFix: false,
  opacity: false,
  refreshPositions: false,
  revert: false,
  revertDuration: 500,
  scope: "default",
  scroll: true,
  scrollSensitivity: 20,
  scrollSpeed: 20,
  snap: false,
  snapMode: "both",
  snapTolerance: 20,
  stack: false,
  zIndex: false,

  // Callbacks
  drag: null,
  start: null,
  stop: null
 },
 _create: function() {

  if ( this.options.helper === "original" ) {
   this._setPositionRelative();
  }
  if ( this.options.addClasses ) {
   this._addClass( "ui-draggable" );
  }
  this._setHandleClassName();

  this._mouseInit();
 },

 _setOption: function( key, value ) {
  this._super( key, value );
  if ( key === "handle" ) {
   this._removeHandleClassName();
   this._setHandleClassName();
  }
 },

 _destroy: function() {
  if ( ( this.helper || this.element ).is( ".ui-draggable-dragging" ) ) {
   this.destroyOnClear = true;
   return;
  }
  this._removeHandleClassName();
  this._mouseDestroy();
 },

 _mouseCapture: function( event ) {
  var o = this.options;

  // Among others, prevent a drag on a resizable-handle
  if ( this.helper || o.disabled ||
    $( event.target ).closest( ".ui-resizable-handle" ).length > 0 ) {
   return false;
  }

  //Quit if we're not on a valid handle
  this.handle = this._getHandle( event );
  if ( !this.handle ) {
   return false;
  }

  this._blurActiveElement( event );

  this._blockFrames( o.iframeFix === true ? "iframe" : o.iframeFix );

  return true;

 },

 _blockFrames: function( selector ) {
  this.iframeBlocks = this.document.find( selector ).map( function() {
   var iframe = $( this );

   return $( "<div>" )
    .css( "position", "absolute" )
    .appendTo( iframe.parent() )
    .outerWidth( iframe.outerWidth() )
    .outerHeight( iframe.outerHeight() )
    .offset( iframe.offset() )[ 0 ];
  } );
 },

 _unblockFrames: function() {
  if ( this.iframeBlocks ) {
   this.iframeBlocks.remove();
   delete this.iframeBlocks;
  }
 },

 _blurActiveElement: function( event ) {
  var activeElement = $.ui.safeActiveElement( this.document[ 0 ] ),
   target = $( event.target );

  // Don't blur if the event occurred on an element that is within
  // the currently focused element
  // See #10527, #12472
  if ( target.closest( activeElement ).length ) {
   return;
  }

  // Blur any element that currently has focus, see #4261
  $.ui.safeBlur( activeElement );
 },

 _mouseStart: function( event ) {

  var o = this.options;

  //Create and append the visible helper
  this.helper = this._createHelper( event );

  this._addClass( this.helper, "ui-draggable-dragging" );

  //Cache the helper size
  this._cacheHelperProportions();

  //If ddmanager is used for droppables, set the global draggable
  if ( $.ui.ddmanager ) {
   $.ui.ddmanager.current = this;
  }

  /*
   * - Position generation -
   * This block generates everything position related - it's the core of draggables.
   */

  //Cache the margins of the original element
  this._cacheMargins();

  //Store the helper's css position
  this.cssPosition = this.helper.css( "position" );
  this.scrollParent = this.helper.scrollParent( true );
  this.offsetParent = this.helper.offsetParent();
  this.hasFixedAncestor = this.helper.parents().filter( function() {
    return $( this ).css( "position" ) === "fixed";
   } ).length > 0;

  //The element's absolute position on the page minus margins
  this.positionAbs = this.element.offset();
  this._refreshOffsets( event );

  //Generate the original position
  this.originalPosition = this.position = this._generatePosition( event, false );
  this.originalPageX = event.pageX;
  this.originalPageY = event.pageY;

  //Adjust the mouse offset relative to the helper if "cursorAt" is supplied
  ( o.cursorAt && this._adjustOffsetFromHelper( o.cursorAt ) );

  //Set a containment if given in the options
  this._setContainment();

  //Trigger event + callbacks
  if ( this._trigger( "start", event ) === false ) {
   this._clear();
   return false;
  }

  //Recache the helper size
  this._cacheHelperProportions();

  //Prepare the droppable offsets
  if ( $.ui.ddmanager && !o.dropBehaviour ) {
   $.ui.ddmanager.prepareOffsets( this, event );
  }

  // Execute the drag once - this causes the helper not to be visible before getting its
  // correct position
  this._mouseDrag( event, true );

  // If the ddmanager is used for droppables, inform the manager that dragging has started
  // (see #5003)
  if ( $.ui.ddmanager ) {
   $.ui.ddmanager.dragStart( this, event );
  }

  return true;
 },

 _refreshOffsets: function( event ) {
  this.offset = {
   top: this.positionAbs.top - this.margins.top,
   left: this.positionAbs.left - this.margins.left,
   scroll: false,
   parent: this._getParentOffset(),
   relative: this._getRelativeOffset()
  };

  this.offset.click = {
   left: event.pageX - this.offset.left,
   top: event.pageY - this.offset.top
  };
 },

 _mouseDrag: function( event, noPropagation ) {

  // reset any necessary cached properties (see #5009)
  if ( this.hasFixedAncestor ) {
   this.offset.parent = this._getParentOffset();
  }

  //Compute the helpers position
  this.position = this._generatePosition( event, true );
  this.positionAbs = this._convertPositionTo( "absolute" );

  //Call plugins and callbacks and use the resulting position if something is returned
  if ( !noPropagation ) {
   var ui = this._uiHash();
   if ( this._trigger( "drag", event, ui ) === false ) {
    this._mouseUp( new $.Event( "mouseup", event ) );
    return false;
   }
   this.position = ui.position;
  }

  this.helper[ 0 ].style.left = this.position.left + "px";
  this.helper[ 0 ].style.top = this.position.top + "px";

  if ( $.ui.ddmanager ) {
   $.ui.ddmanager.drag( this, event );
  }

  return false;
 },

 _mouseStop: function( event ) {

  //If we are using droppables, inform the manager about the drop
  var that = this,
   dropped = false;
  if ( $.ui.ddmanager && !this.options.dropBehaviour ) {
   dropped = $.ui.ddmanager.drop( this, event );
  }

  //if a drop comes from outside (a sortable)
  if ( this.dropped ) {
   dropped = this.dropped;
   this.dropped = false;
  }

  if ( ( this.options.revert === "invalid" && !dropped ) ||
    ( this.options.revert === "valid" && dropped ) ||
    this.options.revert === true || ( $.isFunction( this.options.revert ) &&
    this.options.revert.call( this.element, dropped ) )
  ) {
   $( this.helper ).animate(
    this.originalPosition,
    parseInt( this.options.revertDuration, 10 ),
    function() {
     if ( that._trigger( "stop", event ) !== false ) {
      that._clear();
     }
    }
   );
  } else {
   if ( this._trigger( "stop", event ) !== false ) {
    this._clear();
   }
  }

  return false;
 },

 _mouseUp: function( event ) {
  this._unblockFrames();

  // If the ddmanager is used for droppables, inform the manager that dragging has stopped
  // (see #5003)
  if ( $.ui.ddmanager ) {
   $.ui.ddmanager.dragStop( this, event );
  }

  // Only need to focus if the event occurred on the draggable itself, see #10527
  if ( this.handleElement.is( event.target ) ) {

   // The interaction is over; whether or not the click resulted in a drag,
   // focus the element
   this.element.trigger( "focus" );
  }

  return $.ui.mouse.prototype._mouseUp.call( this, event );
 },

 cancel: function() {

  if ( this.helper.is( ".ui-draggable-dragging" ) ) {
   this._mouseUp( new $.Event( "mouseup", { target: this.element[ 0 ] } ) );
  } else {
   this._clear();
  }

  return this;

 },

 _getHandle: function( event ) {
  return this.options.handle ?
   !!$( event.target ).closest( this.element.find( this.options.handle ) ).length :
   true;
 },

 _setHandleClassName: function() {
  this.handleElement = this.options.handle ?
   this.element.find( this.options.handle ) : this.element;
  this._addClass( this.handleElement, "ui-draggable-handle" );
 },

 _removeHandleClassName: function() {
  this._removeClass( this.handleElement, "ui-draggable-handle" );
 },

 _createHelper: function( event ) {

  var o = this.options,
   helperIsFunction = $.isFunction( o.helper ),
   helper = helperIsFunction ?
    $( o.helper.apply( this.element[ 0 ], [ event ] ) ) :
    ( o.helper === "clone" ?
     this.element.clone().removeAttr( "id" ) :
     this.element );

  if ( !helper.parents( "body" ).length ) {
   helper.appendTo( ( o.appendTo === "parent" ?
    this.element[ 0 ].parentNode :
    o.appendTo ) );
  }

  // Http://bugs.jqueryui.com/ticket/9446
  // a helper function can return the original element
  // which wouldn't have been set to relative in _create
  if ( helperIsFunction && helper[ 0 ] === this.element[ 0 ] ) {
   this._setPositionRelative();
  }

  if ( helper[ 0 ] !== this.element[ 0 ] &&
    !( /(fixed|absolute)/ ).test( helper.css( "position" ) ) ) {
   helper.css( "position", "absolute" );
  }

  return helper;

 },

 _setPositionRelative: function() {
  if ( !( /^(?:r|a|f)/ ).test( this.element.css( "position" ) ) ) {
   this.element[ 0 ].style.position = "relative";
  }
 },

 _adjustOffsetFromHelper: function( obj ) {
  if ( typeof obj === "string" ) {
   obj = obj.split( " " );
  }
  if ( $.isArray( obj ) ) {
   obj = { left: +obj[ 0 ], top: +obj[ 1 ] || 0 };
  }
  if ( "left" in obj ) {
   this.offset.click.left = obj.left + this.margins.left;
  }
  if ( "right" in obj ) {
   this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
  }
  if ( "top" in obj ) {
   this.offset.click.top = obj.top + this.margins.top;
  }
  if ( "bottom" in obj ) {
   this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
  }
 },

 _isRootNode: function( element ) {
  return ( /(html|body)/i ).test( element.tagName ) || element === this.document[ 0 ];
 },

 _getParentOffset: function() {

  //Get the offsetParent and cache its position
  var po = this.offsetParent.offset(),
   document = this.document[ 0 ];

  // This is a special case where we need to modify a offset calculated on start, since the
  // following happened:
  // 1. The position of the helper is absolute, so it's position is calculated based on the
  // next positioned parent
  // 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't
  // the document, which means that the scroll is included in the initial calculation of the
  // offset of the parent, and never recalculated upon drag
  if ( this.cssPosition === "absolute" && this.scrollParent[ 0 ] !== document &&
    $.contains( this.scrollParent[ 0 ], this.offsetParent[ 0 ] ) ) {
   po.left += this.scrollParent.scrollLeft();
   po.top += this.scrollParent.scrollTop();
  }

  if ( this._isRootNode( this.offsetParent[ 0 ] ) ) {
   po = { top: 0, left: 0 };
  }

  return {
   top: po.top + ( parseInt( this.offsetParent.css( "borderTopWidth" ), 10 ) || 0 ),
   left: po.left + ( parseInt( this.offsetParent.css( "borderLeftWidth" ), 10 ) || 0 )
  };

 },

 _getRelativeOffset: function() {
  if ( this.cssPosition !== "relative" ) {
   return { top: 0, left: 0 };
  }

  var p = this.element.position(),
   scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] );

  return {
   top: p.top - ( parseInt( this.helper.css( "top" ), 10 ) || 0 ) +
    ( !scrollIsRootNode ? this.scrollParent.scrollTop() : 0 ),
   left: p.left - ( parseInt( this.helper.css( "left" ), 10 ) || 0 ) +
    ( !scrollIsRootNode ? this.scrollParent.scrollLeft() : 0 )
  };

 },

 _cacheMargins: function() {
  this.margins = {
   left: ( parseInt( this.element.css( "marginLeft" ), 10 ) || 0 ),
   top: ( parseInt( this.element.css( "marginTop" ), 10 ) || 0 ),
   right: ( parseInt( this.element.css( "marginRight" ), 10 ) || 0 ),
   bottom: ( parseInt( this.element.css( "marginBottom" ), 10 ) || 0 )
  };
 },

 _cacheHelperProportions: function() {
  this.helperProportions = {
   width: this.helper.outerWidth(),
   height: this.helper.outerHeight()
  };
 },

 _setContainment: function() {

  var isUserScrollable, c, ce,
   o = this.options,
   document = this.document[ 0 ];

  this.relativeContainer = null;

  if ( !o.containment ) {
   this.containment = null;
   return;
  }

  if ( o.containment === "window" ) {
   this.containment = [
    $( window ).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
    $( window ).scrollTop() - this.offset.relative.top - this.offset.parent.top,
    $( window ).scrollLeft() + $( window ).width() -
     this.helperProportions.width - this.margins.left,
    $( window ).scrollTop() +
     ( $( window ).height() || document.body.parentNode.scrollHeight ) -
     this.helperProportions.height - this.margins.top
   ];
   return;
  }

  if ( o.containment === "document" ) {
   this.containment = [
    0,
    0,
    $( document ).width() - this.helperProportions.width - this.margins.left,
    ( $( document ).height() || document.body.parentNode.scrollHeight ) -
     this.helperProportions.height - this.margins.top
   ];
   return;
  }

  if ( o.containment.constructor === Array ) {
   this.containment = o.containment;
   return;
  }

  if ( o.containment === "parent" ) {
   o.containment = this.helper[ 0 ].parentNode;
  }

  c = $( o.containment );
  ce = c[ 0 ];

  if ( !ce ) {
   return;
  }

  isUserScrollable = /(scroll|auto)/.test( c.css( "overflow" ) );

  this.containment = [
   ( parseInt( c.css( "borderLeftWidth" ), 10 ) || 0 ) +
    ( parseInt( c.css( "paddingLeft" ), 10 ) || 0 ),
   ( parseInt( c.css( "borderTopWidth" ), 10 ) || 0 ) +
    ( parseInt( c.css( "paddingTop" ), 10 ) || 0 ),
   ( isUserScrollable ? Math.max( ce.scrollWidth, ce.offsetWidth ) : ce.offsetWidth ) -
    ( parseInt( c.css( "borderRightWidth" ), 10 ) || 0 ) -
    ( parseInt( c.css( "paddingRight" ), 10 ) || 0 ) -
    this.helperProportions.width -
    this.margins.left -
    this.margins.right,
   ( isUserScrollable ? Math.max( ce.scrollHeight, ce.offsetHeight ) : ce.offsetHeight ) -
    ( parseInt( c.css( "borderBottomWidth" ), 10 ) || 0 ) -
    ( parseInt( c.css( "paddingBottom" ), 10 ) || 0 ) -
    this.helperProportions.height -
    this.margins.top -
    this.margins.bottom
  ];
  this.relativeContainer = c;
 },

 _convertPositionTo: function( d, pos ) {

  if ( !pos ) {
   pos = this.position;
  }

  var mod = d === "absolute" ? 1 : -1,
   scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] );

  return {
   top: (

    // The absolute mouse position
    pos.top +

    // Only for relative positioned nodes: Relative offset from element to offset parent
    this.offset.relative.top * mod +

    // The offsetParent's offset without borders (offset + border)
    this.offset.parent.top * mod -
    ( ( this.cssPosition === "fixed" ?
     -this.offset.scroll.top :
     ( scrollIsRootNode ? 0 : this.offset.scroll.top ) ) * mod )
   ),
   left: (

    // The absolute mouse position
    pos.left +

    // Only for relative positioned nodes: Relative offset from element to offset parent
    this.offset.relative.left * mod +

    // The offsetParent's offset without borders (offset + border)
    this.offset.parent.left * mod -
    ( ( this.cssPosition === "fixed" ?
     -this.offset.scroll.left :
     ( scrollIsRootNode ? 0 : this.offset.scroll.left ) ) * mod )
   )
  };

 },

 _generatePosition: function( event, constrainPosition ) {

  var containment, co, top, left,
   o = this.options,
   scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] ),
   pageX = event.pageX,
   pageY = event.pageY;

  // Cache the scroll
  if ( !scrollIsRootNode || !this.offset.scroll ) {
   this.offset.scroll = {
    top: this.scrollParent.scrollTop(),
    left: this.scrollParent.scrollLeft()
   };
  }

  /*
   * - Position constraining -
   * Constrain the position to a mix of grid, containment.
   */

  // If we are not dragging yet, we won't check for options
  if ( constrainPosition ) {
   if ( this.containment ) {
    if ( this.relativeContainer ) {
     co = this.relativeContainer.offset();
     containment = [
      this.containment[ 0 ] + co.left,
      this.containment[ 1 ] + co.top,
      this.containment[ 2 ] + co.left,
      this.containment[ 3 ] + co.top
     ];
    } else {
     containment = this.containment;
    }

    if ( event.pageX - this.offset.click.left < containment[ 0 ] ) {
     pageX = containment[ 0 ] + this.offset.click.left;
    }
    if ( event.pageY - this.offset.click.top < containment[ 1 ] ) {
     pageY = containment[ 1 ] + this.offset.click.top;
    }
    if ( event.pageX - this.offset.click.left > containment[ 2 ] ) {
     pageX = containment[ 2 ] + this.offset.click.left;
    }
    if ( event.pageY - this.offset.click.top > containment[ 3 ] ) {
     pageY = containment[ 3 ] + this.offset.click.top;
    }
   }

   if ( o.grid ) {

    //Check for grid elements set to 0 to prevent divide by 0 error causing invalid
    // argument errors in IE (see ticket #6950)
    top = o.grid[ 1 ] ? this.originalPageY + Math.round( ( pageY -
     this.originalPageY ) / o.grid[ 1 ] ) * o.grid[ 1 ] : this.originalPageY;
    pageY = containment ? ( ( top - this.offset.click.top >= containment[ 1 ] ||
     top - this.offset.click.top > containment[ 3 ] ) ?
      top :
      ( ( top - this.offset.click.top >= containment[ 1 ] ) ?
       top - o.grid[ 1 ] : top + o.grid[ 1 ] ) ) : top;

    left = o.grid[ 0 ] ? this.originalPageX +
     Math.round( ( pageX - this.originalPageX ) / o.grid[ 0 ] ) * o.grid[ 0 ] :
     this.originalPageX;
    pageX = containment ? ( ( left - this.offset.click.left >= containment[ 0 ] ||
     left - this.offset.click.left > containment[ 2 ] ) ?
      left :
      ( ( left - this.offset.click.left >= containment[ 0 ] ) ?
       left - o.grid[ 0 ] : left + o.grid[ 0 ] ) ) : left;
   }

   if ( o.axis === "y" ) {
    pageX = this.originalPageX;
   }

   if ( o.axis === "x" ) {
    pageY = this.originalPageY;
   }
  }

  return {
   top: (

    // The absolute mouse position
    pageY -

    // Click offset (relative to the element)
    this.offset.click.top -

    // Only for relative positioned nodes: Relative offset from element to offset parent
    this.offset.relative.top -

    // The offsetParent's offset without borders (offset + border)
    this.offset.parent.top +
    ( this.cssPosition === "fixed" ?
     -this.offset.scroll.top :
     ( scrollIsRootNode ? 0 : this.offset.scroll.top ) )
   ),
   left: (

    // The absolute mouse position
    pageX -

    // Click offset (relative to the element)
    this.offset.click.left -

    // Only for relative positioned nodes: Relative offset from element to offset parent
    this.offset.relative.left -

    // The offsetParent's offset without borders (offset + border)
    this.offset.parent.left +
    ( this.cssPosition === "fixed" ?
     -this.offset.scroll.left :
     ( scrollIsRootNode ? 0 : this.offset.scroll.left ) )
   )
  };

 },

 _clear: function() {
  this._removeClass( this.helper, "ui-draggable-dragging" );
  if ( this.helper[ 0 ] !== this.element[ 0 ] && !this.cancelHelperRemoval ) {
   this.helper.remove();
  }
  this.helper = null;
  this.cancelHelperRemoval = false;
  if ( this.destroyOnClear ) {
   this.destroy();
  }
 },

 // From now on bulk stuff - mainly helpers

 _trigger: function( type, event, ui ) {
  ui = ui || this._uiHash();
  $.ui.plugin.call( this, type, [ event, ui, this ], true );

  // Absolute position and offset (see #6884 ) have to be recalculated after plugins
  if ( /^(drag|start|stop)/.test( type ) ) {
   this.positionAbs = this._convertPositionTo( "absolute" );
   ui.offset = this.positionAbs;
  }
  return $.Widget.prototype._trigger.call( this, type, event, ui );
 },

 plugins: {},

 _uiHash: function() {
  return {
   helper: this.helper,
   position: this.position,
   originalPosition: this.originalPosition,
   offset: this.positionAbs
  };
 }

} );

$.ui.plugin.add( "draggable", "connectToSortable", {
 start: function( event, ui, draggable ) {
  var uiSortable = $.extend( {}, ui, {
   item: draggable.element
  } );

  draggable.sortables = [];
  $( draggable.options.connectToSortable ).each( function() {
   var sortable = $( this ).sortable( "instance" );

   if ( sortable && !sortable.options.disabled ) {
    draggable.sortables.push( sortable );

    // RefreshPositions is called at drag start to refresh the containerCache
    // which is used in drag. This ensures it's initialized and synchronized
    // with any changes that might have happened on the page since initialization.
    sortable.refreshPositions();
    sortable._trigger( "activate", event, uiSortable );
   }
  } );
 },
 stop: function( event, ui, draggable ) {
  var uiSortable = $.extend( {}, ui, {
   item: draggable.element
  } );

  draggable.cancelHelperRemoval = false;

  $.each( draggable.sortables, function() {
   var sortable = this;

   if ( sortable.isOver ) {
    sortable.isOver = 0;

    // Allow this sortable to handle removing the helper
    draggable.cancelHelperRemoval = true;
    sortable.cancelHelperRemoval = false;

    // Use _storedCSS To restore properties in the sortable,
    // as this also handles revert (#9675) since the draggable
    // may have modified them in unexpected ways (#8809)
    sortable._storedCSS = {
     position: sortable.placeholder.css( "position" ),
     top: sortable.placeholder.css( "top" ),
     left: sortable.placeholder.css( "left" )
    };

    sortable._mouseStop( event );

    // Once drag has ended, the sortable should return to using
    // its original helper, not the shared helper from draggable
    sortable.options.helper = sortable.options._helper;
   } else {

    // Prevent this Sortable from removing the helper.
    // However, don't set the draggable to remove the helper
    // either as another connected Sortable may yet handle the removal.
    sortable.cancelHelperRemoval = true;

    sortable._trigger( "deactivate", event, uiSortable );
   }
  } );
 },
 drag: function( event, ui, draggable ) {
  $.each( draggable.sortables, function() {
   var innermostIntersecting = false,
    sortable = this;

   // Copy over variables that sortable's _intersectsWith uses
   sortable.positionAbs = draggable.positionAbs;
   sortable.helperProportions = draggable.helperProportions;
   sortable.offset.click = draggable.offset.click;

   if ( sortable._intersectsWith( sortable.containerCache ) ) {
    innermostIntersecting = true;

    $.each( draggable.sortables, function() {

     // Copy over variables that sortable's _intersectsWith uses
     this.positionAbs = draggable.positionAbs;
     this.helperProportions = draggable.helperProportions;
     this.offset.click = draggable.offset.click;

     if ( this !== sortable &&
       this._intersectsWith( this.containerCache ) &&
       $.contains( sortable.element[ 0 ], this.element[ 0 ] ) ) {
      innermostIntersecting = false;
     }

     return innermostIntersecting;
    } );
   }

   if ( innermostIntersecting ) {

    // If it intersects, we use a little isOver variable and set it once,
    // so that the move-in stuff gets fired only once.
    if ( !sortable.isOver ) {
     sortable.isOver = 1;

     // Store draggable's parent in case we need to reappend to it later.
     draggable._parent = ui.helper.parent();

     sortable.currentItem = ui.helper
      .appendTo( sortable.element )
      .data( "ui-sortable-item", true );

     // Store helper option to later restore it
     sortable.options._helper = sortable.options.helper;

     sortable.options.helper = function() {
      return ui.helper[ 0 ];
     };

     // Fire the start events of the sortable with our passed browser event,
     // and our own helper (so it doesn't create a new one)
     event.target = sortable.currentItem[ 0 ];
     sortable._mouseCapture( event, true );
     sortable._mouseStart( event, true, true );

     // Because the browser event is way off the new appended portlet,
     // modify necessary variables to reflect the changes
     sortable.offset.click.top = draggable.offset.click.top;
     sortable.offset.click.left = draggable.offset.click.left;
     sortable.offset.parent.left -= draggable.offset.parent.left -
      sortable.offset.parent.left;
     sortable.offset.parent.top -= draggable.offset.parent.top -
      sortable.offset.parent.top;

     draggable._trigger( "toSortable", event );

     // Inform draggable that the helper is in a valid drop zone,
     // used solely in the revert option to handle "valid/invalid".
     draggable.dropped = sortable.element;

     // Need to refreshPositions of all sortables in the case that
     // adding to one sortable changes the location of the other sortables (#9675)
     $.each( draggable.sortables, function() {
      this.refreshPositions();
     } );

     // Hack so receive/update callbacks work (mostly)
     draggable.currentItem = draggable.element;
     sortable.fromOutside = draggable;
    }

    if ( sortable.currentItem ) {
     sortable._mouseDrag( event );

     // Copy the sortable's position because the draggable's can potentially reflect
     // a relative position, while sortable is always absolute, which the dragged
     // element has now become. (#8809)
     ui.position = sortable.position;
    }
   } else {

    // If it doesn't intersect with the sortable, and it intersected before,
    // we fake the drag stop of the sortable, but make sure it doesn't remove
    // the helper by using cancelHelperRemoval.
    if ( sortable.isOver ) {

     sortable.isOver = 0;
     sortable.cancelHelperRemoval = true;

     // Calling sortable's mouseStop would trigger a revert,
     // so revert must be temporarily false until after mouseStop is called.
     sortable.options._revert = sortable.options.revert;
     sortable.options.revert = false;

     sortable._trigger( "out", event, sortable._uiHash( sortable ) );
     sortable._mouseStop( event, true );

     // Restore sortable behaviors that were modfied
     // when the draggable entered the sortable area (#9481)
     sortable.options.revert = sortable.options._revert;
     sortable.options.helper = sortable.options._helper;

     if ( sortable.placeholder ) {
      sortable.placeholder.remove();
     }

     // Restore and recalculate the draggable's offset considering the sortable
     // may have modified them in unexpected ways. (#8809, #10669)
     ui.helper.appendTo( draggable._parent );
     draggable._refreshOffsets( event );
     ui.position = draggable._generatePosition( event, true );

     draggable._trigger( "fromSortable", event );

     // Inform draggable that the helper is no longer in a valid drop zone
     draggable.dropped = false;

     // Need to refreshPositions of all sortables just in case removing
     // from one sortable changes the location of other sortables (#9675)
     $.each( draggable.sortables, function() {
      this.refreshPositions();
     } );
    }
   }
  } );
 }
} );

$.ui.plugin.add( "draggable", "cursor", {
 start: function( event, ui, instance ) {
  var t = $( "body" ),
   o = instance.options;

  if ( t.css( "cursor" ) ) {
   o._cursor = t.css( "cursor" );
  }
  t.css( "cursor", o.cursor );
 },
 stop: function( event, ui, instance ) {
  var o = instance.options;
  if ( o._cursor ) {
   $( "body" ).css( "cursor", o._cursor );
  }
 }
} );

$.ui.plugin.add( "draggable", "opacity", {
 start: function( event, ui, instance ) {
  var t = $( ui.helper ),
   o = instance.options;
  if ( t.css( "opacity" ) ) {
   o._opacity = t.css( "opacity" );
  }
  t.css( "opacity", o.opacity );
 },
 stop: function( event, ui, instance ) {
  var o = instance.options;
  if ( o._opacity ) {
   $( ui.helper ).css( "opacity", o._opacity );
  }
 }
} );

$.ui.plugin.add( "draggable", "scroll", {
 start: function( event, ui, i ) {
  if ( !i.scrollParentNotHidden ) {
   i.scrollParentNotHidden = i.helper.scrollParent( false );
  }

  if ( i.scrollParentNotHidden[ 0 ] !== i.document[ 0 ] &&
    i.scrollParentNotHidden[ 0 ].tagName !== "HTML" ) {
   i.overflowOffset = i.scrollParentNotHidden.offset();
  }
 },
 drag: function( event, ui, i  ) {

  var o = i.options,
   scrolled = false,
   scrollParent = i.scrollParentNotHidden[ 0 ],
   document = i.document[ 0 ];

  if ( scrollParent !== document && scrollParent.tagName !== "HTML" ) {
   if ( !o.axis || o.axis !== "x" ) {
    if ( ( i.overflowOffset.top + scrollParent.offsetHeight ) - event.pageY <
      o.scrollSensitivity ) {
     scrollParent.scrollTop = scrolled = scrollParent.scrollTop + o.scrollSpeed;
    } else if ( event.pageY - i.overflowOffset.top < o.scrollSensitivity ) {
     scrollParent.scrollTop = scrolled = scrollParent.scrollTop - o.scrollSpeed;
    }
   }

   if ( !o.axis || o.axis !== "y" ) {
    if ( ( i.overflowOffset.left + scrollParent.offsetWidth ) - event.pageX <
      o.scrollSensitivity ) {
     scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft + o.scrollSpeed;
    } else if ( event.pageX - i.overflowOffset.left < o.scrollSensitivity ) {
     scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft - o.scrollSpeed;
    }
   }

  } else {

   if ( !o.axis || o.axis !== "x" ) {
    if ( event.pageY - $( document ).scrollTop() < o.scrollSensitivity ) {
     scrolled = $( document ).scrollTop( $( document ).scrollTop() - o.scrollSpeed );
    } else if ( $( window ).height() - ( event.pageY - $( document ).scrollTop() ) <
      o.scrollSensitivity ) {
     scrolled = $( document ).scrollTop( $( document ).scrollTop() + o.scrollSpeed );
    }
   }

   if ( !o.axis || o.axis !== "y" ) {
    if ( event.pageX - $( document ).scrollLeft() < o.scrollSensitivity ) {
     scrolled = $( document ).scrollLeft(
      $( document ).scrollLeft() - o.scrollSpeed
     );
    } else if ( $( window ).width() - ( event.pageX - $( document ).scrollLeft() ) <
      o.scrollSensitivity ) {
     scrolled = $( document ).scrollLeft(
      $( document ).scrollLeft() + o.scrollSpeed
     );
    }
   }

  }

  if ( scrolled !== false && $.ui.ddmanager && !o.dropBehaviour ) {
   $.ui.ddmanager.prepareOffsets( i, event );
  }

 }
} );

$.ui.plugin.add( "draggable", "snap", {
 start: function( event, ui, i ) {

  var o = i.options;

  i.snapElements = [];

  $( o.snap.constructor !== String ? ( o.snap.items || ":data(ui-draggable)" ) : o.snap )
   .each( function() {
    var $t = $( this ),
     $o = $t.offset();
    if ( this !== i.element[ 0 ] ) {
     i.snapElements.push( {
      item: this,
      width: $t.outerWidth(), height: $t.outerHeight(),
      top: $o.top, left: $o.left
     } );
    }
   } );

 },
 drag: function( event, ui, inst ) {

  var ts, bs, ls, rs, l, r, t, b, i, first,
   o = inst.options,
   d = o.snapTolerance,
   x1 = ui.offset.left, x2 = x1 + inst.helperProportions.width,
   y1 = ui.offset.top, y2 = y1 + inst.helperProportions.height;

  for ( i = inst.snapElements.length - 1; i >= 0; i-- ) {

   l = inst.snapElements[ i ].left - inst.margins.left;
   r = l + inst.snapElements[ i ].width;
   t = inst.snapElements[ i ].top - inst.margins.top;
   b = t + inst.snapElements[ i ].height;

   if ( x2 < l - d || x1 > r + d || y2 < t - d || y1 > b + d ||
     !$.contains( inst.snapElements[ i ].item.ownerDocument,
     inst.snapElements[ i ].item ) ) {
    if ( inst.snapElements[ i ].snapping ) {
     ( inst.options.snap.release &&
      inst.options.snap.release.call(
       inst.element,
       event,
       $.extend( inst._uiHash(), { snapItem: inst.snapElements[ i ].item } )
      ) );
    }
    inst.snapElements[ i ].snapping = false;
    continue;
   }

   if ( o.snapMode !== "inner" ) {
    ts = Math.abs( t - y2 ) <= d;
    bs = Math.abs( b - y1 ) <= d;
    ls = Math.abs( l - x2 ) <= d;
    rs = Math.abs( r - x1 ) <= d;
    if ( ts ) {
     ui.position.top = inst._convertPositionTo( "relative", {
      top: t - inst.helperProportions.height,
      left: 0
     } ).top;
    }
    if ( bs ) {
     ui.position.top = inst._convertPositionTo( "relative", {
      top: b,
      left: 0
     } ).top;
    }
    if ( ls ) {
     ui.position.left = inst._convertPositionTo( "relative", {
      top: 0,
      left: l - inst.helperProportions.width
     } ).left;
    }
    if ( rs ) {
     ui.position.left = inst._convertPositionTo( "relative", {
      top: 0,
      left: r
     } ).left;
    }
   }

   first = ( ts || bs || ls || rs );

   if ( o.snapMode !== "outer" ) {
    ts = Math.abs( t - y1 ) <= d;
    bs = Math.abs( b - y2 ) <= d;
    ls = Math.abs( l - x1 ) <= d;
    rs = Math.abs( r - x2 ) <= d;
    if ( ts ) {
     ui.position.top = inst._convertPositionTo( "relative", {
      top: t,
      left: 0
     } ).top;
    }
    if ( bs ) {
     ui.position.top = inst._convertPositionTo( "relative", {
      top: b - inst.helperProportions.height,
      left: 0
     } ).top;
    }
    if ( ls ) {
     ui.position.left = inst._convertPositionTo( "relative", {
      top: 0,
      left: l
     } ).left;
    }
    if ( rs ) {
     ui.position.left = inst._convertPositionTo( "relative", {
      top: 0,
      left: r - inst.helperProportions.width
     } ).left;
    }
   }

   if ( !inst.snapElements[ i ].snapping && ( ts || bs || ls || rs || first ) ) {
    ( inst.options.snap.snap &&
     inst.options.snap.snap.call(
      inst.element,
      event,
      $.extend( inst._uiHash(), {
       snapItem: inst.snapElements[ i ].item
      } ) ) );
   }
   inst.snapElements[ i ].snapping = ( ts || bs || ls || rs || first );

  }

 }
} );

$.ui.plugin.add( "draggable", "stack", {
 start: function( event, ui, instance ) {
  var min,
   o = instance.options,
   group = $.makeArray( $( o.stack ) ).sort( function( a, b ) {
    return ( parseInt( $( a ).css( "zIndex" ), 10 ) || 0 ) -
     ( parseInt( $( b ).css( "zIndex" ), 10 ) || 0 );
   } );

  if ( !group.length ) { return; }

  min = parseInt( $( group[ 0 ] ).css( "zIndex" ), 10 ) || 0;
  $( group ).each( function( i ) {
   $( this ).css( "zIndex", min + i );
  } );
  this.css( "zIndex", ( min + group.length ) );
 }
} );

$.ui.plugin.add( "draggable", "zIndex", {
 start: function( event, ui, instance ) {
  var t = $( ui.helper ),
   o = instance.options;

  if ( t.css( "zIndex" ) ) {
   o._zIndex = t.css( "zIndex" );
  }
  t.css( "zIndex", o.zIndex );
 },
 stop: function( event, ui, instance ) {
  var o = instance.options;

  if ( o._zIndex ) {
   $( ui.helper ).css( "zIndex", o._zIndex );
  }
 }
} );

var widgetsDraggable = $.ui.draggable;


/*!
 * jQuery UI Droppable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Droppable
//>>group: Interactions
//>>description: Enables drop targets for draggable elements.
//>>docs: http://api.jqueryui.com/droppable/
//>>demos: http://jqueryui.com/droppable/



$.widget( "ui.droppable", {
 version: "1.12.1",
 widgetEventPrefix: "drop",
 options: {
  accept: "*",
  addClasses: true,
  greedy: false,
  scope: "default",
  tolerance: "intersect",

  // Callbacks
  activate: null,
  deactivate: null,
  drop: null,
  out: null,
  over: null
 },
 _create: function() {

  var proportions,
   o = this.options,
   accept = o.accept;

  this.isover = false;
  this.isout = true;

  this.accept = $.isFunction( accept ) ? accept : function( d ) {
   return d.is( accept );
  };

  this.proportions = function( /* valueToWrite */ ) {
   if ( arguments.length ) {

    // Store the droppable's proportions
    proportions = arguments[ 0 ];
   } else {

    // Retrieve or derive the droppable's proportions
    return proportions ?
     proportions :
     proportions = {
      width: this.element[ 0 ].offsetWidth,
      height: this.element[ 0 ].offsetHeight
     };
   }
  };

  this._addToManager( o.scope );

  o.addClasses && this._addClass( "ui-droppable" );

 },

 _addToManager: function( scope ) {

  // Add the reference and positions to the manager
  $.ui.ddmanager.droppables[ scope ] = $.ui.ddmanager.droppables[ scope ] || [];
  $.ui.ddmanager.droppables[ scope ].push( this );
 },

 _splice: function( drop ) {
  var i = 0;
  for ( ; i < drop.length; i++ ) {
   if ( drop[ i ] === this ) {
    drop.splice( i, 1 );
   }
  }
 },

 _destroy: function() {
  var drop = $.ui.ddmanager.droppables[ this.options.scope ];

  this._splice( drop );
 },

 _setOption: function( key, value ) {

  if ( key === "accept" ) {
   this.accept = $.isFunction( value ) ? value : function( d ) {
    return d.is( value );
   };
  } else if ( key === "scope" ) {
   var drop = $.ui.ddmanager.droppables[ this.options.scope ];

   this._splice( drop );
   this._addToManager( value );
  }

  this._super( key, value );
 },

 _activate: function( event ) {
  var draggable = $.ui.ddmanager.current;

  this._addActiveClass();
  if ( draggable ) {
   this._trigger( "activate", event, this.ui( draggable ) );
  }
 },

 _deactivate: function( event ) {
  var draggable = $.ui.ddmanager.current;

  this._removeActiveClass();
  if ( draggable ) {
   this._trigger( "deactivate", event, this.ui( draggable ) );
  }
 },

 _over: function( event ) {

  var draggable = $.ui.ddmanager.current;

  // Bail if draggable and droppable are same element
  if ( !draggable || ( draggable.currentItem ||
    draggable.element )[ 0 ] === this.element[ 0 ] ) {
   return;
  }

  if ( this.accept.call( this.element[ 0 ], ( draggable.currentItem ||
    draggable.element ) ) ) {
   this._addHoverClass();
   this._trigger( "over", event, this.ui( draggable ) );
  }

 },

 _out: function( event ) {

  var draggable = $.ui.ddmanager.current;

  // Bail if draggable and droppable are same element
  if ( !draggable || ( draggable.currentItem ||
    draggable.element )[ 0 ] === this.element[ 0 ] ) {
   return;
  }

  if ( this.accept.call( this.element[ 0 ], ( draggable.currentItem ||
    draggable.element ) ) ) {
   this._removeHoverClass();
   this._trigger( "out", event, this.ui( draggable ) );
  }

 },

 _drop: function( event, custom ) {

  var draggable = custom || $.ui.ddmanager.current,
   childrenIntersection = false;

  // Bail if draggable and droppable are same element
  if ( !draggable || ( draggable.currentItem ||
    draggable.element )[ 0 ] === this.element[ 0 ] ) {
   return false;
  }

  this.element
   .find( ":data(ui-droppable)" )
   .not( ".ui-draggable-dragging" )
   .each( function() {
    var inst = $( this ).droppable( "instance" );
    if (
     inst.options.greedy &&
     !inst.options.disabled &&
     inst.options.scope === draggable.options.scope &&
     inst.accept.call(
      inst.element[ 0 ], ( draggable.currentItem || draggable.element )
     ) &&
     intersect(
      draggable,
      $.extend( inst, { offset: inst.element.offset() } ),
      inst.options.tolerance, event
     )
    ) {
     childrenIntersection = true;
     return false; }
   } );
  if ( childrenIntersection ) {
   return false;
  }

  if ( this.accept.call( this.element[ 0 ],
    ( draggable.currentItem || draggable.element ) ) ) {
   this._removeActiveClass();
   this._removeHoverClass();

   this._trigger( "drop", event, this.ui( draggable ) );
   return this.element;
  }

  return false;

 },

 ui: function( c ) {
  return {
   draggable: ( c.currentItem || c.element ),
   helper: c.helper,
   position: c.position,
   offset: c.positionAbs
  };
 },

 // Extension points just to make backcompat sane and avoid duplicating logic
 // TODO: Remove in 1.13 along with call to it below
 _addHoverClass: function() {
  this._addClass( "ui-droppable-hover" );
 },

 _removeHoverClass: function() {
  this._removeClass( "ui-droppable-hover" );
 },

 _addActiveClass: function() {
  this._addClass( "ui-droppable-active" );
 },

 _removeActiveClass: function() {
  this._removeClass( "ui-droppable-active" );
 }
} );

var intersect = $.ui.intersect = ( function() {
 function isOverAxis( x, reference, size ) {
  return ( x >= reference ) && ( x < ( reference + size ) );
 }

 return function( draggable, droppable, toleranceMode, event ) {

  if ( !droppable.offset ) {
   return false;
  }

  var x1 = ( draggable.positionAbs ||
    draggable.position.absolute ).left + draggable.margins.left,
   y1 = ( draggable.positionAbs ||
    draggable.position.absolute ).top + draggable.margins.top,
   x2 = x1 + draggable.helperProportions.width,
   y2 = y1 + draggable.helperProportions.height,
   l = droppable.offset.left,
   t = droppable.offset.top,
   r = l + droppable.proportions().width,
   b = t + droppable.proportions().height;

  switch ( toleranceMode ) {
  case "fit":
   return ( l <= x1 && x2 <= r && t <= y1 && y2 <= b );
  case "intersect":
   return ( l < x1 + ( draggable.helperProportions.width / 2 ) && // Right Half
    x2 - ( draggable.helperProportions.width / 2 ) < r && // Left Half
    t < y1 + ( draggable.helperProportions.height / 2 ) && // Bottom Half
    y2 - ( draggable.helperProportions.height / 2 ) < b ); // Top Half
  case "pointer":
   return isOverAxis( event.pageY, t, droppable.proportions().height ) &&
    isOverAxis( event.pageX, l, droppable.proportions().width );
  case "touch":
   return (
    ( y1 >= t && y1 <= b ) || // Top edge touching
    ( y2 >= t && y2 <= b ) || // Bottom edge touching
    ( y1 < t && y2 > b ) // Surrounded vertically
   ) && (
    ( x1 >= l && x1 <= r ) || // Left edge touching
    ( x2 >= l && x2 <= r ) || // Right edge touching
    ( x1 < l && x2 > r ) // Surrounded horizontally
   );
  default:
   return false;
  }
 };
} )();

/*
 This manager tracks offsets of draggables and droppables
*/
$.ui.ddmanager = {
 current: null,
 droppables: { "default": [] },
 prepareOffsets: function( t, event ) {

  var i, j,
   m = $.ui.ddmanager.droppables[ t.options.scope ] || [],
   type = event ? event.type : null, // workaround for #2317
   list = ( t.currentItem || t.element ).find( ":data(ui-droppable)" ).addBack();

  droppablesLoop: for ( i = 0; i < m.length; i++ ) {

   // No disabled and non-accepted
   if ( m[ i ].options.disabled || ( t && !m[ i ].accept.call( m[ i ].element[ 0 ],
     ( t.currentItem || t.element ) ) ) ) {
    continue;
   }

   // Filter out elements in the current dragged item
   for ( j = 0; j < list.length; j++ ) {
    if ( list[ j ] === m[ i ].element[ 0 ] ) {
     m[ i ].proportions().height = 0;
     continue droppablesLoop;
    }
   }

   m[ i ].visible = m[ i ].element.css( "display" ) !== "none";
   if ( !m[ i ].visible ) {
    continue;
   }

   // Activate the droppable if used directly from draggables
   if ( type === "mousedown" ) {
    m[ i ]._activate.call( m[ i ], event );
   }

   m[ i ].offset = m[ i ].element.offset();
   m[ i ].proportions( {
    width: m[ i ].element[ 0 ].offsetWidth,
    height: m[ i ].element[ 0 ].offsetHeight
   } );

  }

 },
 drop: function( draggable, event ) {

  var dropped = false;

  // Create a copy of the droppables in case the list changes during the drop (#9116)
  $.each( ( $.ui.ddmanager.droppables[ draggable.options.scope ] || [] ).slice(), function() {

   if ( !this.options ) {
    return;
   }
   if ( !this.options.disabled && this.visible &&
     intersect( draggable, this, this.options.tolerance, event ) ) {
    dropped = this._drop.call( this, event ) || dropped;
   }

   if ( !this.options.disabled && this.visible && this.accept.call( this.element[ 0 ],
     ( draggable.currentItem || draggable.element ) ) ) {
    this.isout = true;
    this.isover = false;
    this._deactivate.call( this, event );
   }

  } );
  return dropped;

 },
 dragStart: function( draggable, event ) {

  // Listen for scrolling so that if the dragging causes scrolling the position of the
  // droppables can be recalculated (see #5003)
  draggable.element.parentsUntil( "body" ).on( "scroll.droppable", function() {
   if ( !draggable.options.refreshPositions ) {
    $.ui.ddmanager.prepareOffsets( draggable, event );
   }
  } );
 },
 drag: function( draggable, event ) {

  // If you have a highly dynamic page, you might try this option. It renders positions
  // every time you move the mouse.
  if ( draggable.options.refreshPositions ) {
   $.ui.ddmanager.prepareOffsets( draggable, event );
  }

  // Run through all droppables and check their positions based on specific tolerance options
  $.each( $.ui.ddmanager.droppables[ draggable.options.scope ] || [], function() {

   if ( this.options.disabled || this.greedyChild || !this.visible ) {
    return;
   }

   var parentInstance, scope, parent,
    intersects = intersect( draggable, this, this.options.tolerance, event ),
    c = !intersects && this.isover ?
     "isout" :
     ( intersects && !this.isover ? "isover" : null );
   if ( !c ) {
    return;
   }

   if ( this.options.greedy ) {

    // find droppable parents with same scope
    scope = this.options.scope;
    parent = this.element.parents( ":data(ui-droppable)" ).filter( function() {
     return $( this ).droppable( "instance" ).options.scope === scope;
    } );

    if ( parent.length ) {
     parentInstance = $( parent[ 0 ] ).droppable( "instance" );
     parentInstance.greedyChild = ( c === "isover" );
    }
   }

   // We just moved into a greedy child
   if ( parentInstance && c === "isover" ) {
    parentInstance.isover = false;
    parentInstance.isout = true;
    parentInstance._out.call( parentInstance, event );
   }

   this[ c ] = true;
   this[ c === "isout" ? "isover" : "isout" ] = false;
   this[ c === "isover" ? "_over" : "_out" ].call( this, event );

   // We just moved out of a greedy child
   if ( parentInstance && c === "isout" ) {
    parentInstance.isout = false;
    parentInstance.isover = true;
    parentInstance._over.call( parentInstance, event );
   }
  } );

 },
 dragStop: function( draggable, event ) {
  draggable.element.parentsUntil( "body" ).off( "scroll.droppable" );

  // Call prepareOffsets one final time since IE does not fire return scroll events when
  // overflow was caused by drag (see #5003)
  if ( !draggable.options.refreshPositions ) {
   $.ui.ddmanager.prepareOffsets( draggable, event );
  }
 }
};

// DEPRECATED
// TODO: switch return back to widget declaration at top of file when this is removed
if ( $.uiBackCompat !== false ) {

 // Backcompat for activeClass and hoverClass options
 $.widget( "ui.droppable", $.ui.droppable, {
  options: {
   hoverClass: false,
   activeClass: false
  },
  _addActiveClass: function() {
   this._super();
   if ( this.options.activeClass ) {
    this.element.addClass( this.options.activeClass );
   }
  },
  _removeActiveClass: function() {
   this._super();
   if ( this.options.activeClass ) {
    this.element.removeClass( this.options.activeClass );
   }
  },
  _addHoverClass: function() {
   this._super();
   if ( this.options.hoverClass ) {
    this.element.addClass( this.options.hoverClass );
   }
  },
  _removeHoverClass: function() {
   this._super();
   if ( this.options.hoverClass ) {
    this.element.removeClass( this.options.hoverClass );
   }
  }
 } );
}

var widgetsDroppable = $.ui.droppable;


/*!
 * jQuery UI Sortable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Sortable
//>>group: Interactions
//>>description: Enables items in a list to be sorted using the mouse.
//>>docs: http://api.jqueryui.com/sortable/
//>>demos: http://jqueryui.com/sortable/
//>>css.structure: ../../themes/base/sortable.css



var widgetsSortable = $.widget( "ui.sortable", $.ui.mouse, {
 version: "1.12.1",
 widgetEventPrefix: "sort",
 ready: false,
 options: {
  appendTo: "parent",
  axis: false,
  connectWith: false,
  containment: false,
  cursor: "auto",
  cursorAt: false,
  dropOnEmpty: true,
  forcePlaceholderSize: false,
  forceHelperSize: false,
  grid: false,
  handle: false,
  helper: "original",
  items: "> *",
  opacity: false,
  placeholder: false,
  revert: false,
  scroll: true,
  scrollSensitivity: 20,
  scrollSpeed: 20,
  scope: "default",
  tolerance: "intersect",
  zIndex: 1000,

  // Callbacks
  activate: null,
  beforeStop: null,
  change: null,
  deactivate: null,
  out: null,
  over: null,
  receive: null,
  remove: null,
  sort: null,
  start: null,
  stop: null,
  update: null
 },

 _isOverAxis: function( x, reference, size ) {
  return ( x >= reference ) && ( x < ( reference + size ) );
 },

 _isFloating: function( item ) {
  return ( /left|right/ ).test( item.css( "float" ) ) ||
   ( /inline|table-cell/ ).test( item.css( "display" ) );
 },

 _create: function() {
  this.containerCache = {};
  this._addClass( "ui-sortable" );

  //Get the items
  this.refresh();

  //Let's determine the parent's offset
  this.offset = this.element.offset();

  //Initialize mouse events for interaction
  this._mouseInit();

  this._setHandleClassName();

  //We're ready to go
  this.ready = true;

 },

 _setOption: function( key, value ) {
  this._super( key, value );

  if ( key === "handle" ) {
   this._setHandleClassName();
  }
 },

 _setHandleClassName: function() {
  var that = this;
  this._removeClass( this.element.find( ".ui-sortable-handle" ), "ui-sortable-handle" );
  $.each( this.items, function() {
   that._addClass(
    this.instance.options.handle ?
     this.item.find( this.instance.options.handle ) :
     this.item,
    "ui-sortable-handle"
   );
  } );
 },

 _destroy: function() {
  this._mouseDestroy();

  for ( var i = this.items.length - 1; i >= 0; i-- ) {
   this.items[ i ].item.removeData( this.widgetName + "-item" );
  }

  return this;
 },

 _mouseCapture: function( event, overrideHandle ) {
  var currentItem = null,
   validHandle = false,
   that = this;

  if ( this.reverting ) {
   return false;
  }

  if ( this.options.disabled || this.options.type === "static" ) {
   return false;
  }

  //We have to refresh the items data once first
  this._refreshItems( event );

  //Find out if the clicked node (or one of its parents) is a actual item in this.items
  $( event.target ).parents().each( function() {
   if ( $.data( this, that.widgetName + "-item" ) === that ) {
    currentItem = $( this );
    return false;
   }
  } );
  if ( $.data( event.target, that.widgetName + "-item" ) === that ) {
   currentItem = $( event.target );
  }

  if ( !currentItem ) {
   return false;
  }
  if ( this.options.handle && !overrideHandle ) {
   $( this.options.handle, currentItem ).find( "*" ).addBack().each( function() {
    if ( this === event.target ) {
     validHandle = true;
    }
   } );
   if ( !validHandle ) {
    return false;
   }
  }

  this.currentItem = currentItem;
  this._removeCurrentsFromItems();
  return true;

 },

 _mouseStart: function( event, overrideHandle, noActivation ) {

  var i, body,
   o = this.options;

  this.currentContainer = this;

  //We only need to call refreshPositions, because the refreshItems call has been moved to
  // mouseCapture
  this.refreshPositions();

  //Create and append the visible helper
  this.helper = this._createHelper( event );

  //Cache the helper size
  this._cacheHelperProportions();

  /*
   * - Position generation -
   * This block generates everything position related - it's the core of draggables.
   */

  //Cache the margins of the original element
  this._cacheMargins();

  //Get the next scrolling parent
  this.scrollParent = this.helper.scrollParent();

  //The element's absolute position on the page minus margins
  this.offset = this.currentItem.offset();
  this.offset = {
   top: this.offset.top - this.margins.top,
   left: this.offset.left - this.margins.left
  };

  $.extend( this.offset, {
   click: { //Where the click happened, relative to the element
    left: event.pageX - this.offset.left,
    top: event.pageY - this.offset.top
   },
   parent: this._getParentOffset(),

   // This is a relative to absolute position minus the actual position calculation -
   // only used for relative positioned helper
   relative: this._getRelativeOffset()
  } );

  // Only after we got the offset, we can change the helper's position to absolute
  // TODO: Still need to figure out a way to make relative sorting possible
  this.helper.css( "position", "absolute" );
  this.cssPosition = this.helper.css( "position" );

  //Generate the original position
  this.originalPosition = this._generatePosition( event );
  this.originalPageX = event.pageX;
  this.originalPageY = event.pageY;

  //Adjust the mouse offset relative to the helper if "cursorAt" is supplied
  ( o.cursorAt && this._adjustOffsetFromHelper( o.cursorAt ) );

  //Cache the former DOM position
  this.domPosition = {
   prev: this.currentItem.prev()[ 0 ],
   parent: this.currentItem.parent()[ 0 ]
  };

  // If the helper is not the original, hide the original so it's not playing any role during
  // the drag, won't cause anything bad this way
  if ( this.helper[ 0 ] !== this.currentItem[ 0 ] ) {
   this.currentItem.hide();
  }

  //Create the placeholder
  this._createPlaceholder();

  //Set a containment if given in the options
  if ( o.containment ) {
   this._setContainment();
  }

  if ( o.cursor && o.cursor !== "auto" ) { // cursor option
   body = this.document.find( "body" );

   // Support: IE
   this.storedCursor = body.css( "cursor" );
   body.css( "cursor", o.cursor );

   this.storedStylesheet =
    $( "<style>*{ cursor: " + o.cursor + " !important; }</style>" ).appendTo( body );
  }

  if ( o.opacity ) { // opacity option
   if ( this.helper.css( "opacity" ) ) {
    this._storedOpacity = this.helper.css( "opacity" );
   }
   this.helper.css( "opacity", o.opacity );
  }

  if ( o.zIndex ) { // zIndex option
   if ( this.helper.css( "zIndex" ) ) {
    this._storedZIndex = this.helper.css( "zIndex" );
   }
   this.helper.css( "zIndex", o.zIndex );
  }

  //Prepare scrolling
  if ( this.scrollParent[ 0 ] !== this.document[ 0 ] &&
    this.scrollParent[ 0 ].tagName !== "HTML" ) {
   this.overflowOffset = this.scrollParent.offset();
  }

  //Call callbacks
  this._trigger( "start", event, this._uiHash() );

  //Recache the helper size
  if ( !this._preserveHelperProportions ) {
   this._cacheHelperProportions();
  }

  //Post "activate" events to possible containers
  if ( !noActivation ) {
   for ( i = this.containers.length - 1; i >= 0; i-- ) {
    this.containers[ i ]._trigger( "activate", event, this._uiHash( this ) );
   }
  }

  //Prepare possible droppables
  if ( $.ui.ddmanager ) {
   $.ui.ddmanager.current = this;
  }

  if ( $.ui.ddmanager && !o.dropBehaviour ) {
   $.ui.ddmanager.prepareOffsets( this, event );
  }

  this.dragging = true;

  this._addClass( this.helper, "ui-sortable-helper" );

  // Execute the drag once - this causes the helper not to be visiblebefore getting its
  // correct position
  this._mouseDrag( event );
  return true;

 },

 _mouseDrag: function( event ) {
  var i, item, itemElement, intersection,
   o = this.options,
   scrolled = false;

  //Compute the helpers position
  this.position = this._generatePosition( event );
  this.positionAbs = this._convertPositionTo( "absolute" );

  if ( !this.lastPositionAbs ) {
   this.lastPositionAbs = this.positionAbs;
  }

  //Do scrolling
  if ( this.options.scroll ) {
   if ( this.scrollParent[ 0 ] !== this.document[ 0 ] &&
     this.scrollParent[ 0 ].tagName !== "HTML" ) {

    if ( ( this.overflowOffset.top + this.scrollParent[ 0 ].offsetHeight ) -
      event.pageY < o.scrollSensitivity ) {
     this.scrollParent[ 0 ].scrollTop =
      scrolled = this.scrollParent[ 0 ].scrollTop + o.scrollSpeed;
    } else if ( event.pageY - this.overflowOffset.top < o.scrollSensitivity ) {
     this.scrollParent[ 0 ].scrollTop =
      scrolled = this.scrollParent[ 0 ].scrollTop - o.scrollSpeed;
    }

    if ( ( this.overflowOffset.left + this.scrollParent[ 0 ].offsetWidth ) -
      event.pageX < o.scrollSensitivity ) {
     this.scrollParent[ 0 ].scrollLeft = scrolled =
      this.scrollParent[ 0 ].scrollLeft + o.scrollSpeed;
    } else if ( event.pageX - this.overflowOffset.left < o.scrollSensitivity ) {
     this.scrollParent[ 0 ].scrollLeft = scrolled =
      this.scrollParent[ 0 ].scrollLeft - o.scrollSpeed;
    }

   } else {

    if ( event.pageY - this.document.scrollTop() < o.scrollSensitivity ) {
     scrolled = this.document.scrollTop( this.document.scrollTop() - o.scrollSpeed );
    } else if ( this.window.height() - ( event.pageY - this.document.scrollTop() ) <
      o.scrollSensitivity ) {
     scrolled = this.document.scrollTop( this.document.scrollTop() + o.scrollSpeed );
    }

    if ( event.pageX - this.document.scrollLeft() < o.scrollSensitivity ) {
     scrolled = this.document.scrollLeft(
      this.document.scrollLeft() - o.scrollSpeed
     );
    } else if ( this.window.width() - ( event.pageX - this.document.scrollLeft() ) <
      o.scrollSensitivity ) {
     scrolled = this.document.scrollLeft(
      this.document.scrollLeft() + o.scrollSpeed
     );
    }

   }

   if ( scrolled !== false && $.ui.ddmanager && !o.dropBehaviour ) {
    $.ui.ddmanager.prepareOffsets( this, event );
   }
  }

  //Regenerate the absolute position used for position checks
  this.positionAbs = this._convertPositionTo( "absolute" );

  //Set the helper position
  if ( !this.options.axis || this.options.axis !== "y" ) {
   this.helper[ 0 ].style.left = this.position.left + "px";
  }
  if ( !this.options.axis || this.options.axis !== "x" ) {
   this.helper[ 0 ].style.top = this.position.top + "px";
  }

  //Rearrange
  for ( i = this.items.length - 1; i >= 0; i-- ) {

   //Cache variables and intersection, continue if no intersection
   item = this.items[ i ];
   itemElement = item.item[ 0 ];
   intersection = this._intersectsWithPointer( item );
   if ( !intersection ) {
    continue;
   }

   // Only put the placeholder inside the current Container, skip all
   // items from other containers. This works because when moving
   // an item from one container to another the
   // currentContainer is switched before the placeholder is moved.
   //
   // Without this, moving items in "sub-sortables" can cause
   // the placeholder to jitter between the outer and inner container.
   if ( item.instance !== this.currentContainer ) {
    continue;
   }

   // Cannot intersect with itself
   // no useless actions that have been done before
   // no action if the item moved is the parent of the item checked
   if ( itemElement !== this.currentItem[ 0 ] &&
    this.placeholder[ intersection === 1 ? "next" : "prev" ]()[ 0 ] !== itemElement &&
    !$.contains( this.placeholder[ 0 ], itemElement ) &&
    ( this.options.type === "semi-dynamic" ?
     !$.contains( this.element[ 0 ], itemElement ) :
     true
    )
   ) {

    this.direction = intersection === 1 ? "down" : "up";

    if ( this.options.tolerance === "pointer" || this._intersectsWithSides( item ) ) {
     this._rearrange( event, item );
    } else {
     break;
    }

    this._trigger( "change", event, this._uiHash() );
    break;
   }
  }

  //Post events to containers
  this._contactContainers( event );

  //Interconnect with droppables
  if ( $.ui.ddmanager ) {
   $.ui.ddmanager.drag( this, event );
  }

  //Call callbacks
  this._trigger( "sort", event, this._uiHash() );

  this.lastPositionAbs = this.positionAbs;
  return false;

 },

 _mouseStop: function( event, noPropagation ) {

  if ( !event ) {
   return;
  }

  //If we are using droppables, inform the manager about the drop
  if ( $.ui.ddmanager && !this.options.dropBehaviour ) {
   $.ui.ddmanager.drop( this, event );
  }

  if ( this.options.revert ) {
   var that = this,
    cur = this.placeholder.offset(),
    axis = this.options.axis,
    animation = {};

   if ( !axis || axis === "x" ) {
    animation.left = cur.left - this.offset.parent.left - this.margins.left +
     ( this.offsetParent[ 0 ] === this.document[ 0 ].body ?
      0 :
      this.offsetParent[ 0 ].scrollLeft
     );
   }
   if ( !axis || axis === "y" ) {
    animation.top = cur.top - this.offset.parent.top - this.margins.top +
     ( this.offsetParent[ 0 ] === this.document[ 0 ].body ?
      0 :
      this.offsetParent[ 0 ].scrollTop
     );
   }
   this.reverting = true;
   $( this.helper ).animate(
    animation,
    parseInt( this.options.revert, 10 ) || 500,
    function() {
     that._clear( event );
    }
   );
  } else {
   this._clear( event, noPropagation );
  }

  return false;

 },

 cancel: function() {

  if ( this.dragging ) {

   this._mouseUp( new $.Event( "mouseup", { target: null } ) );

   if ( this.options.helper === "original" ) {
    this.currentItem.css( this._storedCSS );
    this._removeClass( this.currentItem, "ui-sortable-helper" );
   } else {
    this.currentItem.show();
   }

   //Post deactivating events to containers
   for ( var i = this.containers.length - 1; i >= 0; i-- ) {
    this.containers[ i ]._trigger( "deactivate", null, this._uiHash( this ) );
    if ( this.containers[ i ].containerCache.over ) {
     this.containers[ i ]._trigger( "out", null, this._uiHash( this ) );
     this.containers[ i ].containerCache.over = 0;
    }
   }

  }

  if ( this.placeholder ) {

   //$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately,
   // it unbinds ALL events from the original node!
   if ( this.placeholder[ 0 ].parentNode ) {
    this.placeholder[ 0 ].parentNode.removeChild( this.placeholder[ 0 ] );
   }
   if ( this.options.helper !== "original" && this.helper &&
     this.helper[ 0 ].parentNode ) {
    this.helper.remove();
   }

   $.extend( this, {
    helper: null,
    dragging: false,
    reverting: false,
    _noFinalSort: null
   } );

   if ( this.domPosition.prev ) {
    $( this.domPosition.prev ).after( this.currentItem );
   } else {
    $( this.domPosition.parent ).prepend( this.currentItem );
   }
  }

  return this;

 },

 serialize: function( o ) {

  var items = this._getItemsAsjQuery( o && o.connected ),
   str = [];
  o = o || {};

  $( items ).each( function() {
   var res = ( $( o.item || this ).attr( o.attribute || "id" ) || "" )
    .match( o.expression || ( /(.+)[\-=_](.+)/ ) );
   if ( res ) {
    str.push(
     ( o.key || res[ 1 ] + "[]" ) +
     "=" + ( o.key && o.expression ? res[ 1 ] : res[ 2 ] ) );
   }
  } );

  if ( !str.length && o.key ) {
   str.push( o.key + "=" );
  }

  return str.join( "&" );

 },

 toArray: function( o ) {

  var items = this._getItemsAsjQuery( o && o.connected ),
   ret = [];

  o = o || {};

  items.each( function() {
   ret.push( $( o.item || this ).attr( o.attribute || "id" ) || "" );
  } );
  return ret;

 },

 /* Be careful with the following core functions */
 _intersectsWith: function( item ) {

  var x1 = this.positionAbs.left,
   x2 = x1 + this.helperProportions.width,
   y1 = this.positionAbs.top,
   y2 = y1 + this.helperProportions.height,
   l = item.left,
   r = l + item.width,
   t = item.top,
   b = t + item.height,
   dyClick = this.offset.click.top,
   dxClick = this.offset.click.left,
   isOverElementHeight = ( this.options.axis === "x" ) || ( ( y1 + dyClick ) > t &&
    ( y1 + dyClick ) < b ),
   isOverElementWidth = ( this.options.axis === "y" ) || ( ( x1 + dxClick ) > l &&
    ( x1 + dxClick ) < r ),
   isOverElement = isOverElementHeight && isOverElementWidth;

  if ( this.options.tolerance === "pointer" ||
   this.options.forcePointerForContainers ||
   ( this.options.tolerance !== "pointer" &&
    this.helperProportions[ this.floating ? "width" : "height" ] >
    item[ this.floating ? "width" : "height" ] )
  ) {
   return isOverElement;
  } else {

   return ( l < x1 + ( this.helperProportions.width / 2 ) && // Right Half
    x2 - ( this.helperProportions.width / 2 ) < r && // Left Half
    t < y1 + ( this.helperProportions.height / 2 ) && // Bottom Half
    y2 - ( this.helperProportions.height / 2 ) < b ); // Top Half

  }
 },

 _intersectsWithPointer: function( item ) {
  var verticalDirection, horizontalDirection,
   isOverElementHeight = ( this.options.axis === "x" ) ||
    this._isOverAxis(
     this.positionAbs.top + this.offset.click.top, item.top, item.height ),
   isOverElementWidth = ( this.options.axis === "y" ) ||
    this._isOverAxis(
     this.positionAbs.left + this.offset.click.left, item.left, item.width ),
   isOverElement = isOverElementHeight && isOverElementWidth;

  if ( !isOverElement ) {
   return false;
  }

  verticalDirection = this._getDragVerticalDirection();
  horizontalDirection = this._getDragHorizontalDirection();

  return this.floating ?
   ( ( horizontalDirection === "right" || verticalDirection === "down" ) ? 2 : 1 )
   : ( verticalDirection && ( verticalDirection === "down" ? 2 : 1 ) );

 },

 _intersectsWithSides: function( item ) {

  var isOverBottomHalf = this._isOverAxis( this.positionAbs.top +
    this.offset.click.top, item.top + ( item.height / 2 ), item.height ),
   isOverRightHalf = this._isOverAxis( this.positionAbs.left +
    this.offset.click.left, item.left + ( item.width / 2 ), item.width ),
   verticalDirection = this._getDragVerticalDirection(),
   horizontalDirection = this._getDragHorizontalDirection();

  if ( this.floating && horizontalDirection ) {
   return ( ( horizontalDirection === "right" && isOverRightHalf ) ||
    ( horizontalDirection === "left" && !isOverRightHalf ) );
  } else {
   return verticalDirection && ( ( verticalDirection === "down" && isOverBottomHalf ) ||
    ( verticalDirection === "up" && !isOverBottomHalf ) );
  }

 },

 _getDragVerticalDirection: function() {
  var delta = this.positionAbs.top - this.lastPositionAbs.top;
  return delta !== 0 && ( delta > 0 ? "down" : "up" );
 },

 _getDragHorizontalDirection: function() {
  var delta = this.positionAbs.left - this.lastPositionAbs.left;
  return delta !== 0 && ( delta > 0 ? "right" : "left" );
 },

 refresh: function( event ) {
  this._refreshItems( event );
  this._setHandleClassName();
  this.refreshPositions();
  return this;
 },

 _connectWith: function() {
  var options = this.options;
  return options.connectWith.constructor === String ?
   [ options.connectWith ] :
   options.connectWith;
 },

 _getItemsAsjQuery: function( connected ) {

  var i, j, cur, inst,
   items = [],
   queries = [],
   connectWith = this._connectWith();

  if ( connectWith && connected ) {
   for ( i = connectWith.length - 1; i >= 0; i-- ) {
    cur = $( connectWith[ i ], this.document[ 0 ] );
    for ( j = cur.length - 1; j >= 0; j-- ) {
     inst = $.data( cur[ j ], this.widgetFullName );
     if ( inst && inst !== this && !inst.options.disabled ) {
      queries.push( [ $.isFunction( inst.options.items ) ?
       inst.options.items.call( inst.element ) :
       $( inst.options.items, inst.element )
        .not( ".ui-sortable-helper" )
        .not( ".ui-sortable-placeholder" ), inst ] );
     }
    }
   }
  }

  queries.push( [ $.isFunction( this.options.items ) ?
   this.options.items
    .call( this.element, null, { options: this.options, item: this.currentItem } ) :
   $( this.options.items, this.element )
    .not( ".ui-sortable-helper" )
    .not( ".ui-sortable-placeholder" ), this ] );

  function addItems() {
   items.push( this );
  }
  for ( i = queries.length - 1; i >= 0; i-- ) {
   queries[ i ][ 0 ].each( addItems );
  }

  return $( items );

 },

 _removeCurrentsFromItems: function() {

  var list = this.currentItem.find( ":data(" + this.widgetName + "-item)" );

  this.items = $.grep( this.items, function( item ) {
   for ( var j = 0; j < list.length; j++ ) {
    if ( list[ j ] === item.item[ 0 ] ) {
     return false;
    }
   }
   return true;
  } );

 },

 _refreshItems: function( event ) {

  this.items = [];
  this.containers = [ this ];

  var i, j, cur, inst, targetData, _queries, item, queriesLength,
   items = this.items,
   queries = [ [ $.isFunction( this.options.items ) ?
    this.options.items.call( this.element[ 0 ], event, { item: this.currentItem } ) :
    $( this.options.items, this.element ), this ] ],
   connectWith = this._connectWith();

  //Shouldn't be run the first time through due to massive slow-down
  if ( connectWith && this.ready ) {
   for ( i = connectWith.length - 1; i >= 0; i-- ) {
    cur = $( connectWith[ i ], this.document[ 0 ] );
    for ( j = cur.length - 1; j >= 0; j-- ) {
     inst = $.data( cur[ j ], this.widgetFullName );
     if ( inst && inst !== this && !inst.options.disabled ) {
      queries.push( [ $.isFunction( inst.options.items ) ?
       inst.options.items
        .call( inst.element[ 0 ], event, { item: this.currentItem } ) :
       $( inst.options.items, inst.element ), inst ] );
      this.containers.push( inst );
     }
    }
   }
  }

  for ( i = queries.length - 1; i >= 0; i-- ) {
   targetData = queries[ i ][ 1 ];
   _queries = queries[ i ][ 0 ];

   for ( j = 0, queriesLength = _queries.length; j < queriesLength; j++ ) {
    item = $( _queries[ j ] );

    // Data for target checking (mouse manager)
    item.data( this.widgetName + "-item", targetData );

    items.push( {
     item: item,
     instance: targetData,
     width: 0, height: 0,
     left: 0, top: 0
    } );
   }
  }

 },

 refreshPositions: function( fast ) {

  // Determine whether items are being displayed horizontally
  this.floating = this.items.length ?
   this.options.axis === "x" || this._isFloating( this.items[ 0 ].item ) :
   false;

  //This has to be redone because due to the item being moved out/into the offsetParent,
  // the offsetParent's position will change
  if ( this.offsetParent && this.helper ) {
   this.offset.parent = this._getParentOffset();
  }

  var i, item, t, p;

  for ( i = this.items.length - 1; i >= 0; i-- ) {
   item = this.items[ i ];

   //We ignore calculating positions of all connected containers when we're not over them
   if ( item.instance !== this.currentContainer && this.currentContainer &&
     item.item[ 0 ] !== this.currentItem[ 0 ] ) {
    continue;
   }

   t = this.options.toleranceElement ?
    $( this.options.toleranceElement, item.item ) :
    item.item;

   if ( !fast ) {
    item.width = t.outerWidth();
    item.height = t.outerHeight();
   }

   p = t.offset();
   item.left = p.left;
   item.top = p.top;
  }

  if ( this.options.custom && this.options.custom.refreshContainers ) {
   this.options.custom.refreshContainers.call( this );
  } else {
   for ( i = this.containers.length - 1; i >= 0; i-- ) {
    p = this.containers[ i ].element.offset();
    this.containers[ i ].containerCache.left = p.left;
    this.containers[ i ].containerCache.top = p.top;
    this.containers[ i ].containerCache.width =
     this.containers[ i ].element.outerWidth();
    this.containers[ i ].containerCache.height =
     this.containers[ i ].element.outerHeight();
   }
  }

  return this;
 },

 _createPlaceholder: function( that ) {
  that = that || this;
  var className,
   o = that.options;

  if ( !o.placeholder || o.placeholder.constructor === String ) {
   className = o.placeholder;
   o.placeholder = {
    element: function() {

     var nodeName = that.currentItem[ 0 ].nodeName.toLowerCase(),
      element = $( "<" + nodeName + ">", that.document[ 0 ] );

      that._addClass( element, "ui-sortable-placeholder",
        className || that.currentItem[ 0 ].className )
       ._removeClass( element, "ui-sortable-helper" );

     if ( nodeName === "tbody" ) {
      that._createTrPlaceholder(
       that.currentItem.find( "tr" ).eq( 0 ),
       $( "<tr>", that.document[ 0 ] ).appendTo( element )
      );
     } else if ( nodeName === "tr" ) {
      that._createTrPlaceholder( that.currentItem, element );
     } else if ( nodeName === "img" ) {
      element.attr( "src", that.currentItem.attr( "src" ) );
     }

     if ( !className ) {
      element.css( "visibility", "hidden" );
     }

     return element;
    },
    update: function( container, p ) {

     // 1. If a className is set as 'placeholder option, we don't force sizes -
     // the class is responsible for that
     // 2. The option 'forcePlaceholderSize can be enabled to force it even if a
     // class name is specified
     if ( className && !o.forcePlaceholderSize ) {
      return;
     }

     //If the element doesn't have a actual height by itself (without styles coming
     // from a stylesheet), it receives the inline height from the dragged item
     if ( !p.height() ) {
      p.height(
       that.currentItem.innerHeight() -
       parseInt( that.currentItem.css( "paddingTop" ) || 0, 10 ) -
       parseInt( that.currentItem.css( "paddingBottom" ) || 0, 10 ) );
     }
     if ( !p.width() ) {
      p.width(
       that.currentItem.innerWidth() -
       parseInt( that.currentItem.css( "paddingLeft" ) || 0, 10 ) -
       parseInt( that.currentItem.css( "paddingRight" ) || 0, 10 ) );
     }
    }
   };
  }

  //Create the placeholder
  that.placeholder = $( o.placeholder.element.call( that.element, that.currentItem ) );

  //Append it after the actual current item
  that.currentItem.after( that.placeholder );

  //Update the size of the placeholder (TODO: Logic to fuzzy, see line 316/317)
  o.placeholder.update( that, that.placeholder );

 },

 _createTrPlaceholder: function( sourceTr, targetTr ) {
  var that = this;

  sourceTr.children().each( function() {
   $( "<td>&#160;</td>", that.document[ 0 ] )
    .attr( "colspan", $( this ).attr( "colspan" ) || 1 )
    .appendTo( targetTr );
  } );
 },

 _contactContainers: function( event ) {
  var i, j, dist, itemWithLeastDistance, posProperty, sizeProperty, cur, nearBottom,
   floating, axis,
   innermostContainer = null,
   innermostIndex = null;

  // Get innermost container that intersects with item
  for ( i = this.containers.length - 1; i >= 0; i-- ) {

   // Never consider a container that's located within the item itself
   if ( $.contains( this.currentItem[ 0 ], this.containers[ i ].element[ 0 ] ) ) {
    continue;
   }

   if ( this._intersectsWith( this.containers[ i ].containerCache ) ) {

    // If we've already found a container and it's more "inner" than this, then continue
    if ( innermostContainer &&
      $.contains(
       this.containers[ i ].element[ 0 ],
       innermostContainer.element[ 0 ] ) ) {
     continue;
    }

    innermostContainer = this.containers[ i ];
    innermostIndex = i;

   } else {

    // container doesn't intersect. trigger "out" event if necessary
    if ( this.containers[ i ].containerCache.over ) {
     this.containers[ i ]._trigger( "out", event, this._uiHash( this ) );
     this.containers[ i ].containerCache.over = 0;
    }
   }

  }

  // If no intersecting containers found, return
  if ( !innermostContainer ) {
   return;
  }

  // Move the item into the container if it's not there already
  if ( this.containers.length === 1 ) {
   if ( !this.containers[ innermostIndex ].containerCache.over ) {
    this.containers[ innermostIndex ]._trigger( "over", event, this._uiHash( this ) );
    this.containers[ innermostIndex ].containerCache.over = 1;
   }
  } else {

   // When entering a new container, we will find the item with the least distance and
   // append our item near it
   dist = 10000;
   itemWithLeastDistance = null;
   floating = innermostContainer.floating || this._isFloating( this.currentItem );
   posProperty = floating ? "left" : "top";
   sizeProperty = floating ? "width" : "height";
   axis = floating ? "pageX" : "pageY";

   for ( j = this.items.length - 1; j >= 0; j-- ) {
    if ( !$.contains(
      this.containers[ innermostIndex ].element[ 0 ], this.items[ j ].item[ 0 ] )
    ) {
     continue;
    }
    if ( this.items[ j ].item[ 0 ] === this.currentItem[ 0 ] ) {
     continue;
    }

    cur = this.items[ j ].item.offset()[ posProperty ];
    nearBottom = false;
    if ( event[ axis ] - cur > this.items[ j ][ sizeProperty ] / 2 ) {
     nearBottom = true;
    }

    if ( Math.abs( event[ axis ] - cur ) < dist ) {
     dist = Math.abs( event[ axis ] - cur );
     itemWithLeastDistance = this.items[ j ];
     this.direction = nearBottom ? "up" : "down";
    }
   }

   //Check if dropOnEmpty is enabled
   if ( !itemWithLeastDistance && !this.options.dropOnEmpty ) {
    return;
   }

   if ( this.currentContainer === this.containers[ innermostIndex ] ) {
    if ( !this.currentContainer.containerCache.over ) {
     this.containers[ innermostIndex ]._trigger( "over", event, this._uiHash() );
     this.currentContainer.containerCache.over = 1;
    }
    return;
   }

   itemWithLeastDistance ?
    this._rearrange( event, itemWithLeastDistance, null, true ) :
    this._rearrange( event, null, this.containers[ innermostIndex ].element, true );
   this._trigger( "change", event, this._uiHash() );
   this.containers[ innermostIndex ]._trigger( "change", event, this._uiHash( this ) );
   this.currentContainer = this.containers[ innermostIndex ];

   //Update the placeholder
   this.options.placeholder.update( this.currentContainer, this.placeholder );

   this.containers[ innermostIndex ]._trigger( "over", event, this._uiHash( this ) );
   this.containers[ innermostIndex ].containerCache.over = 1;
  }

 },

 _createHelper: function( event ) {

  var o = this.options,
   helper = $.isFunction( o.helper ) ?
    $( o.helper.apply( this.element[ 0 ], [ event, this.currentItem ] ) ) :
    ( o.helper === "clone" ? this.currentItem.clone() : this.currentItem );

  //Add the helper to the DOM if that didn't happen already
  if ( !helper.parents( "body" ).length ) {
   $( o.appendTo !== "parent" ?
    o.appendTo :
    this.currentItem[ 0 ].parentNode )[ 0 ].appendChild( helper[ 0 ] );
  }

  if ( helper[ 0 ] === this.currentItem[ 0 ] ) {
   this._storedCSS = {
    width: this.currentItem[ 0 ].style.width,
    height: this.currentItem[ 0 ].style.height,
    position: this.currentItem.css( "position" ),
    top: this.currentItem.css( "top" ),
    left: this.currentItem.css( "left" )
   };
  }

  if ( !helper[ 0 ].style.width || o.forceHelperSize ) {
   helper.width( this.currentItem.width() );
  }
  if ( !helper[ 0 ].style.height || o.forceHelperSize ) {
   helper.height( this.currentItem.height() );
  }

  return helper;

 },

 _adjustOffsetFromHelper: function( obj ) {
  if ( typeof obj === "string" ) {
   obj = obj.split( " " );
  }
  if ( $.isArray( obj ) ) {
   obj = { left: +obj[ 0 ], top: +obj[ 1 ] || 0 };
  }
  if ( "left" in obj ) {
   this.offset.click.left = obj.left + this.margins.left;
  }
  if ( "right" in obj ) {
   this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
  }
  if ( "top" in obj ) {
   this.offset.click.top = obj.top + this.margins.top;
  }
  if ( "bottom" in obj ) {
   this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
  }
 },

 _getParentOffset: function() {

  //Get the offsetParent and cache its position
  this.offsetParent = this.helper.offsetParent();
  var po = this.offsetParent.offset();

  // This is a special case where we need to modify a offset calculated on start, since the
  // following happened:
  // 1. The position of the helper is absolute, so it's position is calculated based on the
  // next positioned parent
  // 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't
  // the document, which means that the scroll is included in the initial calculation of the
  // offset of the parent, and never recalculated upon drag
  if ( this.cssPosition === "absolute" && this.scrollParent[ 0 ] !== this.document[ 0 ] &&
    $.contains( this.scrollParent[ 0 ], this.offsetParent[ 0 ] ) ) {
   po.left += this.scrollParent.scrollLeft();
   po.top += this.scrollParent.scrollTop();
  }

  // This needs to be actually done for all browsers, since pageX/pageY includes this
  // information with an ugly IE fix
  if ( this.offsetParent[ 0 ] === this.document[ 0 ].body ||
    ( this.offsetParent[ 0 ].tagName &&
    this.offsetParent[ 0 ].tagName.toLowerCase() === "html" && $.ui.ie ) ) {
   po = { top: 0, left: 0 };
  }

  return {
   top: po.top + ( parseInt( this.offsetParent.css( "borderTopWidth" ), 10 ) || 0 ),
   left: po.left + ( parseInt( this.offsetParent.css( "borderLeftWidth" ), 10 ) || 0 )
  };

 },

 _getRelativeOffset: function() {

  if ( this.cssPosition === "relative" ) {
   var p = this.currentItem.position();
   return {
    top: p.top - ( parseInt( this.helper.css( "top" ), 10 ) || 0 ) +
     this.scrollParent.scrollTop(),
    left: p.left - ( parseInt( this.helper.css( "left" ), 10 ) || 0 ) +
     this.scrollParent.scrollLeft()
   };
  } else {
   return { top: 0, left: 0 };
  }

 },

 _cacheMargins: function() {
  this.margins = {
   left: ( parseInt( this.currentItem.css( "marginLeft" ), 10 ) || 0 ),
   top: ( parseInt( this.currentItem.css( "marginTop" ), 10 ) || 0 )
  };
 },

 _cacheHelperProportions: function() {
  this.helperProportions = {
   width: this.helper.outerWidth(),
   height: this.helper.outerHeight()
  };
 },

 _setContainment: function() {

  var ce, co, over,
   o = this.options;
  if ( o.containment === "parent" ) {
   o.containment = this.helper[ 0 ].parentNode;
  }
  if ( o.containment === "document" || o.containment === "window" ) {
   this.containment = [
    0 - this.offset.relative.left - this.offset.parent.left,
    0 - this.offset.relative.top - this.offset.parent.top,
    o.containment === "document" ?
     this.document.width() :
     this.window.width() - this.helperProportions.width - this.margins.left,
    ( o.containment === "document" ?
     ( this.document.height() || document.body.parentNode.scrollHeight ) :
     this.window.height() || this.document[ 0 ].body.parentNode.scrollHeight
    ) - this.helperProportions.height - this.margins.top
   ];
  }

  if ( !( /^(document|window|parent)$/ ).test( o.containment ) ) {
   ce = $( o.containment )[ 0 ];
   co = $( o.containment ).offset();
   over = ( $( ce ).css( "overflow" ) !== "hidden" );

   this.containment = [
    co.left + ( parseInt( $( ce ).css( "borderLeftWidth" ), 10 ) || 0 ) +
     ( parseInt( $( ce ).css( "paddingLeft" ), 10 ) || 0 ) - this.margins.left,
    co.top + ( parseInt( $( ce ).css( "borderTopWidth" ), 10 ) || 0 ) +
     ( parseInt( $( ce ).css( "paddingTop" ), 10 ) || 0 ) - this.margins.top,
    co.left + ( over ? Math.max( ce.scrollWidth, ce.offsetWidth ) : ce.offsetWidth ) -
     ( parseInt( $( ce ).css( "borderLeftWidth" ), 10 ) || 0 ) -
     ( parseInt( $( ce ).css( "paddingRight" ), 10 ) || 0 ) -
     this.helperProportions.width - this.margins.left,
    co.top + ( over ? Math.max( ce.scrollHeight, ce.offsetHeight ) : ce.offsetHeight ) -
     ( parseInt( $( ce ).css( "borderTopWidth" ), 10 ) || 0 ) -
     ( parseInt( $( ce ).css( "paddingBottom" ), 10 ) || 0 ) -
     this.helperProportions.height - this.margins.top
   ];
  }

 },

 _convertPositionTo: function( d, pos ) {

  if ( !pos ) {
   pos = this.position;
  }
  var mod = d === "absolute" ? 1 : -1,
   scroll = this.cssPosition === "absolute" &&
    !( this.scrollParent[ 0 ] !== this.document[ 0 ] &&
    $.contains( this.scrollParent[ 0 ], this.offsetParent[ 0 ] ) ) ?
     this.offsetParent :
     this.scrollParent,
   scrollIsRootNode = ( /(html|body)/i ).test( scroll[ 0 ].tagName );

  return {
   top: (

    // The absolute mouse position
    pos.top +

    // Only for relative positioned nodes: Relative offset from element to offset parent
    this.offset.relative.top * mod +

    // The offsetParent's offset without borders (offset + border)
    this.offset.parent.top * mod -
    ( ( this.cssPosition === "fixed" ?
     -this.scrollParent.scrollTop() :
     ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ) * mod )
   ),
   left: (

    // The absolute mouse position
    pos.left +

    // Only for relative positioned nodes: Relative offset from element to offset parent
    this.offset.relative.left * mod +

    // The offsetParent's offset without borders (offset + border)
    this.offset.parent.left * mod -
    ( ( this.cssPosition === "fixed" ?
     -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 :
     scroll.scrollLeft() ) * mod )
   )
  };

 },

 _generatePosition: function( event ) {

  var top, left,
   o = this.options,
   pageX = event.pageX,
   pageY = event.pageY,
   scroll = this.cssPosition === "absolute" &&
    !( this.scrollParent[ 0 ] !== this.document[ 0 ] &&
    $.contains( this.scrollParent[ 0 ], this.offsetParent[ 0 ] ) ) ?
     this.offsetParent :
     this.scrollParent,
    scrollIsRootNode = ( /(html|body)/i ).test( scroll[ 0 ].tagName );

  // This is another very weird special case that only happens for relative elements:
  // 1. If the css position is relative
  // 2. and the scroll parent is the document or similar to the offset parent
  // we have to refresh the relative offset during the scroll so there are no jumps
  if ( this.cssPosition === "relative" && !( this.scrollParent[ 0 ] !== this.document[ 0 ] &&
    this.scrollParent[ 0 ] !== this.offsetParent[ 0 ] ) ) {
   this.offset.relative = this._getRelativeOffset();
  }

  /*
   * - Position constraining -
   * Constrain the position to a mix of grid, containment.
   */

  if ( this.originalPosition ) { //If we are not dragging yet, we won't check for options

   if ( this.containment ) {
    if ( event.pageX - this.offset.click.left < this.containment[ 0 ] ) {
     pageX = this.containment[ 0 ] + this.offset.click.left;
    }
    if ( event.pageY - this.offset.click.top < this.containment[ 1 ] ) {
     pageY = this.containment[ 1 ] + this.offset.click.top;
    }
    if ( event.pageX - this.offset.click.left > this.containment[ 2 ] ) {
     pageX = this.containment[ 2 ] + this.offset.click.left;
    }
    if ( event.pageY - this.offset.click.top > this.containment[ 3 ] ) {
     pageY = this.containment[ 3 ] + this.offset.click.top;
    }
   }

   if ( o.grid ) {
    top = this.originalPageY + Math.round( ( pageY - this.originalPageY ) /
     o.grid[ 1 ] ) * o.grid[ 1 ];
    pageY = this.containment ?
     ( ( top - this.offset.click.top >= this.containment[ 1 ] &&
      top - this.offset.click.top <= this.containment[ 3 ] ) ?
       top :
       ( ( top - this.offset.click.top >= this.containment[ 1 ] ) ?
        top - o.grid[ 1 ] : top + o.grid[ 1 ] ) ) :
        top;

    left = this.originalPageX + Math.round( ( pageX - this.originalPageX ) /
     o.grid[ 0 ] ) * o.grid[ 0 ];
    pageX = this.containment ?
     ( ( left - this.offset.click.left >= this.containment[ 0 ] &&
      left - this.offset.click.left <= this.containment[ 2 ] ) ?
       left :
       ( ( left - this.offset.click.left >= this.containment[ 0 ] ) ?
        left - o.grid[ 0 ] : left + o.grid[ 0 ] ) ) :
        left;
   }

  }

  return {
   top: (

    // The absolute mouse position
    pageY -

    // Click offset (relative to the element)
    this.offset.click.top -

    // Only for relative positioned nodes: Relative offset from element to offset parent
    this.offset.relative.top -

    // The offsetParent's offset without borders (offset + border)
    this.offset.parent.top +
    ( ( this.cssPosition === "fixed" ?
     -this.scrollParent.scrollTop() :
     ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ) )
   ),
   left: (

    // The absolute mouse position
    pageX -

    // Click offset (relative to the element)
    this.offset.click.left -

    // Only for relative positioned nodes: Relative offset from element to offset parent
    this.offset.relative.left -

    // The offsetParent's offset without borders (offset + border)
    this.offset.parent.left +
    ( ( this.cssPosition === "fixed" ?
     -this.scrollParent.scrollLeft() :
     scrollIsRootNode ? 0 : scroll.scrollLeft() ) )
   )
  };

 },

 _rearrange: function( event, i, a, hardRefresh ) {

  a ? a[ 0 ].appendChild( this.placeholder[ 0 ] ) :
   i.item[ 0 ].parentNode.insertBefore( this.placeholder[ 0 ],
    ( this.direction === "down" ? i.item[ 0 ] : i.item[ 0 ].nextSibling ) );

  //Various things done here to improve the performance:
  // 1. we create a setTimeout, that calls refreshPositions
  // 2. on the instance, we have a counter variable, that get's higher after every append
  // 3. on the local scope, we copy the counter variable, and check in the timeout,
  // if it's still the same
  // 4. this lets only the last addition to the timeout stack through
  this.counter = this.counter ? ++this.counter : 1;
  var counter = this.counter;

  this._delay( function() {
   if ( counter === this.counter ) {

    //Precompute after each DOM insertion, NOT on mousemove
    this.refreshPositions( !hardRefresh );
   }
  } );

 },

 _clear: function( event, noPropagation ) {

  this.reverting = false;

  // We delay all events that have to be triggered to after the point where the placeholder
  // has been removed and everything else normalized again
  var i,
   delayedTriggers = [];

  // We first have to update the dom position of the actual currentItem
  // Note: don't do it if the current item is already removed (by a user), or it gets
  // reappended (see #4088)
  if ( !this._noFinalSort && this.currentItem.parent().length ) {
   this.placeholder.before( this.currentItem );
  }
  this._noFinalSort = null;

  if ( this.helper[ 0 ] === this.currentItem[ 0 ] ) {
   for ( i in this._storedCSS ) {
    if ( this._storedCSS[ i ] === "auto" || this._storedCSS[ i ] === "static" ) {
     this._storedCSS[ i ] = "";
    }
   }
   this.currentItem.css( this._storedCSS );
   this._removeClass( this.currentItem, "ui-sortable-helper" );
  } else {
   this.currentItem.show();
  }

  if ( this.fromOutside && !noPropagation ) {
   delayedTriggers.push( function( event ) {
    this._trigger( "receive", event, this._uiHash( this.fromOutside ) );
   } );
  }
  if ( ( this.fromOutside ||
    this.domPosition.prev !==
    this.currentItem.prev().not( ".ui-sortable-helper" )[ 0 ] ||
    this.domPosition.parent !== this.currentItem.parent()[ 0 ] ) && !noPropagation ) {

   // Trigger update callback if the DOM position has changed
   delayedTriggers.push( function( event ) {
    this._trigger( "update", event, this._uiHash() );
   } );
  }

  // Check if the items Container has Changed and trigger appropriate
  // events.
  if ( this !== this.currentContainer ) {
   if ( !noPropagation ) {
    delayedTriggers.push( function( event ) {
     this._trigger( "remove", event, this._uiHash() );
    } );
    delayedTriggers.push( ( function( c ) {
     return function( event ) {
      c._trigger( "receive", event, this._uiHash( this ) );
     };
    } ).call( this, this.currentContainer ) );
    delayedTriggers.push( ( function( c ) {
     return function( event ) {
      c._trigger( "update", event, this._uiHash( this ) );
     };
    } ).call( this, this.currentContainer ) );
   }
  }

  //Post events to containers
  function delayEvent( type, instance, container ) {
   return function( event ) {
    container._trigger( type, event, instance._uiHash( instance ) );
   };
  }
  for ( i = this.containers.length - 1; i >= 0; i-- ) {
   if ( !noPropagation ) {
    delayedTriggers.push( delayEvent( "deactivate", this, this.containers[ i ] ) );
   }
   if ( this.containers[ i ].containerCache.over ) {
    delayedTriggers.push( delayEvent( "out", this, this.containers[ i ] ) );
    this.containers[ i ].containerCache.over = 0;
   }
  }

  //Do what was originally in plugins
  if ( this.storedCursor ) {
   this.document.find( "body" ).css( "cursor", this.storedCursor );
   this.storedStylesheet.remove();
  }
  if ( this._storedOpacity ) {
   this.helper.css( "opacity", this._storedOpacity );
  }
  if ( this._storedZIndex ) {
   this.helper.css( "zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex );
  }

  this.dragging = false;

  if ( !noPropagation ) {
   this._trigger( "beforeStop", event, this._uiHash() );
  }

  //$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately,
  // it unbinds ALL events from the original node!
  this.placeholder[ 0 ].parentNode.removeChild( this.placeholder[ 0 ] );

  if ( !this.cancelHelperRemoval ) {
   if ( this.helper[ 0 ] !== this.currentItem[ 0 ] ) {
    this.helper.remove();
   }
   this.helper = null;
  }

  if ( !noPropagation ) {
   for ( i = 0; i < delayedTriggers.length; i++ ) {

    // Trigger all delayed events
    delayedTriggers[ i ].call( this, event );
   }
   this._trigger( "stop", event, this._uiHash() );
  }

  this.fromOutside = false;
  return !this.cancelHelperRemoval;

 },

 _trigger: function() {
  if ( $.Widget.prototype._trigger.apply( this, arguments ) === false ) {
   this.cancel();
  }
 },

 _uiHash: function( _inst ) {
  var inst = _inst || this;
  return {
   helper: inst.helper,
   placeholder: inst.placeholder || $( [] ),
   position: inst.position,
   originalPosition: inst.originalPosition,
   offset: inst.positionAbs,
   item: inst.currentItem,
   sender: _inst ? _inst.element : null
  };
 }

} );


/*!
 * jQuery UI Menu 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Menu
//>>group: Widgets
//>>description: Creates nestable menus.
//>>docs: http://api.jqueryui.com/menu/
//>>demos: http://jqueryui.com/menu/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/menu.css
//>>css.theme: ../../themes/base/theme.css



var widgetsMenu = $.widget( "ui.menu", {
 version: "1.12.1",
 defaultElement: "<ul>",
 delay: 300,
 options: {
  icons: {
   submenu: "ui-icon-caret-1-e"
  },
  items: "> *",
  menus: "ul",
  position: {
   my: "left top",
   at: "right top"
  },
  role: "menu",

  // Callbacks
  blur: null,
  focus: null,
  select: null
 },

 _create: function() {
  this.activeMenu = this.element;

  // Flag used to prevent firing of the click handler
  // as the event bubbles up through nested menus
  this.mouseHandled = false;
  this.element
   .uniqueId()
   .attr( {
    role: this.options.role,
    tabIndex: 0
   } );

  this._addClass( "ui-menu", "ui-widget ui-widget-content" );
  this._on( {

   // Prevent focus from sticking to links inside menu after clicking
   // them (focus should always stay on UL during navigation).
   "mousedown .ui-menu-item": function( event ) {
    event.preventDefault();
   },
   "click .ui-menu-item": function( event ) {
    var target = $( event.target );
    var active = $( $.ui.safeActiveElement( this.document[ 0 ] ) );
    if ( !this.mouseHandled && target.not( ".ui-state-disabled" ).length ) {
     this.select( event );

     // Only set the mouseHandled flag if the event will bubble, see #9469.
     if ( !event.isPropagationStopped() ) {
      this.mouseHandled = true;
     }

     // Open submenu on click
     if ( target.has( ".ui-menu" ).length ) {
      this.expand( event );
     } else if ( !this.element.is( ":focus" ) &&
       active.closest( ".ui-menu" ).length ) {

      // Redirect focus to the menu
      this.element.trigger( "focus", [ true ] );

      // If the active item is on the top level, let it stay active.
      // Otherwise, blur the active item since it is no longer visible.
      if ( this.active && this.active.parents( ".ui-menu" ).length === 1 ) {
       clearTimeout( this.timer );
      }
     }
    }
   },
   "mouseenter .ui-menu-item": function( event ) {

    // Ignore mouse events while typeahead is active, see #10458.
    // Prevents focusing the wrong item when typeahead causes a scroll while the mouse
    // is over an item in the menu
    if ( this.previousFilter ) {
     return;
    }

    var actualTarget = $( event.target ).closest( ".ui-menu-item" ),
     target = $( event.currentTarget );

    // Ignore bubbled events on parent items, see #11641
    if ( actualTarget[ 0 ] !== target[ 0 ] ) {
     return;
    }

    // Remove ui-state-active class from siblings of the newly focused menu item
    // to avoid a jump caused by adjacent elements both having a class with a border
    this._removeClass( target.siblings().children( ".ui-state-active" ),
     null, "ui-state-active" );
    this.focus( event, target );
   },
   mouseleave: "collapseAll",
   "mouseleave .ui-menu": "collapseAll",
   focus: function( event, keepActiveItem ) {

    // If there's already an active item, keep it active
    // If not, activate the first item
    var item = this.active || this.element.find( this.options.items ).eq( 0 );

    if ( !keepActiveItem ) {
     this.focus( event, item );
    }
   },
   blur: function( event ) {
    this._delay( function() {
     var notContained = !$.contains(
      this.element[ 0 ],
      $.ui.safeActiveElement( this.document[ 0 ] )
     );
     if ( notContained ) {
      this.collapseAll( event );
     }
    } );
   },
   keydown: "_keydown"
  } );

  this.refresh();

  // Clicks outside of a menu collapse any open menus
  this._on( this.document, {
   click: function( event ) {
    if ( this._closeOnDocumentClick( event ) ) {
     this.collapseAll( event );
    }

    // Reset the mouseHandled flag
    this.mouseHandled = false;
   }
  } );
 },

 _destroy: function() {
  var items = this.element.find( ".ui-menu-item" )
    .removeAttr( "role aria-disabled" ),
   submenus = items.children( ".ui-menu-item-wrapper" )
    .removeUniqueId()
    .removeAttr( "tabIndex role aria-haspopup" );

  // Destroy (sub)menus
  this.element
   .removeAttr( "aria-activedescendant" )
   .find( ".ui-menu" ).addBack()
    .removeAttr( "role aria-labelledby aria-expanded aria-hidden aria-disabled " +
     "tabIndex" )
    .removeUniqueId()
    .show();

  submenus.children().each( function() {
   var elem = $( this );
   if ( elem.data( "ui-menu-submenu-caret" ) ) {
    elem.remove();
   }
  } );
 },

 _keydown: function( event ) {
  var match, prev, character, skip,
   preventDefault = true;

  switch ( event.keyCode ) {
  case $.ui.keyCode.PAGE_UP:
   this.previousPage( event );
   break;
  case $.ui.keyCode.PAGE_DOWN:
   this.nextPage( event );
   break;
  case $.ui.keyCode.HOME:
   this._move( "first", "first", event );
   break;
  case $.ui.keyCode.END:
   this._move( "last", "last", event );
   break;
  case $.ui.keyCode.UP:
   this.previous( event );
   break;
  case $.ui.keyCode.DOWN:
   this.next( event );
   break;
  case $.ui.keyCode.LEFT:
   this.collapse( event );
   break;
  case $.ui.keyCode.RIGHT:
   if ( this.active && !this.active.is( ".ui-state-disabled" ) ) {
    this.expand( event );
   }
   break;
  case $.ui.keyCode.ENTER:
  case $.ui.keyCode.SPACE:
   this._activate( event );
   break;
  case $.ui.keyCode.ESCAPE:
   this.collapse( event );
   break;
  default:
   preventDefault = false;
   prev = this.previousFilter || "";
   skip = false;

   // Support number pad values
   character = event.keyCode >= 96 && event.keyCode <= 105 ?
    ( event.keyCode - 96 ).toString() : String.fromCharCode( event.keyCode );

   clearTimeout( this.filterTimer );

   if ( character === prev ) {
    skip = true;
   } else {
    character = prev + character;
   }

   match = this._filterMenuItems( character );
   match = skip && match.index( this.active.next() ) !== -1 ?
    this.active.nextAll( ".ui-menu-item" ) :
    match;

   // If no matches on the current filter, reset to the last character pressed
   // to move down the menu to the first item that starts with that character
   if ( !match.length ) {
    character = String.fromCharCode( event.keyCode );
    match = this._filterMenuItems( character );
   }

   if ( match.length ) {
    this.focus( event, match );
    this.previousFilter = character;
    this.filterTimer = this._delay( function() {
     delete this.previousFilter;
    }, 1000 );
   } else {
    delete this.previousFilter;
   }
  }

  if ( preventDefault ) {
   event.preventDefault();
  }
 },

 _activate: function( event ) {
  if ( this.active && !this.active.is( ".ui-state-disabled" ) ) {
   if ( this.active.children( "[aria-haspopup='true']" ).length ) {
    this.expand( event );
   } else {
    this.select( event );
   }
  }
 },

 refresh: function() {
  var menus, items, newSubmenus, newItems, newWrappers,
   that = this,
   icon = this.options.icons.submenu,
   submenus = this.element.find( this.options.menus );

  this._toggleClass( "ui-menu-icons", null, !!this.element.find( ".ui-icon" ).length );

  // Initialize nested menus
  newSubmenus = submenus.filter( ":not(.ui-menu)" )
   .hide()
   .attr( {
    role: this.options.role,
    "aria-hidden": "true",
    "aria-expanded": "false"
   } )
   .each( function() {
    var menu = $( this ),
     item = menu.prev(),
     submenuCaret = $( "<span>" ).data( "ui-menu-submenu-caret", true );

    that._addClass( submenuCaret, "ui-menu-icon", "ui-icon " + icon );
    item
     .attr( "aria-haspopup", "true" )
     .prepend( submenuCaret );
    menu.attr( "aria-labelledby", item.attr( "id" ) );
   } );

  this._addClass( newSubmenus, "ui-menu", "ui-widget ui-widget-content ui-front" );

  menus = submenus.add( this.element );
  items = menus.find( this.options.items );

  // Initialize menu-items containing spaces and/or dashes only as dividers
  items.not( ".ui-menu-item" ).each( function() {
   var item = $( this );
   if ( that._isDivider( item ) ) {
    that._addClass( item, "ui-menu-divider", "ui-widget-content" );
   }
  } );

  // Don't refresh list items that are already adapted
  newItems = items.not( ".ui-menu-item, .ui-menu-divider" );
  newWrappers = newItems.children()
   .not( ".ui-menu" )
    .uniqueId()
    .attr( {
     tabIndex: -1,
     role: this._itemRole()
    } );
  this._addClass( newItems, "ui-menu-item" )
   ._addClass( newWrappers, "ui-menu-item-wrapper" );

  // Add aria-disabled attribute to any disabled menu item
  items.filter( ".ui-state-disabled" ).attr( "aria-disabled", "true" );

  // If the active item has been removed, blur the menu
  if ( this.active && !$.contains( this.element[ 0 ], this.active[ 0 ] ) ) {
   this.blur();
  }
 },

 _itemRole: function() {
  return {
   menu: "menuitem",
   listbox: "option"
  }[ this.options.role ];
 },

 _setOption: function( key, value ) {
  if ( key === "icons" ) {
   var icons = this.element.find( ".ui-menu-icon" );
   this._removeClass( icons, null, this.options.icons.submenu )
    ._addClass( icons, null, value.submenu );
  }
  this._super( key, value );
 },

 _setOptionDisabled: function( value ) {
  this._super( value );

  this.element.attr( "aria-disabled", String( value ) );
  this._toggleClass( null, "ui-state-disabled", !!value );
 },

 focus: function( event, item ) {
  var nested, focused, activeParent;
  this.blur( event, event && event.type === "focus" );

  this._scrollIntoView( item );

  this.active = item.first();

  focused = this.active.children( ".ui-menu-item-wrapper" );
  this._addClass( focused, null, "ui-state-active" );

  // Only update aria-activedescendant if there's a role
  // otherwise we assume focus is managed elsewhere
  if ( this.options.role ) {
   this.element.attr( "aria-activedescendant", focused.attr( "id" ) );
  }

  // Highlight active parent menu item, if any
  activeParent = this.active
   .parent()
    .closest( ".ui-menu-item" )
     .children( ".ui-menu-item-wrapper" );
  this._addClass( activeParent, null, "ui-state-active" );

  if ( event && event.type === "keydown" ) {
   this._close();
  } else {
   this.timer = this._delay( function() {
    this._close();
   }, this.delay );
  }

  nested = item.children( ".ui-menu" );
  if ( nested.length && event && ( /^mouse/.test( event.type ) ) ) {
   this._startOpening( nested );
  }
  this.activeMenu = item.parent();

  this._trigger( "focus", event, { item: item } );
 },

 _scrollIntoView: function( item ) {
  var borderTop, paddingTop, offset, scroll, elementHeight, itemHeight;
  if ( this._hasScroll() ) {
   borderTop = parseFloat( $.css( this.activeMenu[ 0 ], "borderTopWidth" ) ) || 0;
   paddingTop = parseFloat( $.css( this.activeMenu[ 0 ], "paddingTop" ) ) || 0;
   offset = item.offset().top - this.activeMenu.offset().top - borderTop - paddingTop;
   scroll = this.activeMenu.scrollTop();
   elementHeight = this.activeMenu.height();
   itemHeight = item.outerHeight();

   if ( offset < 0 ) {
    this.activeMenu.scrollTop( scroll + offset );
   } else if ( offset + itemHeight > elementHeight ) {
    this.activeMenu.scrollTop( scroll + offset - elementHeight + itemHeight );
   }
  }
 },

 blur: function( event, fromFocus ) {
  if ( !fromFocus ) {
   clearTimeout( this.timer );
  }

  if ( !this.active ) {
   return;
  }

  this._removeClass( this.active.children( ".ui-menu-item-wrapper" ),
   null, "ui-state-active" );

  this._trigger( "blur", event, { item: this.active } );
  this.active = null;
 },

 _startOpening: function( submenu ) {
  clearTimeout( this.timer );

  // Don't open if already open fixes a Firefox bug that caused a .5 pixel
  // shift in the submenu position when mousing over the caret icon
  if ( submenu.attr( "aria-hidden" ) !== "true" ) {
   return;
  }

  this.timer = this._delay( function() {
   this._close();
   this._open( submenu );
  }, this.delay );
 },

 _open: function( submenu ) {
  var position = $.extend( {
   of: this.active
  }, this.options.position );

  clearTimeout( this.timer );
  this.element.find( ".ui-menu" ).not( submenu.parents( ".ui-menu" ) )
   .hide()
   .attr( "aria-hidden", "true" );

  submenu
   .show()
   .removeAttr( "aria-hidden" )
   .attr( "aria-expanded", "true" )
   .position( position );
 },

 collapseAll: function( event, all ) {
  clearTimeout( this.timer );
  this.timer = this._delay( function() {

   // If we were passed an event, look for the submenu that contains the event
   var currentMenu = all ? this.element :
    $( event && event.target ).closest( this.element.find( ".ui-menu" ) );

   // If we found no valid submenu ancestor, use the main menu to close all
   // sub menus anyway
   if ( !currentMenu.length ) {
    currentMenu = this.element;
   }

   this._close( currentMenu );

   this.blur( event );

   // Work around active item staying active after menu is blurred
   this._removeClass( currentMenu.find( ".ui-state-active" ), null, "ui-state-active" );

   this.activeMenu = currentMenu;
  }, this.delay );
 },

 // With no arguments, closes the currently active menu - if nothing is active
 // it closes all menus.  If passed an argument, it will search for menus BELOW
 _close: function( startMenu ) {
  if ( !startMenu ) {
   startMenu = this.active ? this.active.parent() : this.element;
  }

  startMenu.find( ".ui-menu" )
   .hide()
   .attr( "aria-hidden", "true" )
   .attr( "aria-expanded", "false" );
 },

 _closeOnDocumentClick: function( event ) {
  return !$( event.target ).closest( ".ui-menu" ).length;
 },

 _isDivider: function( item ) {

  // Match hyphen, em dash, en dash
  return !/[^\-\u2014\u2013\s]/.test( item.text() );
 },

 collapse: function( event ) {
  var newItem = this.active &&
   this.active.parent().closest( ".ui-menu-item", this.element );
  if ( newItem && newItem.length ) {
   this._close();
   this.focus( event, newItem );
  }
 },

 expand: function( event ) {
  var newItem = this.active &&
   this.active
    .children( ".ui-menu " )
     .find( this.options.items )
      .first();

  if ( newItem && newItem.length ) {
   this._open( newItem.parent() );

   // Delay so Firefox will not hide activedescendant change in expanding submenu from AT
   this._delay( function() {
    this.focus( event, newItem );
   } );
  }
 },

 next: function( event ) {
  this._move( "next", "first", event );
 },

 previous: function( event ) {
  this._move( "prev", "last", event );
 },

 isFirstItem: function() {
  return this.active && !this.active.prevAll( ".ui-menu-item" ).length;
 },

 isLastItem: function() {
  return this.active && !this.active.nextAll( ".ui-menu-item" ).length;
 },

 _move: function( direction, filter, event ) {
  var next;
  if ( this.active ) {
   if ( direction === "first" || direction === "last" ) {
    next = this.active
     [ direction === "first" ? "prevAll" : "nextAll" ]( ".ui-menu-item" )
     .eq( -1 );
   } else {
    next = this.active
     [ direction + "All" ]( ".ui-menu-item" )
     .eq( 0 );
   }
  }
  if ( !next || !next.length || !this.active ) {
   next = this.activeMenu.find( this.options.items )[ filter ]();
  }

  this.focus( event, next );
 },

 nextPage: function( event ) {
  var item, base, height;

  if ( !this.active ) {
   this.next( event );
   return;
  }
  if ( this.isLastItem() ) {
   return;
  }
  if ( this._hasScroll() ) {
   base = this.active.offset().top;
   height = this.element.height();
   this.active.nextAll( ".ui-menu-item" ).each( function() {
    item = $( this );
    return item.offset().top - base - height < 0;
   } );

   this.focus( event, item );
  } else {
   this.focus( event, this.activeMenu.find( this.options.items )
    [ !this.active ? "first" : "last" ]() );
  }
 },

 previousPage: function( event ) {
  var item, base, height;
  if ( !this.active ) {
   this.next( event );
   return;
  }
  if ( this.isFirstItem() ) {
   return;
  }
  if ( this._hasScroll() ) {
   base = this.active.offset().top;
   height = this.element.height();
   this.active.prevAll( ".ui-menu-item" ).each( function() {
    item = $( this );
    return item.offset().top - base + height > 0;
   } );

   this.focus( event, item );
  } else {
   this.focus( event, this.activeMenu.find( this.options.items ).first() );
  }
 },

 _hasScroll: function() {
  return this.element.outerHeight() < this.element.prop( "scrollHeight" );
 },

 select: function( event ) {

  // TODO: It should never be possible to not have an active item at this
  // point, but the tests don't trigger mouseenter before click.
  this.active = this.active || $( event.target ).closest( ".ui-menu-item" );
  var ui = { item: this.active };
  if ( !this.active.has( ".ui-menu" ).length ) {
   this.collapseAll( event, true );
  }
  this._trigger( "select", event, ui );
 },

 _filterMenuItems: function( character ) {
  var escapedCharacter = character.replace( /[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&" ),
   regex = new RegExp( "^" + escapedCharacter, "i" );

  return this.activeMenu
   .find( this.options.items )

    // Only match on items, not dividers or other content (#10571)
    .filter( ".ui-menu-item" )
     .filter( function() {
      return regex.test(
       $.trim( $( this ).children( ".ui-menu-item-wrapper" ).text() ) );
     } );
 }
} );


/*!
 * jQuery UI Autocomplete 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Autocomplete
//>>group: Widgets
//>>description: Lists suggested words as the user is typing.
//>>docs: http://api.jqueryui.com/autocomplete/
//>>demos: http://jqueryui.com/autocomplete/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/autocomplete.css
//>>css.theme: ../../themes/base/theme.css



$.widget( "ui.autocomplete", {
 version: "1.12.1",
 defaultElement: "<input>",
 options: {
  appendTo: null,
  autoFocus: false,
  delay: 300,
  minLength: 1,
  position: {
   my: "left top",
   at: "left bottom",
   collision: "none"
  },
  source: null,

  // Callbacks
  change: null,
  close: null,
  focus: null,
  open: null,
  response: null,
  search: null,
  select: null
 },

 requestIndex: 0,
 pending: 0,

 _create: function() {

  // Some browsers only repeat keydown events, not keypress events,
  // so we use the suppressKeyPress flag to determine if we've already
  // handled the keydown event. #7269
  // Unfortunately the code for & in keypress is the same as the up arrow,
  // so we use the suppressKeyPressRepeat flag to avoid handling keypress
  // events when we know the keydown event was used to modify the
  // search term. #7799
  var suppressKeyPress, suppressKeyPressRepeat, suppressInput,
   nodeName = this.element[ 0 ].nodeName.toLowerCase(),
   isTextarea = nodeName === "textarea",
   isInput = nodeName === "input";

  // Textareas are always multi-line
  // Inputs are always single-line, even if inside a contentEditable element
  // IE also treats inputs as contentEditable
  // All other element types are determined by whether or not they're contentEditable
  this.isMultiLine = isTextarea || !isInput && this._isContentEditable( this.element );

  this.valueMethod = this.element[ isTextarea || isInput ? "val" : "text" ];
  this.isNewMenu = true;

  this._addClass( "ui-autocomplete-input" );
  this.element.attr( "autocomplete", "off" );

  this._on( this.element, {
   keydown: function( event ) {
    if ( this.element.prop( "readOnly" ) ) {
     suppressKeyPress = true;
     suppressInput = true;
     suppressKeyPressRepeat = true;
     return;
    }

    suppressKeyPress = false;
    suppressInput = false;
    suppressKeyPressRepeat = false;
    var keyCode = $.ui.keyCode;
    switch ( event.keyCode ) {
    case keyCode.PAGE_UP:
     suppressKeyPress = true;
     this._move( "previousPage", event );
     break;
    case keyCode.PAGE_DOWN:
     suppressKeyPress = true;
     this._move( "nextPage", event );
     break;
    case keyCode.UP:
     suppressKeyPress = true;
     this._keyEvent( "previous", event );
     break;
    case keyCode.DOWN:
     suppressKeyPress = true;
     this._keyEvent( "next", event );
     break;
    case keyCode.ENTER:

     // when menu is open and has focus
     if ( this.menu.active ) {

      // #6055 - Opera still allows the keypress to occur
      // which causes forms to submit
      suppressKeyPress = true;
      event.preventDefault();
      this.menu.select( event );
     }
     break;
    case keyCode.TAB:
     if ( this.menu.active ) {
      this.menu.select( event );
     }
     break;
    case keyCode.ESCAPE:
     if ( this.menu.element.is( ":visible" ) ) {
      if ( !this.isMultiLine ) {
       this._value( this.term );
      }
      this.close( event );

      // Different browsers have different default behavior for escape
      // Single press can mean undo or clear
      // Double press in IE means clear the whole form
      event.preventDefault();
     }
     break;
    default:
     suppressKeyPressRepeat = true;

     // search timeout should be triggered before the input value is changed
     this._searchTimeout( event );
     break;
    }
   },
   keypress: function( event ) {
    if ( suppressKeyPress ) {
     suppressKeyPress = false;
     if ( !this.isMultiLine || this.menu.element.is( ":visible" ) ) {
      event.preventDefault();
     }
     return;
    }
    if ( suppressKeyPressRepeat ) {
     return;
    }

    // Replicate some key handlers to allow them to repeat in Firefox and Opera
    var keyCode = $.ui.keyCode;
    switch ( event.keyCode ) {
    case keyCode.PAGE_UP:
     this._move( "previousPage", event );
     break;
    case keyCode.PAGE_DOWN:
     this._move( "nextPage", event );
     break;
    case keyCode.UP:
     this._keyEvent( "previous", event );
     break;
    case keyCode.DOWN:
     this._keyEvent( "next", event );
     break;
    }
   },
   input: function( event ) {
    if ( suppressInput ) {
     suppressInput = false;
     event.preventDefault();
     return;
    }
    this._searchTimeout( event );
   },
   focus: function() {
    this.selectedItem = null;
    this.previous = this._value();
   },
   blur: function( event ) {
    if ( this.cancelBlur ) {
     delete this.cancelBlur;
     return;
    }

    clearTimeout( this.searching );
    this.close( event );
    this._change( event );
   }
  } );

  this._initSource();
  this.menu = $( "<ul>" )
   .appendTo( this._appendTo() )
   .menu( {

    // disable ARIA support, the live region takes care of that
    role: null
   } )
   .hide()
   .menu( "instance" );

  this._addClass( this.menu.element, "ui-autocomplete", "ui-front" );
  this._on( this.menu.element, {
   mousedown: function( event ) {

    // prevent moving focus out of the text field
    event.preventDefault();

    // IE doesn't prevent moving focus even with event.preventDefault()
    // so we set a flag to know when we should ignore the blur event
    this.cancelBlur = true;
    this._delay( function() {
     delete this.cancelBlur;

     // Support: IE 8 only
     // Right clicking a menu item or selecting text from the menu items will
     // result in focus moving out of the input. However, we've already received
     // and ignored the blur event because of the cancelBlur flag set above. So
     // we restore focus to ensure that the menu closes properly based on the user's
     // next actions.
     if ( this.element[ 0 ] !== $.ui.safeActiveElement( this.document[ 0 ] ) ) {
      this.element.trigger( "focus" );
     }
    } );
   },
   menufocus: function( event, ui ) {
    var label, item;

    // support: Firefox
    // Prevent accidental activation of menu items in Firefox (#7024 #9118)
    if ( this.isNewMenu ) {
     this.isNewMenu = false;
     if ( event.originalEvent && /^mouse/.test( event.originalEvent.type ) ) {
      this.menu.blur();

      this.document.one( "mousemove", function() {
       $( event.target ).trigger( event.originalEvent );
      } );

      return;
     }
    }

    item = ui.item.data( "ui-autocomplete-item" );
    if ( false !== this._trigger( "focus", event, { item: item } ) ) {

     // use value to match what will end up in the input, if it was a key event
     if ( event.originalEvent && /^key/.test( event.originalEvent.type ) ) {
      this._value( item.value );
     }
    }

    // Announce the value in the liveRegion
    label = ui.item.attr( "aria-label" ) || item.value;
    if ( label && $.trim( label ).length ) {
     this.liveRegion.children().hide();
     $( "<div>" ).text( label ).appendTo( this.liveRegion );
    }
   },
   menuselect: function( event, ui ) {
    var item = ui.item.data( "ui-autocomplete-item" ),
     previous = this.previous;

    // Only trigger when focus was lost (click on menu)
    if ( this.element[ 0 ] !== $.ui.safeActiveElement( this.document[ 0 ] ) ) {
     this.element.trigger( "focus" );
     this.previous = previous;

     // #6109 - IE triggers two focus events and the second
     // is asynchronous, so we need to reset the previous
     // term synchronously and asynchronously :-(
     this._delay( function() {
      this.previous = previous;
      this.selectedItem = item;
     } );
    }

    if ( false !== this._trigger( "select", event, { item: item } ) ) {
     this._value( item.value );
    }

    // reset the term after the select event
    // this allows custom select handling to work properly
    this.term = this._value();

    this.close( event );
    this.selectedItem = item;
   }
  } );

  this.liveRegion = $( "<div>", {
   role: "status",
   "aria-live": "assertive",
   "aria-relevant": "additions"
  } )
   .appendTo( this.document[ 0 ].body );

  this._addClass( this.liveRegion, null, "ui-helper-hidden-accessible" );

  // Turning off autocomplete prevents the browser from remembering the
  // value when navigating through history, so we re-enable autocomplete
  // if the page is unloaded before the widget is destroyed. #7790
  this._on( this.window, {
   beforeunload: function() {
    this.element.removeAttr( "autocomplete" );
   }
  } );
 },

 _destroy: function() {
  clearTimeout( this.searching );
  this.element.removeAttr( "autocomplete" );
  this.menu.element.remove();
  this.liveRegion.remove();
 },

 _setOption: function( key, value ) {
  this._super( key, value );
  if ( key === "source" ) {
   this._initSource();
  }
  if ( key === "appendTo" ) {
   this.menu.element.appendTo( this._appendTo() );
  }
  if ( key === "disabled" && value && this.xhr ) {
   this.xhr.abort();
  }
 },

 _isEventTargetInWidget: function( event ) {
  var menuElement = this.menu.element[ 0 ];

  return event.target === this.element[ 0 ] ||
   event.target === menuElement ||
   $.contains( menuElement, event.target );
 },

 _closeOnClickOutside: function( event ) {
  if ( !this._isEventTargetInWidget( event ) ) {
   this.close();
  }
 },

 _appendTo: function() {
  var element = this.options.appendTo;

  if ( element ) {
   element = element.jquery || element.nodeType ?
    $( element ) :
    this.document.find( element ).eq( 0 );
  }

  if ( !element || !element[ 0 ] ) {
   element = this.element.closest( ".ui-front, dialog" );
  }

  if ( !element.length ) {
   element = this.document[ 0 ].body;
  }

  return element;
 },

 _initSource: function() {
  var array, url,
   that = this;
  if ( $.isArray( this.options.source ) ) {
   array = this.options.source;
   this.source = function( request, response ) {
    response( $.ui.autocomplete.filter( array, request.term ) );
   };
  } else if ( typeof this.options.source === "string" ) {
   url = this.options.source;
   this.source = function( request, response ) {
    if ( that.xhr ) {
     that.xhr.abort();
    }
    that.xhr = $.ajax( {
     url: url,
     data: request,
     dataType: "json",
     success: function( data ) {
      response( data );
     },
     error: function() {
      response( [] );
     }
    } );
   };
  } else {
   this.source = this.options.source;
  }
 },

 _searchTimeout: function( event ) {
  clearTimeout( this.searching );
  this.searching = this._delay( function() {

   // Search if the value has changed, or if the user retypes the same value (see #7434)
   var equalValues = this.term === this._value(),
    menuVisible = this.menu.element.is( ":visible" ),
    modifierKey = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;

   if ( !equalValues || ( equalValues && !menuVisible && !modifierKey ) ) {
    this.selectedItem = null;
    this.search( null, event );
   }
  }, this.options.delay );
 },

 search: function( value, event ) {
  value = value != null ? value : this._value();

  // Always save the actual value, not the one passed as an argument
  this.term = this._value();

  if ( value.length < this.options.minLength ) {
   return this.close( event );
  }

  if ( this._trigger( "search", event ) === false ) {
   return;
  }

  return this._search( value );
 },

 _search: function( value ) {
  this.pending++;
  this._addClass( "ui-autocomplete-loading" );
  this.cancelSearch = false;

  this.source( { term: value }, this._response() );
 },

 _response: function() {
  var index = ++this.requestIndex;

  return $.proxy( function( content ) {
   if ( index === this.requestIndex ) {
    this.__response( content );
   }

   this.pending--;
   if ( !this.pending ) {
    this._removeClass( "ui-autocomplete-loading" );
   }
  }, this );
 },

 __response: function( content ) {
  if ( content ) {
   content = this._normalize( content );
  }
  this._trigger( "response", null, { content: content } );
  if ( !this.options.disabled && content && content.length && !this.cancelSearch ) {
   this._suggest( content );
   this._trigger( "open" );
  } else {

   // use ._close() instead of .close() so we don't cancel future searches
   this._close();
  }
 },

 close: function( event ) {
  this.cancelSearch = true;
  this._close( event );
 },

 _close: function( event ) {

  // Remove the handler that closes the menu on outside clicks
  this._off( this.document, "mousedown" );

  if ( this.menu.element.is( ":visible" ) ) {
   this.menu.element.hide();
   this.menu.blur();
   this.isNewMenu = true;
   this._trigger( "close", event );
  }
 },

 _change: function( event ) {
  if ( this.previous !== this._value() ) {
   this._trigger( "change", event, { item: this.selectedItem } );
  }
 },

 _normalize: function( items ) {

  // assume all items have the right format when the first item is complete
  if ( items.length && items[ 0 ].label && items[ 0 ].value ) {
   return items;
  }
  return $.map( items, function( item ) {
   if ( typeof item === "string" ) {
    return {
     label: item,
     value: item
    };
   }
   return $.extend( {}, item, {
    label: item.label || item.value,
    value: item.value || item.label
   } );
  } );
 },

 _suggest: function( items ) {
  var ul = this.menu.element.empty();
  this._renderMenu( ul, items );
  this.isNewMenu = true;
  this.menu.refresh();

  // Size and position menu
  ul.show();
  this._resizeMenu();
  ul.position( $.extend( {
   of: this.element
  }, this.options.position ) );

  if ( this.options.autoFocus ) {
   this.menu.next();
  }

  // Listen for interactions outside of the widget (#6642)
  this._on( this.document, {
   mousedown: "_closeOnClickOutside"
  } );
 },

 _resizeMenu: function() {
  var ul = this.menu.element;
  ul.outerWidth( Math.max(

   // Firefox wraps long text (possibly a rounding bug)
   // so we add 1px to avoid the wrapping (#7513)
   ul.width( "" ).outerWidth() + 1,
   this.element.outerWidth()
  ) );
 },

 _renderMenu: function( ul, items ) {
  var that = this;
  $.each( items, function( index, item ) {
   that._renderItemData( ul, item );
  } );
 },

 _renderItemData: function( ul, item ) {
  return this._renderItem( ul, item ).data( "ui-autocomplete-item", item );
 },

 _renderItem: function( ul, item ) {
  return $( "<li>" )
   .append( $( "<div>" ).text( item.label ) )
   .appendTo( ul );
 },

 _move: function( direction, event ) {
  if ( !this.menu.element.is( ":visible" ) ) {
   this.search( null, event );
   return;
  }
  if ( this.menu.isFirstItem() && /^previous/.test( direction ) ||
    this.menu.isLastItem() && /^next/.test( direction ) ) {

   if ( !this.isMultiLine ) {
    this._value( this.term );
   }

   this.menu.blur();
   return;
  }
  this.menu[ direction ]( event );
 },

 widget: function() {
  return this.menu.element;
 },

 _value: function() {
  return this.valueMethod.apply( this.element, arguments );
 },

 _keyEvent: function( keyEvent, event ) {
  if ( !this.isMultiLine || this.menu.element.is( ":visible" ) ) {
   this._move( keyEvent, event );

   // Prevents moving cursor to beginning/end of the text field in some browsers
   event.preventDefault();
  }
 },

 // Support: Chrome <=50
 // We should be able to just use this.element.prop( "isContentEditable" )
 // but hidden elements always report false in Chrome.
 // https://code.google.com/p/chromium/issues/detail?id=313082
 _isContentEditable: function( element ) {
  if ( !element.length ) {
   return false;
  }

  var editable = element.prop( "contentEditable" );

  if ( editable === "inherit" ) {
    return this._isContentEditable( element.parent() );
  }

  return editable === "true";
 }
} );

$.extend( $.ui.autocomplete, {
 escapeRegex: function( value ) {
  return value.replace( /[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&" );
 },
 filter: function( array, term ) {
  var matcher = new RegExp( $.ui.autocomplete.escapeRegex( term ), "i" );
  return $.grep( array, function( value ) {
   return matcher.test( value.label || value.value || value );
  } );
 }
} );

// Live region extension, adding a `messages` option
// NOTE: This is an experimental API. We are still investigating
// a full solution for string manipulation and internationalization.
$.widget( "ui.autocomplete", $.ui.autocomplete, {
 options: {
  messages: {
   noResults: "No search results.",
   results: function( amount ) {
    return amount + ( amount > 1 ? " results are" : " result is" ) +
     " available, use up and down arrow keys to navigate.";
   }
  }
 },

 __response: function( content ) {
  var message;
  this._superApply( arguments );
  if ( this.options.disabled || this.cancelSearch ) {
   return;
  }
  if ( content && content.length ) {
   message = this.options.messages.results( content.length );
  } else {
   message = this.options.messages.noResults;
  }
  this.liveRegion.children().hide();
  $( "<div>" ).text( message ).appendTo( this.liveRegion );
 }
} );

var widgetsAutocomplete = $.ui.autocomplete;


/*!
 * jQuery UI Effects 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Effects Core
//>>group: Effects
// jscs:disable maximumLineLength
//>>description: Extends the internal jQuery effects. Includes morphing and easing. Required by all other effects.
// jscs:enable maximumLineLength
//>>docs: http://api.jqueryui.com/category/effects-core/
//>>demos: http://jqueryui.com/effect/



var dataSpace = "ui-effects-",
 dataSpaceStyle = "ui-effects-style",
 dataSpaceAnimated = "ui-effects-animated",

 // Create a local jQuery because jQuery Color relies on it and the
 // global may not exist with AMD and a custom build (#10199)
 jQuery = $;

$.effects = {
 effect: {}
};

/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
( function( jQuery, undefined ) {

 var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor " +
  "borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",

 // Plusequals test for += 100 -= 100
 rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,

 // A set of RE's that can match strings and generate color tuples.
 stringParsers = [ {
   re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
   parse: function( execResult ) {
    return [
     execResult[ 1 ],
     execResult[ 2 ],
     execResult[ 3 ],
     execResult[ 4 ]
    ];
   }
  }, {
   re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
   parse: function( execResult ) {
    return [
     execResult[ 1 ] * 2.55,
     execResult[ 2 ] * 2.55,
     execResult[ 3 ] * 2.55,
     execResult[ 4 ]
    ];
   }
  }, {

   // This regex ignores A-F because it's compared against an already lowercased string
   re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
   parse: function( execResult ) {
    return [
     parseInt( execResult[ 1 ], 16 ),
     parseInt( execResult[ 2 ], 16 ),
     parseInt( execResult[ 3 ], 16 )
    ];
   }
  }, {

   // This regex ignores A-F because it's compared against an already lowercased string
   re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
   parse: function( execResult ) {
    return [
     parseInt( execResult[ 1 ] + execResult[ 1 ], 16 ),
     parseInt( execResult[ 2 ] + execResult[ 2 ], 16 ),
     parseInt( execResult[ 3 ] + execResult[ 3 ], 16 )
    ];
   }
  }, {
   re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
   space: "hsla",
   parse: function( execResult ) {
    return [
     execResult[ 1 ],
     execResult[ 2 ] / 100,
     execResult[ 3 ] / 100,
     execResult[ 4 ]
    ];
   }
  } ],

 // JQuery.Color( )
 color = jQuery.Color = function( color, green, blue, alpha ) {
  return new jQuery.Color.fn.parse( color, green, blue, alpha );
 },
 spaces = {
  rgba: {
   props: {
    red: {
     idx: 0,
     type: "byte"
    },
    green: {
     idx: 1,
     type: "byte"
    },
    blue: {
     idx: 2,
     type: "byte"
    }
   }
  },

  hsla: {
   props: {
    hue: {
     idx: 0,
     type: "degrees"
    },
    saturation: {
     idx: 1,
     type: "percent"
    },
    lightness: {
     idx: 2,
     type: "percent"
    }
   }
  }
 },
 propTypes = {
  "byte": {
   floor: true,
   max: 255
  },
  "percent": {
   max: 1
  },
  "degrees": {
   mod: 360,
   floor: true
  }
 },
 support = color.support = {},

 // Element for support tests
 supportElem = jQuery( "<p>" )[ 0 ],

 // Colors = jQuery.Color.names
 colors,

 // Local aliases of functions called often
 each = jQuery.each;

// Determine rgba support immediately
supportElem.style.cssText = "background-color:rgba(1,1,1,.5)";
support.rgba = supportElem.style.backgroundColor.indexOf( "rgba" ) > -1;

// Define cache name and alpha properties
// for rgba and hsla spaces
each( spaces, function( spaceName, space ) {
 space.cache = "_" + spaceName;
 space.props.alpha = {
  idx: 3,
  type: "percent",
  def: 1
 };
} );

function clamp( value, prop, allowEmpty ) {
 var type = propTypes[ prop.type ] || {};

 if ( value == null ) {
  return ( allowEmpty || !prop.def ) ? null : prop.def;
 }

 // ~~ is an short way of doing floor for positive numbers
 value = type.floor ? ~~value : parseFloat( value );

 // IE will pass in empty strings as value for alpha,
 // which will hit this case
 if ( isNaN( value ) ) {
  return prop.def;
 }

 if ( type.mod ) {

  // We add mod before modding to make sure that negatives values
  // get converted properly: -10 -> 350
  return ( value + type.mod ) % type.mod;
 }

 // For now all property types without mod have min and max
 return 0 > value ? 0 : type.max < value ? type.max : value;
}

function stringParse( string ) {
 var inst = color(),
  rgba = inst._rgba = [];

 string = string.toLowerCase();

 each( stringParsers, function( i, parser ) {
  var parsed,
   match = parser.re.exec( string ),
   values = match && parser.parse( match ),
   spaceName = parser.space || "rgba";

  if ( values ) {
   parsed = inst[ spaceName ]( values );

   // If this was an rgba parse the assignment might happen twice
   // oh well....
   inst[ spaces[ spaceName ].cache ] = parsed[ spaces[ spaceName ].cache ];
   rgba = inst._rgba = parsed._rgba;

   // Exit each( stringParsers ) here because we matched
   return false;
  }
 } );

 // Found a stringParser that handled it
 if ( rgba.length ) {

  // If this came from a parsed string, force "transparent" when alpha is 0
  // chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
  if ( rgba.join() === "0,0,0,0" ) {
   jQuery.extend( rgba, colors.transparent );
  }
  return inst;
 }

 // Named colors
 return colors[ string ];
}

color.fn = jQuery.extend( color.prototype, {
 parse: function( red, green, blue, alpha ) {
  if ( red === undefined ) {
   this._rgba = [ null, null, null, null ];
   return this;
  }
  if ( red.jquery || red.nodeType ) {
   red = jQuery( red ).css( green );
   green = undefined;
  }

  var inst = this,
   type = jQuery.type( red ),
   rgba = this._rgba = [];

  // More than 1 argument specified - assume ( red, green, blue, alpha )
  if ( green !== undefined ) {
   red = [ red, green, blue, alpha ];
   type = "array";
  }

  if ( type === "string" ) {
   return this.parse( stringParse( red ) || colors._default );
  }

  if ( type === "array" ) {
   each( spaces.rgba.props, function( key, prop ) {
    rgba[ prop.idx ] = clamp( red[ prop.idx ], prop );
   } );
   return this;
  }

  if ( type === "object" ) {
   if ( red instanceof color ) {
    each( spaces, function( spaceName, space ) {
     if ( red[ space.cache ] ) {
      inst[ space.cache ] = red[ space.cache ].slice();
     }
    } );
   } else {
    each( spaces, function( spaceName, space ) {
     var cache = space.cache;
     each( space.props, function( key, prop ) {

      // If the cache doesn't exist, and we know how to convert
      if ( !inst[ cache ] && space.to ) {

       // If the value was null, we don't need to copy it
       // if the key was alpha, we don't need to copy it either
       if ( key === "alpha" || red[ key ] == null ) {
        return;
       }
       inst[ cache ] = space.to( inst._rgba );
      }

      // This is the only case where we allow nulls for ALL properties.
      // call clamp with alwaysAllowEmpty
      inst[ cache ][ prop.idx ] = clamp( red[ key ], prop, true );
     } );

     // Everything defined but alpha?
     if ( inst[ cache ] &&
       jQuery.inArray( null, inst[ cache ].slice( 0, 3 ) ) < 0 ) {

      // Use the default of 1
      inst[ cache ][ 3 ] = 1;
      if ( space.from ) {
       inst._rgba = space.from( inst[ cache ] );
      }
     }
    } );
   }
   return this;
  }
 },
 is: function( compare ) {
  var is = color( compare ),
   same = true,
   inst = this;

  each( spaces, function( _, space ) {
   var localCache,
    isCache = is[ space.cache ];
   if ( isCache ) {
    localCache = inst[ space.cache ] || space.to && space.to( inst._rgba ) || [];
    each( space.props, function( _, prop ) {
     if ( isCache[ prop.idx ] != null ) {
      same = ( isCache[ prop.idx ] === localCache[ prop.idx ] );
      return same;
     }
    } );
   }
   return same;
  } );
  return same;
 },
 _space: function() {
  var used = [],
   inst = this;
  each( spaces, function( spaceName, space ) {
   if ( inst[ space.cache ] ) {
    used.push( spaceName );
   }
  } );
  return used.pop();
 },
 transition: function( other, distance ) {
  var end = color( other ),
   spaceName = end._space(),
   space = spaces[ spaceName ],
   startColor = this.alpha() === 0 ? color( "transparent" ) : this,
   start = startColor[ space.cache ] || space.to( startColor._rgba ),
   result = start.slice();

  end = end[ space.cache ];
  each( space.props, function( key, prop ) {
   var index = prop.idx,
    startValue = start[ index ],
    endValue = end[ index ],
    type = propTypes[ prop.type ] || {};

   // If null, don't override start value
   if ( endValue === null ) {
    return;
   }

   // If null - use end
   if ( startValue === null ) {
    result[ index ] = endValue;
   } else {
    if ( type.mod ) {
     if ( endValue - startValue > type.mod / 2 ) {
      startValue += type.mod;
     } else if ( startValue - endValue > type.mod / 2 ) {
      startValue -= type.mod;
     }
    }
    result[ index ] = clamp( ( endValue - startValue ) * distance + startValue, prop );
   }
  } );
  return this[ spaceName ]( result );
 },
 blend: function( opaque ) {

  // If we are already opaque - return ourself
  if ( this._rgba[ 3 ] === 1 ) {
   return this;
  }

  var rgb = this._rgba.slice(),
   a = rgb.pop(),
   blend = color( opaque )._rgba;

  return color( jQuery.map( rgb, function( v, i ) {
   return ( 1 - a ) * blend[ i ] + a * v;
  } ) );
 },
 toRgbaString: function() {
  var prefix = "rgba(",
   rgba = jQuery.map( this._rgba, function( v, i ) {
    return v == null ? ( i > 2 ? 1 : 0 ) : v;
   } );

  if ( rgba[ 3 ] === 1 ) {
   rgba.pop();
   prefix = "rgb(";
  }

  return prefix + rgba.join() + ")";
 },
 toHslaString: function() {
  var prefix = "hsla(",
   hsla = jQuery.map( this.hsla(), function( v, i ) {
    if ( v == null ) {
     v = i > 2 ? 1 : 0;
    }

    // Catch 1 and 2
    if ( i && i < 3 ) {
     v = Math.round( v * 100 ) + "%";
    }
    return v;
   } );

  if ( hsla[ 3 ] === 1 ) {
   hsla.pop();
   prefix = "hsl(";
  }
  return prefix + hsla.join() + ")";
 },
 toHexString: function( includeAlpha ) {
  var rgba = this._rgba.slice(),
   alpha = rgba.pop();

  if ( includeAlpha ) {
   rgba.push( ~~( alpha * 255 ) );
  }

  return "#" + jQuery.map( rgba, function( v ) {

   // Default to 0 when nulls exist
   v = ( v || 0 ).toString( 16 );
   return v.length === 1 ? "0" + v : v;
  } ).join( "" );
 },
 toString: function() {
  return this._rgba[ 3 ] === 0 ? "transparent" : this.toRgbaString();
 }
} );
color.fn.parse.prototype = color.fn;

// Hsla conversions adapted from:
// https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021

function hue2rgb( p, q, h ) {
 h = ( h + 1 ) % 1;
 if ( h * 6 < 1 ) {
  return p + ( q - p ) * h * 6;
 }
 if ( h * 2 < 1 ) {
  return q;
 }
 if ( h * 3 < 2 ) {
  return p + ( q - p ) * ( ( 2 / 3 ) - h ) * 6;
 }
 return p;
}

spaces.hsla.to = function( rgba ) {
 if ( rgba[ 0 ] == null || rgba[ 1 ] == null || rgba[ 2 ] == null ) {
  return [ null, null, null, rgba[ 3 ] ];
 }
 var r = rgba[ 0 ] / 255,
  g = rgba[ 1 ] / 255,
  b = rgba[ 2 ] / 255,
  a = rgba[ 3 ],
  max = Math.max( r, g, b ),
  min = Math.min( r, g, b ),
  diff = max - min,
  add = max + min,
  l = add * 0.5,
  h, s;

 if ( min === max ) {
  h = 0;
 } else if ( r === max ) {
  h = ( 60 * ( g - b ) / diff ) + 360;
 } else if ( g === max ) {
  h = ( 60 * ( b - r ) / diff ) + 120;
 } else {
  h = ( 60 * ( r - g ) / diff ) + 240;
 }

 // Chroma (diff) == 0 means greyscale which, by definition, saturation = 0%
 // otherwise, saturation is based on the ratio of chroma (diff) to lightness (add)
 if ( diff === 0 ) {
  s = 0;
 } else if ( l <= 0.5 ) {
  s = diff / add;
 } else {
  s = diff / ( 2 - add );
 }
 return [ Math.round( h ) % 360, s, l, a == null ? 1 : a ];
};

spaces.hsla.from = function( hsla ) {
 if ( hsla[ 0 ] == null || hsla[ 1 ] == null || hsla[ 2 ] == null ) {
  return [ null, null, null, hsla[ 3 ] ];
 }
 var h = hsla[ 0 ] / 360,
  s = hsla[ 1 ],
  l = hsla[ 2 ],
  a = hsla[ 3 ],
  q = l <= 0.5 ? l * ( 1 + s ) : l + s - l * s,
  p = 2 * l - q;

 return [
  Math.round( hue2rgb( p, q, h + ( 1 / 3 ) ) * 255 ),
  Math.round( hue2rgb( p, q, h ) * 255 ),
  Math.round( hue2rgb( p, q, h - ( 1 / 3 ) ) * 255 ),
  a
 ];
};

each( spaces, function( spaceName, space ) {
 var props = space.props,
  cache = space.cache,
  to = space.to,
  from = space.from;

 // Makes rgba() and hsla()
 color.fn[ spaceName ] = function( value ) {

  // Generate a cache for this space if it doesn't exist
  if ( to && !this[ cache ] ) {
   this[ cache ] = to( this._rgba );
  }
  if ( value === undefined ) {
   return this[ cache ].slice();
  }

  var ret,
   type = jQuery.type( value ),
   arr = ( type === "array" || type === "object" ) ? value : arguments,
   local = this[ cache ].slice();

  each( props, function( key, prop ) {
   var val = arr[ type === "object" ? key : prop.idx ];
   if ( val == null ) {
    val = local[ prop.idx ];
   }
   local[ prop.idx ] = clamp( val, prop );
  } );

  if ( from ) {
   ret = color( from( local ) );
   ret[ cache ] = local;
   return ret;
  } else {
   return color( local );
  }
 };

 // Makes red() green() blue() alpha() hue() saturation() lightness()
 each( props, function( key, prop ) {

  // Alpha is included in more than one space
  if ( color.fn[ key ] ) {
   return;
  }
  color.fn[ key ] = function( value ) {
   var vtype = jQuery.type( value ),
    fn = ( key === "alpha" ? ( this._hsla ? "hsla" : "rgba" ) : spaceName ),
    local = this[ fn ](),
    cur = local[ prop.idx ],
    match;

   if ( vtype === "undefined" ) {
    return cur;
   }

   if ( vtype === "function" ) {
    value = value.call( this, cur );
    vtype = jQuery.type( value );
   }
   if ( value == null && prop.empty ) {
    return this;
   }
   if ( vtype === "string" ) {
    match = rplusequals.exec( value );
    if ( match ) {
     value = cur + parseFloat( match[ 2 ] ) * ( match[ 1 ] === "+" ? 1 : -1 );
    }
   }
   local[ prop.idx ] = value;
   return this[ fn ]( local );
  };
 } );
} );

// Add cssHook and .fx.step function for each named hook.
// accept a space separated string of properties
color.hook = function( hook ) {
 var hooks = hook.split( " " );
 each( hooks, function( i, hook ) {
  jQuery.cssHooks[ hook ] = {
   set: function( elem, value ) {
    var parsed, curElem,
     backgroundColor = "";

    if ( value !== "transparent" && ( jQuery.type( value ) !== "string" ||
      ( parsed = stringParse( value ) ) ) ) {
     value = color( parsed || value );
     if ( !support.rgba && value._rgba[ 3 ] !== 1 ) {
      curElem = hook === "backgroundColor" ? elem.parentNode : elem;
      while (
       ( backgroundColor === "" || backgroundColor === "transparent" ) &&
       curElem && curElem.style
      ) {
       try {
        backgroundColor = jQuery.css( curElem, "backgroundColor" );
        curElem = curElem.parentNode;
       } catch ( e ) {
       }
      }

      value = value.blend( backgroundColor && backgroundColor !== "transparent" ?
       backgroundColor :
       "_default" );
     }

     value = value.toRgbaString();
    }
    try {
     elem.style[ hook ] = value;
    } catch ( e ) {

     // Wrapped to prevent IE from throwing errors on "invalid" values like
     // 'auto' or 'inherit'
    }
   }
  };
  jQuery.fx.step[ hook ] = function( fx ) {
   if ( !fx.colorInit ) {
    fx.start = color( fx.elem, hook );
    fx.end = color( fx.end );
    fx.colorInit = true;
   }
   jQuery.cssHooks[ hook ].set( fx.elem, fx.start.transition( fx.end, fx.pos ) );
  };
 } );

};

color.hook( stepHooks );

jQuery.cssHooks.borderColor = {
 expand: function( value ) {
  var expanded = {};

  each( [ "Top", "Right", "Bottom", "Left" ], function( i, part ) {
   expanded[ "border" + part + "Color" ] = value;
  } );
  return expanded;
 }
};

// Basic color names only.
// Usage of any of the other color names requires adding yourself or including
// jquery.color.svg-names.js.
colors = jQuery.Color.names = {

 // 4.1. Basic color keywords
 aqua: "#00ffff",
 black: "#000000",
 blue: "#0000ff",
 fuchsia: "#ff00ff",
 gray: "#808080",
 green: "#008000",
 lime: "#00ff00",
 maroon: "#800000",
 navy: "#000080",
 olive: "#808000",
 purple: "#800080",
 red: "#ff0000",
 silver: "#c0c0c0",
 teal: "#008080",
 white: "#ffffff",
 yellow: "#ffff00",

 // 4.2.3. "transparent" color keyword
 transparent: [ null, null, null, 0 ],

 _default: "#ffffff"
};

} )( jQuery );

/******************************************************************************/
/****************************** CLASS ANIMATIONS ******************************/
/******************************************************************************/
( function() {

var classAnimationActions = [ "add", "remove", "toggle" ],
 shorthandStyles = {
  border: 1,
  borderBottom: 1,
  borderColor: 1,
  borderLeft: 1,
  borderRight: 1,
  borderTop: 1,
  borderWidth: 1,
  margin: 1,
  padding: 1
 };

$.each(
 [ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ],
 function( _, prop ) {
  $.fx.step[ prop ] = function( fx ) {
   if ( fx.end !== "none" && !fx.setAttr || fx.pos === 1 && !fx.setAttr ) {
    jQuery.style( fx.elem, prop, fx.end );
    fx.setAttr = true;
   }
  };
 }
);

function getElementStyles( elem ) {
 var key, len,
  style = elem.ownerDocument.defaultView ?
   elem.ownerDocument.defaultView.getComputedStyle( elem, null ) :
   elem.currentStyle,
  styles = {};

 if ( style && style.length && style[ 0 ] && style[ style[ 0 ] ] ) {
  len = style.length;
  while ( len-- ) {
   key = style[ len ];
   if ( typeof style[ key ] === "string" ) {
    styles[ $.camelCase( key ) ] = style[ key ];
   }
  }

 // Support: Opera, IE <9
 } else {
  for ( key in style ) {
   if ( typeof style[ key ] === "string" ) {
    styles[ key ] = style[ key ];
   }
  }
 }

 return styles;
}

function styleDifference( oldStyle, newStyle ) {
 var diff = {},
  name, value;

 for ( name in newStyle ) {
  value = newStyle[ name ];
  if ( oldStyle[ name ] !== value ) {
   if ( !shorthandStyles[ name ] ) {
    if ( $.fx.step[ name ] || !isNaN( parseFloat( value ) ) ) {
     diff[ name ] = value;
    }
   }
  }
 }

 return diff;
}

// Support: jQuery <1.8
if ( !$.fn.addBack ) {
 $.fn.addBack = function( selector ) {
  return this.add( selector == null ?
   this.prevObject : this.prevObject.filter( selector )
  );
 };
}

$.effects.animateClass = function( value, duration, easing, callback ) {
 var o = $.speed( duration, easing, callback );

 return this.queue( function() {
  var animated = $( this ),
   baseClass = animated.attr( "class" ) || "",
   applyClassChange,
   allAnimations = o.children ? animated.find( "*" ).addBack() : animated;

  // Map the animated objects to store the original styles.
  allAnimations = allAnimations.map( function() {
   var el = $( this );
   return {
    el: el,
    start: getElementStyles( this )
   };
  } );

  // Apply class change
  applyClassChange = function() {
   $.each( classAnimationActions, function( i, action ) {
    if ( value[ action ] ) {
     animated[ action + "Class" ]( value[ action ] );
    }
   } );
  };
  applyClassChange();

  // Map all animated objects again - calculate new styles and diff
  allAnimations = allAnimations.map( function() {
   this.end = getElementStyles( this.el[ 0 ] );
   this.diff = styleDifference( this.start, this.end );
   return this;
  } );

  // Apply original class
  animated.attr( "class", baseClass );

  // Map all animated objects again - this time collecting a promise
  allAnimations = allAnimations.map( function() {
   var styleInfo = this,
    dfd = $.Deferred(),
    opts = $.extend( {}, o, {
     queue: false,
     complete: function() {
      dfd.resolve( styleInfo );
     }
    } );

   this.el.animate( this.diff, opts );
   return dfd.promise();
  } );

  // Once all animations have completed:
  $.when.apply( $, allAnimations.get() ).done( function() {

   // Set the final class
   applyClassChange();

   // For each animated element,
   // clear all css properties that were animated
   $.each( arguments, function() {
    var el = this.el;
    $.each( this.diff, function( key ) {
     el.css( key, "" );
    } );
   } );

   // This is guarnteed to be there if you use jQuery.speed()
   // it also handles dequeuing the next anim...
   o.complete.call( animated[ 0 ] );
  } );
 } );
};

$.fn.extend( {
 addClass: ( function( orig ) {
  return function( classNames, speed, easing, callback ) {
   return speed ?
    $.effects.animateClass.call( this,
     { add: classNames }, speed, easing, callback ) :
    orig.apply( this, arguments );
  };
 } )( $.fn.addClass ),

 removeClass: ( function( orig ) {
  return function( classNames, speed, easing, callback ) {
   return arguments.length > 1 ?
    $.effects.animateClass.call( this,
     { remove: classNames }, speed, easing, callback ) :
    orig.apply( this, arguments );
  };
 } )( $.fn.removeClass ),

 toggleClass: ( function( orig ) {
  return function( classNames, force, speed, easing, callback ) {
   if ( typeof force === "boolean" || force === undefined ) {
    if ( !speed ) {

     // Without speed parameter
     return orig.apply( this, arguments );
    } else {
     return $.effects.animateClass.call( this,
      ( force ? { add: classNames } : { remove: classNames } ),
      speed, easing, callback );
    }
   } else {

    // Without force parameter
    return $.effects.animateClass.call( this,
     { toggle: classNames }, force, speed, easing );
   }
  };
 } )( $.fn.toggleClass ),

 switchClass: function( remove, add, speed, easing, callback ) {
  return $.effects.animateClass.call( this, {
   add: add,
   remove: remove
  }, speed, easing, callback );
 }
} );

} )();

/******************************************************************************/
/*********************************** EFFECTS **********************************/
/******************************************************************************/

( function() {

if ( $.expr && $.expr.filters && $.expr.filters.animated ) {
 $.expr.filters.animated = ( function( orig ) {
  return function( elem ) {
   return !!$( elem ).data( dataSpaceAnimated ) || orig( elem );
  };
 } )( $.expr.filters.animated );
}

if ( $.uiBackCompat !== false ) {
 $.extend( $.effects, {

  // Saves a set of properties in a data storage
  save: function( element, set ) {
   var i = 0, length = set.length;
   for ( ; i < length; i++ ) {
    if ( set[ i ] !== null ) {
     element.data( dataSpace + set[ i ], element[ 0 ].style[ set[ i ] ] );
    }
   }
  },

  // Restores a set of previously saved properties from a data storage
  restore: function( element, set ) {
   var val, i = 0, length = set.length;
   for ( ; i < length; i++ ) {
    if ( set[ i ] !== null ) {
     val = element.data( dataSpace + set[ i ] );
     element.css( set[ i ], val );
    }
   }
  },

  setMode: function( el, mode ) {
   if ( mode === "toggle" ) {
    mode = el.is( ":hidden" ) ? "show" : "hide";
   }
   return mode;
  },

  // Wraps the element around a wrapper that copies position properties
  createWrapper: function( element ) {

   // If the element is already wrapped, return it
   if ( element.parent().is( ".ui-effects-wrapper" ) ) {
    return element.parent();
   }

   // Wrap the element
   var props = {
     width: element.outerWidth( true ),
     height: element.outerHeight( true ),
     "float": element.css( "float" )
    },
    wrapper = $( "<div></div>" )
     .addClass( "ui-effects-wrapper" )
     .css( {
      fontSize: "100%",
      background: "transparent",
      border: "none",
      margin: 0,
      padding: 0
     } ),

    // Store the size in case width/height are defined in % - Fixes #5245
    size = {
     width: element.width(),
     height: element.height()
    },
    active = document.activeElement;

   // Support: Firefox
   // Firefox incorrectly exposes anonymous content
   // https://bugzilla.mozilla.org/show_bug.cgi?id=561664
   try {
    active.id;
   } catch ( e ) {
    active = document.body;
   }

   element.wrap( wrapper );

   // Fixes #7595 - Elements lose focus when wrapped.
   if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
    $( active ).trigger( "focus" );
   }

   // Hotfix for jQuery 1.4 since some change in wrap() seems to actually
   // lose the reference to the wrapped element
   wrapper = element.parent();

   // Transfer positioning properties to the wrapper
   if ( element.css( "position" ) === "static" ) {
    wrapper.css( { position: "relative" } );
    element.css( { position: "relative" } );
   } else {
    $.extend( props, {
     position: element.css( "position" ),
     zIndex: element.css( "z-index" )
    } );
    $.each( [ "top", "left", "bottom", "right" ], function( i, pos ) {
     props[ pos ] = element.css( pos );
     if ( isNaN( parseInt( props[ pos ], 10 ) ) ) {
      props[ pos ] = "auto";
     }
    } );
    element.css( {
     position: "relative",
     top: 0,
     left: 0,
     right: "auto",
     bottom: "auto"
    } );
   }
   element.css( size );

   return wrapper.css( props ).show();
  },

  removeWrapper: function( element ) {
   var active = document.activeElement;

   if ( element.parent().is( ".ui-effects-wrapper" ) ) {
    element.parent().replaceWith( element );

    // Fixes #7595 - Elements lose focus when wrapped.
    if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
     $( active ).trigger( "focus" );
    }
   }

   return element;
  }
 } );
}

$.extend( $.effects, {
 version: "1.12.1",

 define: function( name, mode, effect ) {
  if ( !effect ) {
   effect = mode;
   mode = "effect";
  }

  $.effects.effect[ name ] = effect;
  $.effects.effect[ name ].mode = mode;

  return effect;
 },

 scaledDimensions: function( element, percent, direction ) {
  if ( percent === 0 ) {
   return {
    height: 0,
    width: 0,
    outerHeight: 0,
    outerWidth: 0
   };
  }

  var x = direction !== "horizontal" ? ( ( percent || 100 ) / 100 ) : 1,
   y = direction !== "vertical" ? ( ( percent || 100 ) / 100 ) : 1;

  return {
   height: element.height() * y,
   width: element.width() * x,
   outerHeight: element.outerHeight() * y,
   outerWidth: element.outerWidth() * x
  };

 },

 clipToBox: function( animation ) {
  return {
   width: animation.clip.right - animation.clip.left,
   height: animation.clip.bottom - animation.clip.top,
   left: animation.clip.left,
   top: animation.clip.top
  };
 },

 // Injects recently queued functions to be first in line (after "inprogress")
 unshift: function( element, queueLength, count ) {
  var queue = element.queue();

  if ( queueLength > 1 ) {
   queue.splice.apply( queue,
    [ 1, 0 ].concat( queue.splice( queueLength, count ) ) );
  }
  element.dequeue();
 },

 saveStyle: function( element ) {
  element.data( dataSpaceStyle, element[ 0 ].style.cssText );
 },

 restoreStyle: function( element ) {
  element[ 0 ].style.cssText = element.data( dataSpaceStyle ) || "";
  element.removeData( dataSpaceStyle );
 },

 mode: function( element, mode ) {
  var hidden = element.is( ":hidden" );

  if ( mode === "toggle" ) {
   mode = hidden ? "show" : "hide";
  }
  if ( hidden ? mode === "hide" : mode === "show" ) {
   mode = "none";
  }
  return mode;
 },

 // Translates a [top,left] array into a baseline value
 getBaseline: function( origin, original ) {
  var y, x;

  switch ( origin[ 0 ] ) {
  case "top":
   y = 0;
   break;
  case "middle":
   y = 0.5;
   break;
  case "bottom":
   y = 1;
   break;
  default:
   y = origin[ 0 ] / original.height;
  }

  switch ( origin[ 1 ] ) {
  case "left":
   x = 0;
   break;
  case "center":
   x = 0.5;
   break;
  case "right":
   x = 1;
   break;
  default:
   x = origin[ 1 ] / original.width;
  }

  return {
   x: x,
   y: y
  };
 },

 // Creates a placeholder element so that the original element can be made absolute
 createPlaceholder: function( element ) {
  var placeholder,
   cssPosition = element.css( "position" ),
   position = element.position();

  // Lock in margins first to account for form elements, which
  // will change margin if you explicitly set height
  // see: http://jsfiddle.net/JZSMt/3/ https://bugs.webkit.org/show_bug.cgi?id=107380
  // Support: Safari
  element.css( {
   marginTop: element.css( "marginTop" ),
   marginBottom: element.css( "marginBottom" ),
   marginLeft: element.css( "marginLeft" ),
   marginRight: element.css( "marginRight" )
  } )
  .outerWidth( element.outerWidth() )
  .outerHeight( element.outerHeight() );

  if ( /^(static|relative)/.test( cssPosition ) ) {
   cssPosition = "absolute";

   placeholder = $( "<" + element[ 0 ].nodeName + ">" ).insertAfter( element ).css( {

    // Convert inline to inline block to account for inline elements
    // that turn to inline block based on content (like img)
    display: /^(inline|ruby)/.test( element.css( "display" ) ) ?
     "inline-block" :
     "block",
    visibility: "hidden",

    // Margins need to be set to account for margin collapse
    marginTop: element.css( "marginTop" ),
    marginBottom: element.css( "marginBottom" ),
    marginLeft: element.css( "marginLeft" ),
    marginRight: element.css( "marginRight" ),
    "float": element.css( "float" )
   } )
   .outerWidth( element.outerWidth() )
   .outerHeight( element.outerHeight() )
   .addClass( "ui-effects-placeholder" );

   element.data( dataSpace + "placeholder", placeholder );
  }

  element.css( {
   position: cssPosition,
   left: position.left,
   top: position.top
  } );

  return placeholder;
 },

 removePlaceholder: function( element ) {
  var dataKey = dataSpace + "placeholder",
    placeholder = element.data( dataKey );

  if ( placeholder ) {
   placeholder.remove();
   element.removeData( dataKey );
  }
 },

 // Removes a placeholder if it exists and restores
 // properties that were modified during placeholder creation
 cleanUp: function( element ) {
  $.effects.restoreStyle( element );
  $.effects.removePlaceholder( element );
 },

 setTransition: function( element, list, factor, value ) {
  value = value || {};
  $.each( list, function( i, x ) {
   var unit = element.cssUnit( x );
   if ( unit[ 0 ] > 0 ) {
    value[ x ] = unit[ 0 ] * factor + unit[ 1 ];
   }
  } );
  return value;
 }
} );

// Return an effect options object for the given parameters:
function _normalizeArguments( effect, options, speed, callback ) {

 // Allow passing all options as the first parameter
 if ( $.isPlainObject( effect ) ) {
  options = effect;
  effect = effect.effect;
 }

 // Convert to an object
 effect = { effect: effect };

 // Catch (effect, null, ...)
 if ( options == null ) {
  options = {};
 }

 // Catch (effect, callback)
 if ( $.isFunction( options ) ) {
  callback = options;
  speed = null;
  options = {};
 }

 // Catch (effect, speed, ?)
 if ( typeof options === "number" || $.fx.speeds[ options ] ) {
  callback = speed;
  speed = options;
  options = {};
 }

 // Catch (effect, options, callback)
 if ( $.isFunction( speed ) ) {
  callback = speed;
  speed = null;
 }

 // Add options to effect
 if ( options ) {
  $.extend( effect, options );
 }

 speed = speed || options.duration;
 effect.duration = $.fx.off ? 0 :
  typeof speed === "number" ? speed :
  speed in $.fx.speeds ? $.fx.speeds[ speed ] :
  $.fx.speeds._default;

 effect.complete = callback || options.complete;

 return effect;
}

function standardAnimationOption( option ) {

 // Valid standard speeds (nothing, number, named speed)
 if ( !option || typeof option === "number" || $.fx.speeds[ option ] ) {
  return true;
 }

 // Invalid strings - treat as "normal" speed
 if ( typeof option === "string" && !$.effects.effect[ option ] ) {
  return true;
 }

 // Complete callback
 if ( $.isFunction( option ) ) {
  return true;
 }

 // Options hash (but not naming an effect)
 if ( typeof option === "object" && !option.effect ) {
  return true;
 }

 // Didn't match any standard API
 return false;
}

$.fn.extend( {
 effect: function( /* effect, options, speed, callback */ ) {
  var args = _normalizeArguments.apply( this, arguments ),
   effectMethod = $.effects.effect[ args.effect ],
   defaultMode = effectMethod.mode,
   queue = args.queue,
   queueName = queue || "fx",
   complete = args.complete,
   mode = args.mode,
   modes = [],
   prefilter = function( next ) {
    var el = $( this ),
     normalizedMode = $.effects.mode( el, mode ) || defaultMode;

    // Sentinel for duck-punching the :animated psuedo-selector
    el.data( dataSpaceAnimated, true );

    // Save effect mode for later use,
    // we can't just call $.effects.mode again later,
    // as the .show() below destroys the initial state
    modes.push( normalizedMode );

    // See $.uiBackCompat inside of run() for removal of defaultMode in 1.13
    if ( defaultMode && ( normalizedMode === "show" ||
      ( normalizedMode === defaultMode && normalizedMode === "hide" ) ) ) {
     el.show();
    }

    if ( !defaultMode || normalizedMode !== "none" ) {
     $.effects.saveStyle( el );
    }

    if ( $.isFunction( next ) ) {
     next();
    }
   };

  if ( $.fx.off || !effectMethod ) {

   // Delegate to the original method (e.g., .show()) if possible
   if ( mode ) {
    return this[ mode ]( args.duration, complete );
   } else {
    return this.each( function() {
     if ( complete ) {
      complete.call( this );
     }
    } );
   }
  }

  function run( next ) {
   var elem = $( this );

   function cleanup() {
    elem.removeData( dataSpaceAnimated );

    $.effects.cleanUp( elem );

    if ( args.mode === "hide" ) {
     elem.hide();
    }

    done();
   }

   function done() {
    if ( $.isFunction( complete ) ) {
     complete.call( elem[ 0 ] );
    }

    if ( $.isFunction( next ) ) {
     next();
    }
   }

   // Override mode option on a per element basis,
   // as toggle can be either show or hide depending on element state
   args.mode = modes.shift();

   if ( $.uiBackCompat !== false && !defaultMode ) {
    if ( elem.is( ":hidden" ) ? mode === "hide" : mode === "show" ) {

     // Call the core method to track "olddisplay" properly
     elem[ mode ]();
     done();
    } else {
     effectMethod.call( elem[ 0 ], args, done );
    }
   } else {
    if ( args.mode === "none" ) {

     // Call the core method to track "olddisplay" properly
     elem[ mode ]();
     done();
    } else {
     effectMethod.call( elem[ 0 ], args, cleanup );
    }
   }
  }

  // Run prefilter on all elements first to ensure that
  // any showing or hiding happens before placeholder creation,
  // which ensures that any layout changes are correctly captured.
  return queue === false ?
   this.each( prefilter ).each( run ) :
   this.queue( queueName, prefilter ).queue( queueName, run );
 },

 show: ( function( orig ) {
  return function( option ) {
   if ( standardAnimationOption( option ) ) {
    return orig.apply( this, arguments );
   } else {
    var args = _normalizeArguments.apply( this, arguments );
    args.mode = "show";
    return this.effect.call( this, args );
   }
  };
 } )( $.fn.show ),

 hide: ( function( orig ) {
  return function( option ) {
   if ( standardAnimationOption( option ) ) {
    return orig.apply( this, arguments );
   } else {
    var args = _normalizeArguments.apply( this, arguments );
    args.mode = "hide";
    return this.effect.call( this, args );
   }
  };
 } )( $.fn.hide ),

 toggle: ( function( orig ) {
  return function( option ) {
   if ( standardAnimationOption( option ) || typeof option === "boolean" ) {
    return orig.apply( this, arguments );
   } else {
    var args = _normalizeArguments.apply( this, arguments );
    args.mode = "toggle";
    return this.effect.call( this, args );
   }
  };
 } )( $.fn.toggle ),

 cssUnit: function( key ) {
  var style = this.css( key ),
   val = [];

  $.each( [ "em", "px", "%", "pt" ], function( i, unit ) {
   if ( style.indexOf( unit ) > 0 ) {
    val = [ parseFloat( style ), unit ];
   }
  } );
  return val;
 },

 cssClip: function( clipObj ) {
  if ( clipObj ) {
   return this.css( "clip", "rect(" + clipObj.top + "px " + clipObj.right + "px " +
    clipObj.bottom + "px " + clipObj.left + "px)" );
  }
  return parseClip( this.css( "clip" ), this );
 },

 transfer: function( options, done ) {
  var element = $( this ),
   target = $( options.to ),
   targetFixed = target.css( "position" ) === "fixed",
   body = $( "body" ),
   fixTop = targetFixed ? body.scrollTop() : 0,
   fixLeft = targetFixed ? body.scrollLeft() : 0,
   endPosition = target.offset(),
   animation = {
    top: endPosition.top - fixTop,
    left: endPosition.left - fixLeft,
    height: target.innerHeight(),
    width: target.innerWidth()
   },
   startPosition = element.offset(),
   transfer = $( "<div class='ui-effects-transfer'></div>" )
    .appendTo( "body" )
    .addClass( options.className )
    .css( {
     top: startPosition.top - fixTop,
     left: startPosition.left - fixLeft,
     height: element.innerHeight(),
     width: element.innerWidth(),
     position: targetFixed ? "fixed" : "absolute"
    } )
    .animate( animation, options.duration, options.easing, function() {
     transfer.remove();
     if ( $.isFunction( done ) ) {
      done();
     }
    } );
 }
} );

function parseClip( str, element ) {
  var outerWidth = element.outerWidth(),
   outerHeight = element.outerHeight(),
   clipRegex = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
   values = clipRegex.exec( str ) || [ "", 0, outerWidth, outerHeight, 0 ];

  return {
   top: parseFloat( values[ 1 ] ) || 0,
   right: values[ 2 ] === "auto" ? outerWidth : parseFloat( values[ 2 ] ),
   bottom: values[ 3 ] === "auto" ? outerHeight : parseFloat( values[ 3 ] ),
   left: parseFloat( values[ 4 ] ) || 0
  };
}

$.fx.step.clip = function( fx ) {
 if ( !fx.clipInit ) {
  fx.start = $( fx.elem ).cssClip();
  if ( typeof fx.end === "string" ) {
   fx.end = parseClip( fx.end, fx.elem );
  }
  fx.clipInit = true;
 }

 $( fx.elem ).cssClip( {
  top: fx.pos * ( fx.end.top - fx.start.top ) + fx.start.top,
  right: fx.pos * ( fx.end.right - fx.start.right ) + fx.start.right,
  bottom: fx.pos * ( fx.end.bottom - fx.start.bottom ) + fx.start.bottom,
  left: fx.pos * ( fx.end.left - fx.start.left ) + fx.start.left
 } );
};

} )();

/******************************************************************************/
/*********************************** EASING ***********************************/
/******************************************************************************/

( function() {

// Based on easing equations from Robert Penner (http://www.robertpenner.com/easing)

var baseEasings = {};

$.each( [ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function( i, name ) {
 baseEasings[ name ] = function( p ) {
  return Math.pow( p, i + 2 );
 };
} );

$.extend( baseEasings, {
 Sine: function( p ) {
  return 1 - Math.cos( p * Math.PI / 2 );
 },
 Circ: function( p ) {
  return 1 - Math.sqrt( 1 - p * p );
 },
 Elastic: function( p ) {
  return p === 0 || p === 1 ? p :
   -Math.pow( 2, 8 * ( p - 1 ) ) * Math.sin( ( ( p - 1 ) * 80 - 7.5 ) * Math.PI / 15 );
 },
 Back: function( p ) {
  return p * p * ( 3 * p - 2 );
 },
 Bounce: function( p ) {
  var pow2,
   bounce = 4;

  while ( p < ( ( pow2 = Math.pow( 2, --bounce ) ) - 1 ) / 11 ) {}
  return 1 / Math.pow( 4, 3 - bounce ) - 7.5625 * Math.pow( ( pow2 * 3 - 2 ) / 22 - p, 2 );
 }
} );

$.each( baseEasings, function( name, easeIn ) {
 $.easing[ "easeIn" + name ] = easeIn;
 $.easing[ "easeOut" + name ] = function( p ) {
  return 1 - easeIn( 1 - p );
 };
 $.easing[ "easeInOut" + name ] = function( p ) {
  return p < 0.5 ?
   easeIn( p * 2 ) / 2 :
   1 - easeIn( p * -2 + 2 ) / 2;
 };
} );

} )();

var effect = $.effects;


/*!
 * jQuery UI Effects Highlight 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Highlight Effect
//>>group: Effects
//>>description: Highlights the background of an element in a defined color for a custom duration.
//>>docs: http://api.jqueryui.com/highlight-effect/
//>>demos: http://jqueryui.com/effect/



var effectsEffectHighlight = $.effects.define( "highlight", "show", function( options, done ) {
 var element = $( this ),
  animation = {
   backgroundColor: element.css( "backgroundColor" )
  };

 if ( options.mode === "hide" ) {
  animation.opacity = 0;
 }

 $.effects.saveStyle( element );

 element
  .css( {
   backgroundImage: "none",
   backgroundColor: options.color || "#ffff99"
  } )
  .animate( animation, {
   queue: false,
   duration: options.duration,
   easing: options.easing,
   complete: done
  } );
} );


/*!
 * jQuery UI Effects Size 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Size Effect
//>>group: Effects
//>>description: Resize an element to a specified width and height.
//>>docs: http://api.jqueryui.com/size-effect/
//>>demos: http://jqueryui.com/effect/



var effectsEffectSize = $.effects.define( "size", function( options, done ) {

 // Create element
 var baseline, factor, temp,
  element = $( this ),

  // Copy for children
  cProps = [ "fontSize" ],
  vProps = [ "borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom" ],
  hProps = [ "borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight" ],

  // Set options
  mode = options.mode,
  restore = mode !== "effect",
  scale = options.scale || "both",
  origin = options.origin || [ "middle", "center" ],
  position = element.css( "position" ),
  pos = element.position(),
  original = $.effects.scaledDimensions( element ),
  from = options.from || original,
  to = options.to || $.effects.scaledDimensions( element, 0 );

 $.effects.createPlaceholder( element );

 if ( mode === "show" ) {
  temp = from;
  from = to;
  to = temp;
 }

 // Set scaling factor
 factor = {
  from: {
   y: from.height / original.height,
   x: from.width / original.width
  },
  to: {
   y: to.height / original.height,
   x: to.width / original.width
  }
 };

 // Scale the css box
 if ( scale === "box" || scale === "both" ) {

  // Vertical props scaling
  if ( factor.from.y !== factor.to.y ) {
   from = $.effects.setTransition( element, vProps, factor.from.y, from );
   to = $.effects.setTransition( element, vProps, factor.to.y, to );
  }

  // Horizontal props scaling
  if ( factor.from.x !== factor.to.x ) {
   from = $.effects.setTransition( element, hProps, factor.from.x, from );
   to = $.effects.setTransition( element, hProps, factor.to.x, to );
  }
 }

 // Scale the content
 if ( scale === "content" || scale === "both" ) {

  // Vertical props scaling
  if ( factor.from.y !== factor.to.y ) {
   from = $.effects.setTransition( element, cProps, factor.from.y, from );
   to = $.effects.setTransition( element, cProps, factor.to.y, to );
  }
 }

 // Adjust the position properties based on the provided origin points
 if ( origin ) {
  baseline = $.effects.getBaseline( origin, original );
  from.top = ( original.outerHeight - from.outerHeight ) * baseline.y + pos.top;
  from.left = ( original.outerWidth - from.outerWidth ) * baseline.x + pos.left;
  to.top = ( original.outerHeight - to.outerHeight ) * baseline.y + pos.top;
  to.left = ( original.outerWidth - to.outerWidth ) * baseline.x + pos.left;
 }
 element.css( from );

 // Animate the children if desired
 if ( scale === "content" || scale === "both" ) {

  vProps = vProps.concat( [ "marginTop", "marginBottom" ] ).concat( cProps );
  hProps = hProps.concat( [ "marginLeft", "marginRight" ] );

  // Only animate children with width attributes specified
  // TODO: is this right? should we include anything with css width specified as well
  element.find( "*[width]" ).each( function() {
   var child = $( this ),
    childOriginal = $.effects.scaledDimensions( child ),
    childFrom = {
     height: childOriginal.height * factor.from.y,
     width: childOriginal.width * factor.from.x,
     outerHeight: childOriginal.outerHeight * factor.from.y,
     outerWidth: childOriginal.outerWidth * factor.from.x
    },
    childTo = {
     height: childOriginal.height * factor.to.y,
     width: childOriginal.width * factor.to.x,
     outerHeight: childOriginal.height * factor.to.y,
     outerWidth: childOriginal.width * factor.to.x
    };

   // Vertical props scaling
   if ( factor.from.y !== factor.to.y ) {
    childFrom = $.effects.setTransition( child, vProps, factor.from.y, childFrom );
    childTo = $.effects.setTransition( child, vProps, factor.to.y, childTo );
   }

   // Horizontal props scaling
   if ( factor.from.x !== factor.to.x ) {
    childFrom = $.effects.setTransition( child, hProps, factor.from.x, childFrom );
    childTo = $.effects.setTransition( child, hProps, factor.to.x, childTo );
   }

   if ( restore ) {
    $.effects.saveStyle( child );
   }

   // Animate children
   child.css( childFrom );
   child.animate( childTo, options.duration, options.easing, function() {

    // Restore children
    if ( restore ) {
     $.effects.restoreStyle( child );
    }
   } );
  } );
 }

 // Animate
 element.animate( to, {
  queue: false,
  duration: options.duration,
  easing: options.easing,
  complete: function() {

   var offset = element.offset();

   if ( to.opacity === 0 ) {
    element.css( "opacity", from.opacity );
   }

   if ( !restore ) {
    element
     .css( "position", position === "static" ? "relative" : position )
     .offset( offset );

    // Need to save style here so that automatic style restoration
    // doesn't restore to the original styles from before the animation.
    $.effects.saveStyle( element );
   }

   done();
  }
 } );

} );


/*!
 * jQuery UI Effects Slide 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Slide Effect
//>>group: Effects
//>>description: Slides an element in and out of the viewport.
//>>docs: http://api.jqueryui.com/slide-effect/
//>>demos: http://jqueryui.com/effect/



var effectsEffectSlide = $.effects.define( "slide", "show", function( options, done ) {
 var startClip, startRef,
  element = $( this ),
  map = {
   up: [ "bottom", "top" ],
   down: [ "top", "bottom" ],
   left: [ "right", "left" ],
   right: [ "left", "right" ]
  },
  mode = options.mode,
  direction = options.direction || "left",
  ref = ( direction === "up" || direction === "down" ) ? "top" : "left",
  positiveMotion = ( direction === "up" || direction === "left" ),
  distance = options.distance ||
   element[ ref === "top" ? "outerHeight" : "outerWidth" ]( true ),
  animation = {};

 $.effects.createPlaceholder( element );

 startClip = element.cssClip();
 startRef = element.position()[ ref ];

 // Define hide animation
 animation[ ref ] = ( positiveMotion ? -1 : 1 ) * distance + startRef;
 animation.clip = element.cssClip();
 animation.clip[ map[ direction ][ 1 ] ] = animation.clip[ map[ direction ][ 0 ] ];

 // Reverse the animation if we're showing
 if ( mode === "show" ) {
  element.cssClip( animation.clip );
  element.css( ref, animation[ ref ] );
  animation.clip = startClip;
  animation[ ref ] = startRef;
 }

 // Actually animate
 element.animate( animation, {
  queue: false,
  duration: options.duration,
  easing: options.easing,
  complete: done
 } );
} );




}));
(function($){var textarea,staticOffset;var iLastMousePos=0;var iMin=32;var grip;$.fn.TextAreaResizer=function(){return this.each(function(){textarea=$(this).addClass('processed'),staticOffset=null;$(this).wrap('<div class="resizable-textarea"><span></span></div>').parent().append($('<div class="grippie"></div>').bind("mousedown",{el:this},startDrag));var grippie=$('div.grippie',$(this).parent())[0];grippie.style.marginRight=(grippie.offsetWidth-$(this)[0].offsetWidth)+'px'})};function startDrag(e){textarea=$(e.data.el);textarea.blur();iLastMousePos=mousePosition(e).y;staticOffset=textarea.height()-iLastMousePos;textarea.css('opacity',0.25);$(document).mousemove(performDrag).mouseup(endDrag);return false}function performDrag(e){var iThisMousePos=mousePosition(e).y;var iMousePos=staticOffset+iThisMousePos;if(iLastMousePos>=(iThisMousePos)){iMousePos-=5}iLastMousePos=iThisMousePos;iMousePos=Math.max(iMin,iMousePos);textarea.height(iMousePos+'px');if(iMousePos<iMin){endDrag(e)}return false}function endDrag(e){$(document).unbind('mousemove',performDrag).unbind('mouseup',endDrag);textarea.css('opacity',1);textarea.focus();textarea=null;staticOffset=null;iLastMousePos=0}function mousePosition(e){return{x:e.clientX+document.documentElement.scrollLeft,y:e.clientY+document.documentElement.scrollTop}}})(jQuery);
/**
 * imgnotes jQuery plugin
 * version 0.1
 *
 * Copyright (c) 2008 Dr. Tarique Sani <tarique@sanisoft.com>
 *
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * @URL      http://www.sanisoft.com/blog/2008/05/26/img-notes-jquery-plugin/
 * @Example  example.html
 *
 **/

//Wrap in a closure
(function($) {

 $.fn.imgNotes = function(o) {
        options = {
            template: "<div class='note'></div>"
        };
        if(typeof o != "undefined"){
            $.extend(options, o);
        }

  if(typeof options.notes != "undefined"){
   notes = options.notes;
  }

  image = this;

  imgOffset = $(image).offset();

  $(notes).each(function(){
   appendnote(this);
  });

  $(image).hover(
   function(){
    $('.note').show();
   },
   function(){
    $('.note').hide();
   }
  );

  addnoteevents();

  $(window).resize(function () {
   $('.note').remove();

   imgOffset = $(image).offset();

   $(notes).each(function(){
    appendnote(this);
   });

   addnoteevents();

  });
 }

 function addnoteevents() {
  $('.note').hover(
   function(){
    $('.note').show();
    $(this).next('.notep').show();
    $(this).next('.notep').css("z-index", 10000);
   },
   function(){
    $('.note').show();
    $(this).next('.notep').hide();
    $(this).next('.notep').css("z-index", 0);
   }
  );
 }


 function appendnote(note_data){

  var note_left  = parseInt(imgOffset.left) + parseInt(note_data.x1);
  var note_top   = parseInt(imgOffset.top) + parseInt(note_data.y1);
        var note_p_top = note_top + parseInt(note_data.height)+5;

        var note_template = options.template;

        if (typeof note_data.id != "undefined") {
            note_template = note_template.replace(/__id__/g, note_data.id);
        }

  note_area_div = $(note_template).css({ left: note_left + 'px', top: note_top + 'px', width: note_data.width + 'px', height: note_data.height + 'px' });

  if (typeof note_data.url != "undefined") {
   $(note_area_div).addClass("note_link").click(
    function(){
     document.location.href = note_data.url;
    }
   );
  }

  note_text_div = $('<div class="notep" >'+note_data.note+'</div>').css({ left: note_left + 'px', top: note_p_top + 'px', width: note_data.width + 'px'});

  $('body').append(note_area_div);
  $('body').append(note_text_div);
 }

// End the closure
})(jQuery);

/*
 * imgAreaSelect jQuery plugin
 * version 1.0.0-rc.1
 *
 * Copyright (c) 2008-2013 Michal Wojciechowski (odyniec.net)
 *
 * Dual licensed under the MIT (http://opensource.org/licenses/MIT)
 * and GPL (http://opensource.org/licenses/GPL-2.0) licenses.
 *
 * http://odyniec.net/projects/imgareaselect/
 *
 */

(function($) {

    /*
     * Math functions will be used extensively, so it's convenient to make a few
     * shortcuts
     */    
    var abs = Math.abs,
        max = Math.max,
        min = Math.min,
        round = Math.round;
    
    /**
     * Create a new HTML div element
     * 
     * @return A jQuery object representing the new element
     */
    function div() {
        return $('<div/>');
    }
    
    /**
     * imgAreaSelect initialization
     * 
     * @param img
     *            A HTML image element to attach the plugin to
     * @param options
     *            An options object
     */
    $.imgAreaSelect = function (img, options) {
        var 
            /* jQuery object representing the image */ 
            $img = $(img),
            
            /* Has the image finished loading? */
            imgLoaded,
            
            /* Plugin elements */
            
            /* Container box */
            $box = div(),
            /* Selection area */
            $area = div(),
            /* Border (four divs) */
            $border = div().add(div()).add(div()).add(div()),
            /* Outer area */
            $outer = div(),
            /* Handles (empty by default, initialized in setOptions()) */
            $handles = $([]),
            
            /* Image position (relative to viewport) */
            left, top,
            
            /* Image offset (as returned by .offset()) */
            imgOfs = { left: 0, top: 0 },
            
            /* Image dimensions (as returned by .width() and .height()) */
            imgWidth, imgHeight,
            
            /*
             * jQuery object representing the parent element that the plugin
             * elements are appended to
             */
            $parent,
            
            /* Parent element offset (as returned by .offset()) */
            parOfs = { left: 0, top: 0 },
            
            /* Base z-index for plugin elements */
            zIndex = 0,
                    
            /* Plugin elements position */
            position = 'absolute',
            
            /* X/Y coordinates of the starting point for move/resize operations */ 
            startX, startY,
    
            /*
             * Distance between the mouse cursor (or touch point) and selection area
             * edges (when resizing)
             */
            edgeX, edgeY,
            
            /* Horizontal and vertical scaling factors */
            scaleX, scaleY,
    
            /* Current resize mode ("nw", "se", etc.) */
            resize,
    
            /* Selection area constraints */
            minWidth, minHeight, maxWidth, maxHeight,
    
            /* Aspect ratio to maintain (floating point number) */
            aspectRatio,
    
            /* Are the plugin elements currently displayed? */
            shown,
    
            /* Current selection (relative to parent element) */
            x1, y1, x2, y2,
    
            /* Current selection (relative to scaled image) */
            selection = { x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0 },
    
            /* User agent */
            ua = navigator.userAgent,
            
            /* Is the user performing a touch action? */
            touch,
    
            /* Various helper variables used throughout the code */ 
            $p, d, i, o, w, h, adjusted;
    
        /*
         * Translate selection coordinates (relative to scaled image) to viewport
         * coordinates (relative to parent element)
         */
        
        /**
         * Translate selection X to viewport X
         * 
         * @param x
         *            Selection X
         * @return Viewport X
         */
        function viewX(x) {
            return x + imgOfs.left - parOfs.left;
        }
    
        /**
         * Translate selection Y to viewport Y
         * 
         * @param y
         *            Selection Y
         * @return Viewport Y
         */
        function viewY(y) {
            return y + imgOfs.top - parOfs.top;
        }
    
        /*
         * Translate viewport coordinates to selection coordinates
         */
        
        /**
         * Translate viewport X to selection X
         * 
         * @param x
         *            Viewport X
         * @return Selection X
         */
        function selX(x) {
            return x - imgOfs.left + parOfs.left;
        }
    
        /**
         * Translate viewport Y to selection Y
         * 
         * @param y
         *            Viewport Y
         * @return Selection Y
         */
        function selY(y) {
            return y - imgOfs.top + parOfs.top;
        }
        
        /*
         * Translate event coordinates (relative to document) to viewport
         * coordinates
         */
        
        /**
         * Get event X and translate it to viewport X
         * 
         * @param event
         *            The event object
         * @return Viewport X
         */
        function evX(event) {
            var coords = touchCoords(event) || event, x;
    
            if (x = parseInt(coords.pageX))
                return x - parOfs.left;
        }
    
        /**
         * Get event Y and translate it to viewport Y
         * 
         * @param event
         *            The event object
         * @return Viewport Y
         */
        function evY(event) {
            var coords = touchCoords(event) || event, y;
    
            if (y = parseInt(coords.pageY))
                return y - parOfs.top;
        }
        
        /**
         * Get the first touch object in an event
         *
         * @param event
         *            The event object
         * @return The first touch object found in the event object, or false if
         *         none are found
         */
        function touchCoords(event) {
            var oev = event.originalEvent || {};
            
            return oev.touches && oev.touches.length ? oev.touches[0] : false;
        }
    
        /**
         * Get the current selection
         * 
         * @param noScale
         *            If set to <code>true</code>, scaling is not applied to the
         *            returned selection
         * @return Selection object
         */
        function getSelection(noScale) {
            var sx = noScale || scaleX, sy = noScale || scaleY;
            
            return { x1: round(selection.x1 * sx),
                y1: round(selection.y1 * sy),
                x2: round(selection.x2 * sx) - 1,
                y2: round(selection.y2 * sy) - 1,
                width: round(selection.x2 * sx) - round(selection.x1 * sx),
                height: round(selection.y2 * sy) - round(selection.y1 * sy) };
        }
        
        /**
         * Set the current selection
         * 
         * @param x1
         *            X coordinate of the upper left corner of the selection area
         * @param y1
         *            Y coordinate of the upper left corner of the selection area
         * @param x2
         *            X coordinate of the lower right corner of the selection area
         * @param y2
         *            Y coordinate of the lower right corner of the selection area
         * @param noScale
         *            If set to <code>true</code>, scaling is not applied to the
         *            new selection
         */
        function setSelection(x1, y1, x2, y2, noScale) {
            var sx = noScale || scaleX, sy = noScale || scaleY;
            
            selection = {
                x1: round(x1 / sx || 0),
                y1: round(y1 / sy || 0),
                x2: round(++x2 / sx || 0),
                y2: round(++y2 / sy || 0)
            };
            
            selection.width = selection.x2 - selection.x1;
            selection.height = selection.y2 - selection.y1;
        }
    
        /**
         * Recalculate image and parent offsets
         */
        function adjust() {
            /*
             * Do not adjust if image has not yet loaded or if width is not a
             * positive number. The latter might happen when imgAreaSelect is put
             * on a parent element which is then hidden.
             */
            if (!imgLoaded || !$img.width())
                return;
            
            /*
             * Get image offset. The .offset() method returns float values, so they
             * need to be rounded.
             */
            imgOfs = { left: round($img.offset().left), top: round($img.offset().top) };
            
            /* Get image dimensions */
            imgWidth = $img.innerWidth();
            imgHeight = $img.innerHeight();
            
            imgOfs.top += ($img.outerHeight() - imgHeight) >> 1;
            imgOfs.left += ($img.outerWidth() - imgWidth) >> 1;
    
            /* Set minimum and maximum selection area dimensions */
            minWidth = round(options.minWidth / scaleX) || 0;
            minHeight = round(options.minHeight / scaleY) || 0;
            maxWidth = round(min(options.maxWidth / scaleX || 1<<24, imgWidth));
            maxHeight = round(min(options.maxHeight / scaleY || 1<<24, imgHeight));
            
            /* Determine parent element offset */ 
            parOfs = position == 'fixed' ?
                /* Plugin elements position set to fixed */
                { left: $(document).scrollLeft(), top: $(document).scrollTop() } :
                /* Check parent element position */
                /static|^$/.test($parent.css('position')) ?
                    /* Static */
                    { left: 0, top: 0 } :
                    /* Absolute or relative */
                    { left: round($parent.offset().left) - $parent.scrollLeft(),
                        top: round($parent.offset().top) - $parent.scrollTop() };
    
            left = viewX(0);
            top = viewY(0);
            
            /*
             * Check if selection area is within image boundaries, adjust if
             * necessary
             */
            if (selection.x2 > imgWidth || selection.y2 > imgHeight)
                fixAreaCoords();
        }
    
        /**
         * Update plugin elements
         * 
         * @param resetKeyPress
         *            If set to <code>false</code>, this instance's keypress
         *            event handler is not activated
         */
        function update(resetKeyPress) {
            /* If plugin elements are hidden, do nothing */
            if (!shown) return;
    
            /*
             * Set the position and size of the container box and the selection area
             * inside it
             */
            $box.css({ left: viewX(selection.x1), top: viewY(selection.y1) })
                .add($area).width(w = selection.width).height(h = selection.height);
    
            /*
             * Reset the position of selection area, borders, and handles (IE6/IE7
             * position them incorrectly if we don't do this)
             */ 
            $area.add($border).add($handles).css({ left: 0, top: 0 });
    
            /* Set border dimensions */
            $border.add($outer)
                .width(max(w - $border.outerWidth() + $border.innerWidth(), 0))
                .height(max(h - $border.outerHeight() + $border.innerHeight(), 0));
    
            /* Set the dimensions and border styles of the outer area */
            $outer.css({
                left: left,
                top: top,
                width: w,
                height: h,
                borderStyle: 'solid',
                borderWidth: selection.y1 + 'px ' +
                    (imgWidth - selection.x2) + 'px ' + (imgHeight - selection.y2) +
                    'px ' + selection.x1 + 'px'
            });
    
            w -= $handles.outerWidth();
            h -= $handles.outerHeight();
            
            /* Arrange handles */
            switch ($handles.length) {
            case 8:
                $($handles[4]).css({ left: w >> 1 });
                $($handles[5]).css({ left: w, top: h >> 1 });
                $($handles[6]).css({ left: w >> 1, top: h });
                $($handles[7]).css({ top: h >> 1 });
            case 4:
                $handles.slice(1,3).css({ left: w });
                $handles.slice(2,4).css({ top: h });
            }
    
            if (resetKeyPress !== false) {
                /*
                 * Need to reset the document keypress event handler -- unbind the
                 * current handler
                 */
                if ($.imgAreaSelect.keyPress != docKeyPress)
                    $(document).unbind($.imgAreaSelect.keyPress,
                        $.imgAreaSelect.onKeyPress);
    
                if (options.keys)
                    /*
                     * Set the document keypress event handler to this instance's
                     * docKeyPress() function
                     */
                    $(document)[$.imgAreaSelect.keyPress](
                        $.imgAreaSelect.onKeyPress = docKeyPress);
            }
        }
        
        /**
         * Do the complete update sequence: recalculate offsets, update the
         * elements, and set the correct values of x1, y1, x2, and y2.
         * 
         * @param resetKeyPress
         *            If set to <code>false</code>, this instance's keypress
         *            event handler is not activated
         */
        function doUpdate(resetKeyPress) {
            adjust();
            update(resetKeyPress);
            x1 = viewX(selection.x1); y1 = viewY(selection.y1);
            x2 = viewX(selection.x2); y2 = viewY(selection.y2);
        }
        
        /**
         * Hide or fade out an element (or multiple elements)
         * 
         * @param $elem
         *            A jQuery object containing the element(s) to hide/fade out
         * @param fn
         *            Callback function to be called when fadeOut() completes
         */
        function hide($elem, fn) {
            options.fadeDuration ? $elem.fadeOut(options.fadeDuration, fn) : $elem.hide();
        }
    
        /**
         * Check if a touch event is expected and if the passed event object really
         * is a touch event
         *
         * @param event
         *            The event object
         * @return True if the event handler should be interrupted
         */
        function breakWhenNoTouch(event) {
            return touch && !/^touch/.test(event.type);
        }
    
        /**
         * Check event coordinates to determine if the selection area should be
         * resized or moved
         *
         * @param event
         *            The event object
         */
        function checkResize(event) {
            var x = selX(evX(event)) - selection.x1,
                y = selY(evY(event)) - selection.y1;
    
            /* Clear the resize mode */
            resize = '';
    
            if (options.resizable) {
                /*
                 * Check if the mouse pointer is over the resize margin area and set
                 * the resize mode accordingly
                 */
                if (y <= options.resizeMargin)
                    resize = 'n';
                else if (y >= selection.height - options.resizeMargin)
                    resize = 's';
                if (x <= options.resizeMargin)
                    resize += 'w';
                else if (x >= selection.width - options.resizeMargin)
                    resize += 'e';
            }
    
            $box.css('cursor', resize ? resize + '-resize' :
                options.movable ? 'move' : '');
        }
    
        /**
         * Selection area mousemove event handler
         * 
         * @param event
         *            The event object
         */
        function areaMouseMove(event) {
            if (breakWhenNoTouch(event))
                return;
    
            if (!adjusted) {
                adjust();
                adjusted = true;
    
                $box.one('mouseout', function () { adjusted = false; });
            }
    
            checkResize(event);
        }
    
        /**
         * Document mouseup event handler
         * 
         * @param event
         *            The event object
         */
        function docMouseUp(event) {
            /* Reset touch action flag */
            touch = false;
            /* Set back the default cursor */
            $('body').css('cursor', '');
            /*
             * If autoHide is enabled, or if the selection has zero width/height,
             * hide the selection and the outer area
             */
            if (options.autoHide || selection.width * selection.height == 0)
                hide($box.add($outer), function () { $(this).hide(); });
    
            $(document).off('mousemove touchmove', selectingMouseMove);
            $box.on('mousemove touchmove', areaMouseMove);
            
            /*
             * If docMouseUp() is called by areaMouseDown() to work around the issue
             * with Android Chrome, there is no event object, and we don't want to
             * run the onSelectEnd callback function.
             */
            if (event)
                options.onSelectEnd(img, getSelection());
        }
    
        /**
         * Selection area mousedown event handler
         * 
         * @param event
         *            The event object
         * @return false
         */
        function areaMouseDown(event) {
            if (event.type == 'mousedown' && event.which != 1) return false;
            
            if (event.type == 'touchstart') {
                /*
                 * Android Chrome often does not produce a touchend event
                 * (https://code.google.com/p/chromium/issues/detail?id=152913), so
                 * if it appears that the touch flag is still set, we call the
                 * mouseup/touchend event handler to clean up after the previous
                 * touch action.
                 */
                if (touch)
                    docMouseUp();
    
                /* This is a start of a touch action */
                touch = true;
    
                /* 
                 * Normally, checkResize() is called by the mousemove event handler
                 * triggered just before mousedown, but with a touch action there
                 * is no mousemove, so we need to call it explicitly.
                 */
                checkResize(event);
            }
            else
                adjust();
    
            if (resize) {
                /* Resize mode is in effect */
    
                /*
                 * Set (x1, y1) to the fixed corner of the selection area, and (x2,
                 * y2) to the corner that's being moved.
                 */
                x1 = viewX(selection['x' + (1 + /w/.test(resize))]);
                y1 = viewY(selection['y' + (1 + /n/.test(resize))]);
                x2 = viewX(selection['x' + (1 + !/w/.test(resize))]);
                y2 = viewY(selection['y' + (1 + !/n/.test(resize))]);
    
                edgeX = x2 - evX(event);
                edgeY = y2 - evY(event);
    
                $(document).on('mousemove touchmove', selectingMouseMove)
                    .one('mouseup touchend', docMouseUp);
                $box.off('mousemove touchmove', areaMouseMove);
            }
            else if (options.movable) {
                startX = left + selection.x1 - evX(event);
                startY = top + selection.y1 - evY(event);
    
                $box.off('mousemove touchmove', areaMouseMove);
    
                $(document).on('mousemove touchmove', movingMouseMove)
                    .one('mouseup touchend', function () {
                        touch = false;
                        options.onSelectEnd(img, getSelection());
    
                        $(document).off('mousemove touchmove', movingMouseMove);
                        $box.on('mousemove touchmove', areaMouseMove);
                    });
            }
            else
                $img.mousedown(event);
    
            return false;
        }
    
        /**
         * Adjust the x2/y2 coordinates to maintain aspect ratio (if defined)
         * 
         * @param xFirst
         *            If set to <code>true</code>, calculate x2 first. Otherwise,
         *            calculate y2 first.
         */
        function fixAspectRatio(xFirst) {
            if (aspectRatio)
                if (xFirst) {
                    x2 = max(left, min(left + imgWidth,
                        x1 + abs(y2 - y1) * aspectRatio * (x2 > x1 || -1)));    
                    y2 = round(max(top, min(top + imgHeight,
                        y1 + abs(x2 - x1) / aspectRatio * (y2 > y1 || -1))));
                    x2 = round(x2);
                }
                else {
                    y2 = max(top, min(top + imgHeight,
                        y1 + abs(x2 - x1) / aspectRatio * (y2 > y1 || -1)));
                    x2 = round(max(left, min(left + imgWidth,
                        x1 + abs(y2 - y1) * aspectRatio * (x2 > x1 || -1))));
                    y2 = round(y2);
                }
        }
    
        /**
         * Check if the coordinates of the selection area are within the required
         * limits and conform to the aspect ratio; adjust if necessary
         */
        function fixAreaCoords() {
            /*
             * Make sure the top left corner of the selection area stays within
             * image boundaries (it might not if the image source was dynamically
             * changed).
             */
            x1 = min(x1, left + imgWidth);
            y1 = min(y1, top + imgHeight);
            
            if (abs(x2 - x1) < minWidth) {
                /* Selection width is smaller than minWidth */
                x2 = x1 - minWidth * (x2 < x1 || -1);
    
                if (x2 < left)
                    x1 = left + minWidth;
                else if (x2 > left + imgWidth)
                    x1 = left + imgWidth - minWidth;
            }
    
            if (abs(y2 - y1) < minHeight) {
                /* Selection height is smaller than minHeight */
                y2 = y1 - minHeight * (y2 < y1 || -1);
    
                if (y2 < top)
                    y1 = top + minHeight;
                else if (y2 > top + imgHeight)
                    y1 = top + imgHeight - minHeight;
            }
    
            x2 = max(left, min(x2, left + imgWidth));
            y2 = max(top, min(y2, top + imgHeight));
            
            fixAspectRatio(abs(x2 - x1) < abs(y2 - y1) * aspectRatio);
    
            if (abs(x2 - x1) > maxWidth) {
                /* Selection width is greater than maxWidth */
                x2 = x1 - maxWidth * (x2 < x1 || -1);
                fixAspectRatio();
            }
    
            if (abs(y2 - y1) > maxHeight) {
                /* Selection height is greater than maxHeight */
                y2 = y1 - maxHeight * (y2 < y1 || -1);
                fixAspectRatio(true);
            }
    
            selection = { x1: selX(min(x1, x2)), x2: selX(max(x1, x2)),
                y1: selY(min(y1, y2)), y2: selY(max(y1, y2)),
                width: abs(x2 - x1), height: abs(y2 - y1) };
        }
    
        /**
         * Resize the selection area respecting the minimum/maximum dimensions and
         * aspect ratio
         */
        function doResize() {
            fixAreaCoords();
    
            update();
    
            options.onSelectChange(img, getSelection());
        }
    
        /**
         * Mousemove event handler triggered when the user is selecting an area
         * 
         * @param event
         *            The event object
         * @return false
         */
        function selectingMouseMove(event) {
            if (breakWhenNoTouch(event))
                return;
            
            fixAreaCoords();
    
            x2 = /w|e|^$/.test(resize) || aspectRatio ? evX(event) + edgeX : viewX(selection.x2);
            y2 = /n|s|^$/.test(resize) || aspectRatio ? evY(event) + edgeY : viewY(selection.y2);
    
            doResize();
    
            return false;        
        }
    
        /**
         * Move the selection area
         * 
         * @param newX1
         *            New viewport X1
         * @param newY1
         *            New viewport Y1
         */
        function doMove(newX1, newY1) {
            x2 = (x1 = newX1) + selection.width;
            y2 = (y1 = newY1) + selection.height;
    
            $.extend(selection, { x1: selX(x1), y1: selY(y1), x2: selX(x2),
                y2: selY(y2) });
    
            update();
    
            options.onSelectChange(img, getSelection());
        }
    
        /**
         * Mousemove event handler triggered when the selection area is being moved
         * 
         * @param event
         *            The event object
         * @return false
         */
        function movingMouseMove(event) {
            if (breakWhenNoTouch(event))
                return;
    
            x1 = max(left, min(startX + evX(event), left + imgWidth - selection.width));
            y1 = max(top, min(startY + evY(event), top + imgHeight - selection.height));
    
            doMove(x1, y1);
    
            event.preventDefault();     
            return false;
        }
    
        /**
         * Start selection
         */
        function startSelection() {
            $(document).off('mousemove touchmove', startSelection);
            adjust();
    
            x2 = x1;
            y2 = y1;       
            doResize();
    
            resize = '';
    
            if (!$outer.is(':visible'))
                /* Show the plugin elements */
                $box.add($outer).hide().fadeIn(options.fadeDuration||0)
    
            shown = true;
    
            $(document).off('mouseup touchend', cancelSelection)
                .on('mousemove touchmove', selectingMouseMove)
                .one('mouseup touchend', docMouseUp);
            $box.off('mousemove touchmove', areaMouseMove);
    
            options.onSelectStart(img, getSelection());
        }
    
        /**
         * Cancel selection
         */
        function cancelSelection() {
            $(document).off('mousemove touchmove', startSelection)
                .off('mouseup touchend', cancelSelection);
            hide($box.add($outer));
            
            setSelection(selX(x1), selY(y1), selX(x1), selY(y1));
            
            /* If this is an API call, callback functions should not be triggered */
            if (!(this instanceof $.imgAreaSelect)) {
                options.onSelectChange(img, getSelection());
                options.onSelectEnd(img, getSelection());
            }
        }
    
        /**
         * Image mousedown event handler
         * 
         * @param event
         *            The event object
         * @return false
         */
        function imgMouseDown(event) {
            /* Ignore the event if animation is in progress */
            if (event.type == 'mousedown' && event.which != 1 ||
                    $outer.is(':animated'))
                return false;
    
            /* If it's a touch action, set the touch flag */
            touch = event.type == 'touchstart';
    
            adjust();
            startX = x1 = evX(event);
            startY = y1 = evY(event);
            edgeX = edgeY = 0;
    
            /* Selection will start when the mouse is moved */
            $(document).on({ 'mousemove touchmove': startSelection,
                'mouseup touchend': cancelSelection });
    
            return false;
        }
        
        /**
         * Window resize event handler
         */
        function windowResize() {
            doUpdate(false);
        }
    
        /**
         * Image load event handler. This is the final part of the initialization
         * process.
         */
        function imgLoad() {
            imgLoaded = true;
    
            /* Set options */
            setOptions(options = $.extend({
                classPrefix: 'imgareaselect',
                movable: true,
                parent: 'body',
                resizable: true,
                resizeMargin: 10,
                onInit: function () {},
                onSelectStart: function () {},
                onSelectChange: function () {},
                onSelectEnd: function () {}
            }, options));
    
            if (options.show) {
                shown = true;
                adjust();
                update();
                $box.add($outer).hide().fadeIn(options.fadeDuration||0)
            }
    
            /*
             * Call the onInit callback. The setTimeout() call is used to ensure
             * that the plugin has been fully initialized and the object instance is
             * available (so that it can be obtained in the callback).
             */
            setTimeout(function () { options.onInit(img, getSelection()); }, 0);
        }
    
        /**
         * Document keypress event handler
         * 
         * @param event
         *            The event object
         * @return false
         */
        var docKeyPress = function(event) {
            var k = options.keys, d, t, key = event.keyCode;
            
            d = !isNaN(k.alt) && (event.altKey || event.originalEvent.altKey) ? k.alt :
                !isNaN(k.ctrl) && event.ctrlKey ? k.ctrl :
                !isNaN(k.shift) && event.shiftKey ? k.shift :
                !isNaN(k.arrows) ? k.arrows : 10;
    
            if (k.arrows == 'resize' || (k.shift == 'resize' && event.shiftKey) ||
                (k.ctrl == 'resize' && event.ctrlKey) ||
                (k.alt == 'resize' && (event.altKey || event.originalEvent.altKey)))
            {
                /* Resize selection */
                
                switch (key) {
                case 37:
                    /* Left */
                    d = -d;
                case 39:
                    /* Right */
                    t = max(x1, x2);
                    x1 = min(x1, x2);
                    x2 = max(t + d, x1);
                    fixAspectRatio();
                    break;
                case 38:
                    /* Up */
                    d = -d;
                case 40:
                    /* Down */
                    t = max(y1, y2);
                    y1 = min(y1, y2);
                    y2 = max(t + d, y1);
                    fixAspectRatio(true);
                    break;
                default:
                    return;
                }
    
                doResize();
            }
            else {
                /* Move selection */
                
                x1 = min(x1, x2);
                y1 = min(y1, y2);
    
                switch (key) {
                case 37:
                    /* Left */
                    doMove(max(x1 - d, left), y1);
                    break;
                case 38:
                    /* Up */
                    doMove(x1, max(y1 - d, top));
                    break;
                case 39:
                    /* Right */
                    doMove(x1 + min(d, imgWidth - selX(x2)), y1);
                    break;
                case 40:
                    /* Down */
                    doMove(x1, y1 + min(d, imgHeight - selY(y2)));
                    break;
                default:
                    return;
                }
            }
    
            return false;
        };
    
        /**
         * Set plugin options
         * 
         * @param newOptions
         *            The new options object
         */
        function setOptions(newOptions) {
            if (newOptions.parent)
                ($parent = $(newOptions.parent)).append($box).append($outer);
            
            /* Merge the new options with the existing ones */
            $.extend(options, newOptions);
    
            adjust();
    
            if (newOptions.handles != null) {
                /* Recreate selection area handles */
                $handles.remove();
                $handles = $([]);
    
                i = newOptions.handles ? newOptions.handles == 'corners' ? 4 : 8 : 0;
    
                while (i--)
                    $handles = $handles.add(div());
                
                /* Add a class to handles and set the CSS properties */
                $handles.addClass(options.classPrefix + '-handle').css({
                    position: 'absolute',
                    /*
                     * The font-size property needs to be set to zero, otherwise
                     * Internet Explorer makes the handles too large
                     */
                    fontSize: 0,
                    zIndex: zIndex + 1 || 1
                });
                
                /*
                 * If handle width/height has not been set with CSS rules, set the
                 * default 5px
                 */
                if (!parseInt($handles.css('width')) >= 0)
                    $handles.width(5).height(5);
            }
    
            /* Calculate scale factors */
            scaleX = options.imageWidth / imgWidth || 1;
            scaleY = options.imageHeight / imgHeight || 1;
    
            /* Set selection */
            if (newOptions.x1 != null) {
                setSelection(newOptions.x1, newOptions.y1, newOptions.x2,
                    newOptions.y2);
                newOptions.show = !newOptions.hide;
            }
    
            if (newOptions.keys)
                /* Enable keyboard support */
                options.keys = $.extend({ shift: 1, ctrl: 'resize' },
                    newOptions.keys);
    
            /* Add classes to plugin elements */
            $outer.addClass(options.classPrefix + '-outer');
            $outer.css('opacity', '0.8');
            $area.addClass(options.classPrefix + '-selection');
            for (i = 0; i++ < 4;)
                $($border[i-1]).addClass(options.classPrefix + '-border' + i);
    
            /* Append all the selection area elements to the container box */
            $box.append($area.add($border)).append($handles);
    
            if (msie) {
                if (o = ($outer.css('filter')||'').match(/opacity=(\d+)/))
                    $outer.css('opacity', o[1]/100);
                if (o = ($border.css('filter')||'').match(/opacity=(\d+)/))
                    $border.css('opacity', o[1]/100);
            }
            
            if (newOptions.hide)
                hide($box.add($outer));
            else if (newOptions.show && imgLoaded) {
                shown = true;
                $box.add($outer).fadeIn(options.fadeDuration||0)
                doUpdate();
            }
    
            /* Calculate the aspect ratio factor */
            aspectRatio = (d = (options.aspectRatio || '').split(/:/))[0] / d[1];
    
            $img.add($outer).off('mousedown touchstart', imgMouseDown);
            
            if (options.disable || options.enable === false) {
                /* Disable the plugin */
                $box.off({ 'mousemove touchmove': areaMouseMove,
                    'mousedown touchstart': areaMouseDown });
                $(window).off('resize', windowResize);
            }
            else {
                if (options.enable || options.disable === false) {
                    /* Enable the plugin */
                    if (options.resizable || options.movable)
                        $box.on({ 'mousemove touchmove': areaMouseMove,
                            'mousedown touchstart': areaMouseDown });
        
                    $(window).resize(windowResize);
                }
    
                if (!options.persistent)
                    $img.add($outer).on('mousedown touchstart', imgMouseDown);
            }
            
            options.enable = options.disable = undefined;
        }
        
        /**
         * Remove plugin completely
         */
        this.remove = function () {
            /*
             * Call setOptions with { disable: true } to unbind the event handlers
             */
            setOptions({ disable: true });
            $box.add($outer).remove();
        };
        
        /*
         * Public API
         */
        
        /**
         * Get current options
         * 
         * @return An object containing the set of options currently in use
         */
        this.getOptions = function () { return options; };
        
        /**
         * Set plugin options
         * 
         * @param newOptions
         *            The new options object
         */
        this.setOptions = setOptions;
        
        /**
         * Get the current selection
         * 
         * @param noScale
         *            If set to <code>true</code>, scaling is not applied to the
         *            returned selection
         * @return Selection object
         */
        this.getSelection = getSelection;
        
        /**
         * Set the current selection
         * 
         * @param x1
         *            X coordinate of the upper left corner of the selection area
         * @param y1
         *            Y coordinate of the upper left corner of the selection area
         * @param x2
         *            X coordinate of the lower right corner of the selection area
         * @param y2
         *            Y coordinate of the lower right corner of the selection area
         * @param noScale
         *            If set to <code>true</code>, scaling is not applied to the
         *            new selection
         */
        this.setSelection = setSelection;
        
        /**
         * Cancel selection
         */
        this.cancelSelection = cancelSelection;
        
        /**
         * Update plugin elements
         * 
         * @param resetKeyPress
         *            If set to <code>false</code>, this instance's keypress
         *            event handler is not activated
         */
        this.update = doUpdate;
    
        /* Do the dreaded browser detection */
        var msie = (/msie ([\w.]+)/i.exec(ua)||[])[1],
            safari = /webkit/i.test(ua) && !/chrome/i.test(ua);
    
        /* 
         * Traverse the image's parent elements (up to <body>) and find the
         * highest z-index
         */
        $p = $img;
    
        while ($p.length) {
            zIndex = max(zIndex,
                !isNaN($p.css('z-index')) ? $p.css('z-index') : zIndex);
            /*
             * If the parent element is not set explicitly, check if any of the
             * ancestor elements has fixed position
             */ 
            if (!options.parent && $p.css('position') == 'fixed')
                position = 'fixed';
    
            $p = $p.parent(':not(body)');
        }
    
        /*
         * If z-index is given as an option, it overrides the one found by the
         * above loop
         */
        zIndex = options.zIndex || zIndex;
    
        /*
         * In MSIE and WebKit, we need to use the keydown event instead of keypress
         */
        $.imgAreaSelect.keyPress = msie || safari ? 'keydown' : 'keypress';
    
        $box.add($outer).hide().css({ position: position, overflow: 'hidden',
            zIndex: zIndex || '0' });
        $box.css({ zIndex: zIndex + 2 || 2 });
        $area.add($border).css({ position: 'absolute', fontSize: 0 });
        
        /*
         * If the image has been fully loaded, or if it is not really an image (eg.
         * a div), call imgLoad() immediately; otherwise, bind it to be called once
         * on image load event.
         */
        img.complete || img.readyState == 'complete' || !$img.is('img') ?
            imgLoad() : $img.one('load', imgLoad);
    
        /* 
         * MSIE 9.0 doesn't always fire the image load event -- resetting the src
         * attribute seems to trigger it. The check is for version 7 and above to
         * accommodate for MSIE 9 running in compatibility mode.
         */
        if (!imgLoaded && msie && msie >= 7)
            img.src = img.src;
    };
    
    /**
     * Invoke imgAreaSelect on a jQuery object containing the image(s)
     * 
     * @param options
     *            Options object
     * @return The jQuery object or a reference to imgAreaSelect instance (if the
     *         <code>instance</code> option was specified)
     */
    $.fn.imgAreaSelect = function (options) {
        options = options || {};
    
        this.each(function () {
            /* Is there already an imgAreaSelect instance bound to this element? */
            if ($(this).data('imgAreaSelect')) {
                /* Yes there is -- is it supposed to be removed? */
                if (options.remove) {
                    /* Remove the plugin */
                    $(this).data('imgAreaSelect').remove();
                    $(this).removeData('imgAreaSelect');
                }
                else
                    /* Reset options */
                    $(this).data('imgAreaSelect').setOptions(options);
            }
            else if (!options.remove) {
                /* No exising instance -- create a new one */
                
                /*
                 * If neither the "enable" nor the "disable" option is present, add
                 * "enable" as the default
                 */ 
                if (options.enable === undefined && options.disable === undefined)
                    options.enable = true;
    
                $(this).data('imgAreaSelect', new $.imgAreaSelect(this, options));
            }
        });
        
        if (options.instance)
            /*
             * Return the imgAreaSelect instance bound to the first element in the
             * set
             */
            return $(this).data('imgAreaSelect');
    
        return this;
    };
    
    })(jQuery);
    
function HidePopups(event) {
 var el = event.target;
 if(el.tagName.toUpperCase() == "SELECT" || el.tagName.toUpperCase() == "INPUT") return false;
 if(el.className.toUpperCase()== "TOGGLE") return true;
 $(".popup").each(function(){ $(this).hide(); });
 $("body").unbind('mouseup', HidePopups).unbind('keyup', HidePopups);
 return true;
}

function ShowPopup(node_id) {
 $(".popup").each(function(){ $(this).remove(); });

 var popup = $("#HiddenPopup");
 var popup_clone = $(popup).clone();

 $(popup_clone).html($(popup_clone).html().replace(/__n__/ig, node_id));

    $(popup).after($(popup_clone)
        .addClass('popup')
        .css("left", $("#TreeNode"+node_id).offset().left+$("#TreeNode"+node_id).width())
        .css("top", $("#TreeNode"+node_id).offset().top-80)
        .show()
    );

 $("body").bind('mouseup', HidePopups).bind('keyup', HidePopups);
}

var dragging = 0;
var dragging_mode = '';
var mouseX, mouseY;
var iPhone = (navigator.userAgent.indexOf('iPhone') != -1);
var static_mode = iPhone || (window.location.search.substring(1).indexOf('print')!=-1);


function MoveToNode(node_id) {
 var node = $('#TreeNode' + node_id);
 if (node) {
        $('#tree').css({
            'left': -$(node).position().left + $('#tree_window').width() / 2,
            'top': -$(node).position().top - $(node).height() + $('#tree_window').height() / 2})
 }
}

$(document).ready(function() {
    if (!static_mode) { // for printing or for iPhone browser (has drag scrolling already)
        $('#tree_window').mousedown(function(e) {
            if (!dragging) {
                dragging = 1;
                dragging_mode = 'tree';
                mouseX = getMouseX(e);
                mouseY = getMouseY(e);
            }
        });
        $('#zoom_track').mousedown(function() {
            if (!dragging) {
                dragging = 1;
                dragging_mode = 'zoom-track';
            }
        });
        $('#zoom_slider').mousedown(function() {
            if (!dragging) {
                dragging = 1;
                dragging_mode = 'zoom-slider';
            }
        });
        $(document).mouseup(function() {
            dragging = 0;
            dragging_mode = '';
        });

        $(document).mousemove(function(e) {
            if (dragging) {
                if ( e == null ) e = document.parentWindow.event;
                if (dragging==2) {
                    x = mouseX - getMouseX(e);
                    y = mouseY - getMouseY(e);
                    if (dragging_mode == 'tree') {
                        var pos = $('#tree').position();
                        $('#tree').css({'left': pos.left - x, 'top': pos.top - y})
                    } else if (dragging_mode == 'zoom-slider') {
                        slider_pos = Math.max(0, Math.min(143, $('#zoom_slider').position().top - y));
                        $('#zoom_slider').css({'top': slider_pos});
                        $('#tree').css({'fontSize': (143-slider_pos)/143*11+1});
                    } else if (dragging_mode == 'zoom-track') {

                    }
                }
                mouseX = getMouseX(e);
                mouseY = getMouseY(e);
                if (mouseX==null || mouseY==null) dragging = 0; else dragging = 2;
            }
        });

        $('#zoomer>img').click(function(e) {
            $('#tree').css({'left': $('#tree_window').width() / 2, 'top': $('#tree_window').height() / 2});
        });
    } else { // static_mode mode: Allow the device's drag-scrolling, rather than use javascript drag-scrolling.
        $('#zoomer').hide();
        $('#tree_window').css({'position': 'static'});

        var leftmost = 0;
        var topmost = 0;
        $('#tree li').each(function() {
            if ($(this).position().top < topmost) {
                topmost = $(this).position().top;
            }
            if ($(this).position().left < leftmost) {
                leftmost = $(this).position().left;
            }
        });

        $('#tree').css({'left': (-leftmost), 'top': (-topmost) + $('#header_container').height() + 5, 'margin': 5});
        $('#header_container').css({'position': 'fixed', 'z-index': 99999999});
        $('html, body').animate({
            scrollLeft: ($('.main:first').offset().left - (document.body.clientWidth/2)),
            scrollTop: ($('.main:first').offset().top)
        }, 500);
    }
});
function getMouseX(evt) {
 if (evt.pageX) return evt.pageX;
 else if (evt.clientX)
  return evt.clientX + (document.documentElement.scrollLeft ?
  document.documentElement.scrollLeft :
  document.body.scrollLeft);
 else return null;
}
function getMouseY(evt) {
 if (evt.pageY) return evt.pageY;
 else if (evt.clientY)
  return evt.clientY + (document.documentElement.scrollTop ?
  document.documentElement.scrollTop :
  document.body.scrollTop);
 else return null;
}