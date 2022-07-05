let body = document.querySelector("body");
let main_div=document.getElementById("main-div");
let initialHeading=document.getElementById("initial-heading");
initial_backgroud_color()
let txt='MUSICAL KIT'
let speed=100;
typewriter(txt,speed,0)
function initial_backgroud_color() {
    main_div.style.display="none"
    initialHeading.style.display="block";
    body.classList.add('initial-body-style')
    var shadow=''
    for (let i = 0; i < 50; i++) {
        shadow +=(shadow? ',':'')+i*1+'px '+ i*1+ 'px 0 #72aef3'
    }
    initialHeading.style.textShadow=shadow;
    timeout=setTimeout(after_initial,2000)
}
function after_initial(){
    body.classList.remove('initial-body-style')
    body.classList.add('after-body-style')
    initialHeading.style.display="none";
    main_div.classList.add('animation-main-div')
    main_div.style.display="block";
}
function typewriter(txt,speed,i) {
    if(i<txt.length){
        initialHeading.innerHTML+=txt.charAt(i);
        i++;
        setTimeout(typewriter,speed,txt,speed,i)   
    }
}

    document.addEventListener('keypress',(event)=>{
        if(event.code=="KeyB"){
            let audio=new Audio('https://www.fesliyanstudios.com/play-mp3/6653')
            audio.play();
        }
        else if(event.code=="KeyF"){
            let audio=new Audio('https://www.fesliyanstudios.com/play-mp3/6691')
            audio.play();
        }
        else if(event.code=="KeyH"){
            let audio=new Audio('https://www.fesliyanstudios.com/play-mp3/6713')
            audio.play();
        }
        else if(event.code=="KeyM"){
            let audio=new Audio('https://www.fesliyanstudios.com/play-mp3/6730')
            audio.play();
        }
        else if(event.code=="KeyR"){
            let audio=new Audio('https://www.fesliyanstudios.com/play-mp3/6743')
            audio.play();
        }
        else if(event.code=="KeyS"){
            let audio=new Audio('https://www.fesliyanstudios.com/play-mp3/6764')
            audio.play();
        }
    })
document.getElementsByClassName('keys')[0].onclick= function(){
    let audio=new Audio('https://www.fesliyanstudios.com/play-mp3/6653')
        audio.play();
};
document.getElementsByClassName('keys')[1].onclick= function(){
    let audio=new Audio('https://www.fesliyanstudios.com/play-mp3/6691')
        audio.play();
};
document.getElementsByClassName('keys')[2].onclick= function(){
    let audio=new Audio('https://www.fesliyanstudios.com/play-mp3/6713')
        audio.play();
};
document.getElementsByClassName('keys')[3].onclick= function(){
    let audio=new Audio('https://www.fesliyanstudios.com/play-mp3/6730')
        audio.play();
};
document.getElementsByClassName('keys')[4].onclick= function(){
    let audio=new Audio('https://www.fesliyanstudios.com/play-mp3/6743')
        audio.play();
};
document.getElementsByClassName('keys')[5].onclick= function(){
    let audio=new Audio('https://www.fesliyanstudios.com/play-mp3/6764')
        audio.play();
};
document.getElementsByClassName('keys')[6].onclick= function(){
    let audio=new Audio('https://www.fesliyanstudios.com/play-mp3/6730')
        audio.play();
};
if(document.getElementById("radio2").checked){
    console.log("hello");
}
