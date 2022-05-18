let box = document.querySelector(".box");
let main = document.querySelector(".m");
let items = document.querySelectorAll(".m > img");
let last = document.querySelector(".last");
let next = document.querySelector(".next");

let curr = 0;

next.onclick = function(){
    curr++;
    main.style.left = -curr * 980 + "px";
    if(curr >= items.length)
    {
        curr = 0;
        main.style.left = "0px";
    }
}

last.onclick = function(){
    curr--;
    main.style.left = -curr * 980 + "px";
    if(curr < 0)
    {
        curr = items.length - 1;
        main.style.left = "-1960px";
    }
}

let time = setInterval(() => {
    next.onclick();
}, 3000);

box.onmouseenter = function(){
    clearInterval(time);
}

box.onmouseleave = function(){
    time = setInterval(() => {
        next.onclick();
    }, 3000);
}
