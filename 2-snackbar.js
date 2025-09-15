import{s as c}from"./assets/sprite-DztAg9nn.js";/* empty css                      */import{i as n}from"./assets/vendor-BbbuE1sJ.js";const r=document.querySelector(".form"),a=document.querySelector('input[name="delay"]'),m=document.querySelector('input[value="fulfilled"]');r.addEventListener("submit",f);function f(u){u.preventDefault();const i=a.value;new Promise((s,l)=>{m.checked?setTimeout(()=>{s(i)},i):setTimeout(()=>{l(i)},i)}).then(s=>{n.success({title:"OK",message:`Fulfilled promise in ${s}ms`,position:"topRight",backgroundColor:"#59a10d",titleColor:"#fff",messageColor:"#fff",icon:" ",close:!1,class:"custom-toast",onOpening:function(l,o){const t=o.querySelector(".iziToast-icon");t&&(t.innerHTML=`
        <svg class="icon-custom">
          <use href="${c}#icon-Group"></use>
        </svg>`);const e=document.createElement("button");e.classList.add("iziToast-close-custom"),e.innerHTML=`
        <svg class="icon-custom-close">
          <use href="${c}#icon-Vector-3"></use>
        </svg>`,e.addEventListener("click",()=>{n.hide({},o)}),o.appendChild(e)}})}).catch(s=>{n.error({title:"Error",message:`Rejected promise in ${s}ms`,position:"topRight",backgroundColor:" #ef4040",titleColor:"#fff",messageColor:"#fff",icon:" ",close:!1,class:"custom-toast",onOpening:function(l,o){const t=o.querySelector(".iziToast-icon");t&&(t.innerHTML=`
        <svg class="icon-custom">
          <use href="${c}#icon-bi_x-octagon"></use>
        </svg>`);const e=document.createElement("button");e.classList.add("iziToast-close-custom"),e.innerHTML=`
        <svg class="icon-custom-close">
          <use href="${c}#icon-Vector-3"></use>
        </svg>`,e.addEventListener("click",()=>{n.hide({},o)}),o.appendChild(e)}})}),r.reset()}
//# sourceMappingURL=2-snackbar.js.map
