(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function d(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=d(e);fetch(e.href,o)}})();function p(){const s=document.getElementById("smartChatWidget");let t;try{t=JSON.parse(JSON.stringify(s==null?void 0:s.dataset))}catch(i){throw new Error(i)}if(t==null)throw new Error("Could not load the widget configuration");function d(){const i=document.createElement("div"),e=i.style;e.display="none",e.boxSizing="border-box",e.width="500px",e.height="600px",e.position="fixed",e.bottom="10px",e.right="10px",e.maxWidth="100%";const o=document.createElement("iframe"),n=o.style;n.boxSizing="borderBox",n.position="absolute",n.right="0",n.bottom="0",n.width="100%",n.height="100%",n.border="0",n.margin="0",n.padding="0",i.appendChild(o);const a={show(){e.display="block"},hide(){e.display="none"},toggle(){const r=window.getComputedStyle(i,null).display;e.display=r==="none"?"block":"none"},onHide(){}};o.addEventListener("load",()=>{var r;window.addEventListener("getWidgetApi",()=>{const c=new CustomEvent("widgetApi",{detail:a});window.dispatchEvent(c)}),window.addEventListener("message",c=>{c.origin===t.host&&c.data==="hide"&&(a.hide(),a.onHide())}),console.log(o.contentWindow),(r=o.contentWindow)==null||r.postMessage(t,t.host)});const l=t.host;o.src=l,document.body.appendChild(i)}document.readyState=="complete"?d():document.addEventListener("readystatechange",()=>{document.readyState=="complete"&&d()})}function m(){return new Promise((s,t)=>{let d;const i=()=>{const o=new Event("getWidgetApi");d=window.setTimeout(i,1e3),window.dispatchEvent(o)},e=o=>{const n=o.detail;window.clearTimeout(d),s(n)};window.addEventListener("widgetApi",e,{once:!0}),i()})}(()=>{const s=document.createElement("style");s.textContent=`
    #smartChatWidget.smart-chat-active {
        display: none;
    }
  `,document.body.appendChild(s);const t=document.getElementById("smartChatWidget"),d=t==null?void 0:t.style;d!=null&&(d.boxSizing="border-box",d.position="fixed",d.bottom="10px",d.right="10px");const i="smart-chat-active";m().then(e=>{t==null||t.addEventListener("click",()=>{t.classList.contains(i)?(t.classList.remove(i),e.hide()):(t.classList.add(i),e.show())}),e.onHide=()=>{t==null||t.classList.remove(i)}}),p()})();
