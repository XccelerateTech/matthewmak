let iarr = document.getElementsByClassName('icon');

for (let i = 0; i<iarr.length; i++) {
    iarr[i].getElementsByTagName('img')[0].addEventListener('mouseenter',function(){
        iarr[i].getElementsByTagName('img')[0].style.height = '112%';
    });

    iarr[i].getElementsByTagName('img')[0].addEventListener('mouseleave',function(){
        iarr[i].getElementsByTagName('img')[0].style.height = '80%';
    });
}

let butt = document.getElementsByTagName('button')[0];
let overlay = document.getElementsByClassName('overlay')[0];
let title = document.getElementsByClassName('heading')[0].getElementsByTagName('h1')[0];

butt.addEventListener('click', function(){
    overlay.setAttribute('class','');
    title.textContent = 'Welcome to my flower shop'
    title.style.color = 'blue';
    title.style.backgroundColor = 'white';
    butt.textContent = 'Buy Flower';
    butt.style.backgroundColor = 'red';
});
