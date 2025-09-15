import"./assets/iziToast-custom-BZimflmy.js";/* empty css                      */import{i as n}from"./assets/vendor-BbbuE1sJ.js";const l=document.querySelector(".form"),u=document.querySelector('input[name="delay"]'),a=document.querySelector('input[value="fulfilled"]');l.addEventListener("submit",m);function m(r){r.preventDefault();const t=u.value;new Promise((o,c)=>{a.checked?setTimeout(()=>{o(t)},t):setTimeout(()=>{c(t)},t)}).then(o=>{n.success({title:"OK",message:`Fulfilled promise in ${o}ms`,position:"topRight",backgroundColor:"#59a10d",titleColor:"#fff",messageColor:"#fff",icon:" ",close:!1,class:"custom-toast",onOpening:function(c,s){const i=s.querySelector(".iziToast-icon");i&&(i.innerHTML=`
        <svg class="icon-custom">
          <use href="./img/sprite.svg#icon-Group"></use>
        </svg>`);const e=document.createElement("button");e.classList.add("iziToast-close-custom"),e.innerHTML=`
        <svg class="icon-custom-close">
          <use xlink:href="./img/sprite.svg#icon-Vector-3"></use>
        </svg>`,e.addEventListener("click",()=>{n.hide({},s)}),s.appendChild(e)}})}).catch(o=>{n.error({title:"Error",message:`Rejected promise in ${o}ms`,position:"topRight",backgroundColor:" #ef4040",titleColor:"#fff",messageColor:"#fff",icon:" ",close:!1,class:"custom-toast",onOpening:function(c,s){const i=s.querySelector(".iziToast-icon");i&&(i.innerHTML=`
        <svg class="icon-custom">
          <use href="./img/sprite.svg#icon-bi_x-octagon"></use>
        </svg>`);const e=document.createElement("button");e.classList.add("iziToast-close-custom"),e.innerHTML=`
        <svg class="icon-custom-close">
          <use xlink:href="./img/sprite.svg#icon-Vector-3"></use>
        </svg>`,e.addEventListener("click",()=>{n.hide({},s)}),s.appendChild(e)}})}),l.reset()}
//# sourceMappingURL=2-snackbar.js.map
