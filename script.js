let i = 0;


function ff(){
    sToID = setTimeout(ff,100);
    sec=document.getElementById('s');
    sec.innerHTML = i;
    i++;
}

let start = (ss) => {
    setTimeout(ff,100);
};

let pause = (ss) => {
    clearTimeout(sToID);
};