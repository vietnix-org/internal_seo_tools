(()=>{var t={551:function(t){!function(e){let n=[];const o=Array.prototype.forEach;function r(t){const e=[];let n=0;const o=t.length;for(;n<o;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<o){const o=t.charCodeAt(n++);56320==(64512&o)?e.push(((1023&r)<<10)+(1023&o)+65536):(e.push(r),n--)}else e.push(r)}return e}function l(t,e){const n=Object.prototype.toString.call(t),o="string"==typeof t||"[object NodeList]"===n||"[object HTMLCollection]"===n||1===t.nodeType,r="function"==typeof e;return o||console.error("Countable: Not a valid target"),r||console.error("Countable: Not a valid callback function"),o&&r}function a(t,e){let n=""+("string"==typeof t?t:"value"in t?t.value:t.textContent);(e=e||{}).stripTags&&(n=n.replace(/<\/?[a-z][^>]*>/gi,"")),e.ignore&&o.call(e.ignore,(function(t){n=n.replace(t,"")}));const l=n.trim();return{paragraphs:l?(l.match(e.hardReturns?/\n{2,}/g:/\n+/g)||[]).length+1:0,sentences:l?(l.match(/[.?!…]+./g)||[]).length+1:0,words:l?(l.replace(/['";:,.?¿\-!¡]+/g,"").match(/\S+/g)||[]).length:0,characters:l?r(l.replace(/\s/g,"")).length:0,all:r(n).length}}const i={on:function(t,e,r){if(l(t,e))return Array.isArray(t)||(t=[t]),o.call(t,(function(t){const o=function(){e.call(t,a(t,r))};n.push({element:t,handler:o}),o(),t.addEventListener("input",o)})),this},off:function(t){if(l(t,(function(){})))return Array.isArray(t)||(t=[t]),n.filter((function(e){return-1!==t.indexOf(e.element)})).forEach((function(t){t.element.removeEventListener("input",t.handler)})),n=n.filter((function(e){return-1===t.indexOf(e.element)})),this},count:function(t,e,n){if(l(t,e))return Array.isArray(t)||(t=[t]),o.call(t,(function(t){e.call(t,a(t,n))})),this},enabled:function(t){return void 0===t.length&&(t=[t]),n.filter((function(e){return-1!==t.indexOf(e.element)})).length===t.length}};t.exports=i}()}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var l=e[o]={exports:{}};return t[o].call(l.exports,l,l.exports,n),l.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=n(551),e=n.n(t),o=null,r=-1,l=[];function a(){var t=window.location.href;return t.endsWith("/post-new.php")||t.includes("action=edit")?document.querySelector(".wp-block-post-content"):document.querySelector("#vnx_post_content")}chrome.runtime.onMessage.addListener((function(t,n,i){console.log("Received request:",t);try{"getContentOverview"===t.action||"getContentOverviewFromCreate"===t.action||"getContentOverviewFromEdit"===t.action?i(function(){console.log("Fetching content overview...");var t=document.querySelector(".edit-post-visual-editor__post-title-wrapper"),n=t?t.innerText:document.querySelector("title")?document.querySelector("title").innerText:"",o=document.querySelector('meta[name="description"]')?document.querySelector('meta[name="description"]').getAttribute("content"):"",r=document.querySelector('meta[property="og:image"]')?document.querySelector('meta[property="og:image"]').getAttribute("content"):"",l=document.querySelector('img[src="'.concat(r,'"]'))?document.querySelector('img[src="'.concat(r,'"]')).alt:"",i=a();if(!i)return console.error("Content area not found."),{};var c=window.location.href,u=0;if(c.endsWith("/post-new.php")||c.includes("action=edit")){var s=i.querySelector("#rank-math-faq"),f=0;if(s){var h=Array.from(s.getElementsByClassName("rank-math-faq-question")),m=Array.from(s.getElementsByClassName("rank-math-faq-answer")),d=[].concat(h,m).map((function(t){return t.innerText})).join(" ");e().count(d,(function(t){f=t.words}))}var g=Array.from(i.children).filter((function(t){return!t.contains(s)})).map((function(t){return t.innerText})).join(" "),p=0;e().count(g,(function(t){p=t.words})),console.log("Other content word count (edit mode):",p),console.log("FAQ word count (edit mode):",f),u=f+p}else{var y=i.querySelector("#rank-math-faq"),v=0;if(y){var w=Array.from(y.getElementsByClassName("ftwp-heading")),A=Array.from(y.getElementsByClassName("rank-math-answer")),x=[].concat(w,A).map((function(t){return t.innerText})).join(" ");e().count(x,(function(t){v=t.words}));var b=i.innerText.replace(y.innerText,""),C=0;e().count(b,(function(t){C=t.words})),console.log("Other content word count (view mode):",C),console.log("FAQ word count (view mode):",v),u=v+C}else e().count(i.innerText,(function(t){u=t.words}))}if(console.log("Total word count:",u),c.endsWith("/post-new.php")||c.includes("action=edit")){var q=document.getElementById("word-count");q&&(q.textContent="".concat(u," words"))}return console.log("Counted words:",u),{metaTitle:n,metaDescription:o,thumbnail:r,thumbnailAlt:l,wordCount:"".concat(u," words")}}()):"getImagesAndLinks"===t.action?i(function(){console.log("Fetching images and links...");var t=a();if(!t)return console.error("Content area not found."),{images:[],links:[]};var e=1,n=1,o={},r=0,i=0,c=0,u=0,s=0,f=0,h=Array.from(t.querySelectorAll("img")).map((function(t){var n=t.closest("figure"),l=n?n.querySelector("figcaption"):null,a=t.getAttribute("data-src")||t.src||"",h=a.substring(a.lastIndexOf("/")+1),m=a.split(".").pop();return m&&(o[m]=(o[m]||0)+1),t.alt?r++:i++,t.title?c++:u++,l?s++:f++,{id:e++,alt_text:t.alt||"",url:a,name:h,format:m,caption:l?l.textContent:""}})),m=Array.from(t.querySelectorAll("a")).map((function(e){var o=Array.from(t.querySelectorAll("a")).filter((function(t){return t.href===e.href})).length>1;return o&&l.push(e),{link_id:n++,anchor:e.textContent||"",url:e.href||"",is_external:e.hostname!==location.hostname,is_nofollow:e.rel.includes("nofollow"),is_new_tab:"_blank"===e.target,is_duplicated:o}})),d=m.length,g=m.length-new Set(m.map((function(t){return t.url}))).size,p=m.filter((function(t){return t.is_new_tab})).length,y=m.filter((function(t){return!t.is_external})).length,v=m.filter((function(t){return t.is_external})).length,w=m.filter((function(t){return t.is_nofollow})).length;return{images:h,links:m,overview:{totalImages:h.length,imageFormatsCount:o,totalImagesWithAlt:r,totalImagesWithoutAlt:i,totalImagesWithTitle:c,totalImagesWithoutTitle:u,totalImagesWithCaption:s,totalImagesWithoutCaption:f,totalUrls:d,totalDuplicatedUrls:g,totalNewTabUrls:p,totalInternalLinks:y,totalExternalLinks:v,totalNoFollowUrls:w}}}()):"highlightAnchor"===t.action?(u=t.anchorText,o&&(o.style.backgroundColor="",o=null),document.querySelectorAll("a, span, div, p, h1, h2, h3, h4, h5, h6").forEach((function(t){t.textContent.trim()===u.trim()&&(t.style.backgroundColor="lightorange",t.scrollIntoView({behavior:"smooth",block:"center"}),o=t)}))):"scrollToAnchor"===t.action?function(t){document.querySelectorAll("a, span, div, p, h1, h2, h3, h4, h5, h6").forEach((function(e){e.textContent.trim()===t.trim()&&e.scrollIntoView({behavior:"smooth",block:"center"})}))}(t.anchorText):"scrollToImage"===t.action?(c=t.imageUrl,document.querySelectorAll("img").forEach((function(t){t.src!==c&&t.getAttribute("data-src")!==c||t.scrollIntoView({behavior:"smooth",block:"center"})}))):"findNextDuplicate"===t.action?function(t){if(0!==l.length){++r>=l.length&&(r=0);var e=l[r];e.style.backgroundColor="lightorange",e.scrollIntoView({behavior:"smooth",block:"center"})}}(t.anchorText):i({error:"Unknown action"})}catch(t){console.error("Error handling request:",t),i({error:t.message})}var c,u;return!0}))})()})();