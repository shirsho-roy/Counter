const updater=document.querySelector("#value");
let cnt=0;
function countinc(){
     cnt++;
     updater.textContent=cnt;
     if(cnt>0)
       updater.style.color="green";
     else if(cnt==0)
       updater.style.color="black";
     else 
       updater.style.color="red";
}
function countdec(){
    cnt--;
    updater.textContent=cnt;
    if(cnt>0)
       updater.style.color="green";
     else if(cnt==0)
       updater.style.color="black";
     else 
       updater.style.color="red";
}
function counres(){
    cnt=0;
    updater.textContent=cnt;
    if(cnt>0)
       updater.style.color="green";
     else if(cnt==0)
       updater.style.color="black";
     else 
       updater.style.color="red";
}

const butinc=document.querySelector(".increase");
const butdec=document.querySelector(".decrease");
const butres=document.querySelector(".reset");

butinc.addEventListener('click',countinc);
butdec.addEventListener('click',countdec);
butres.addEventListener('click',counres);