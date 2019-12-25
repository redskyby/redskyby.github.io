//link to top
var linkToTop = document.querySelector('.linkToTop');
var timer;
var headerNav = document.querySelector('.header');


window.addEventListener('scroll' , function(){
//    высота страницы взята с сайта learn.javascript.ru
    var scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    
//    здесь поделил высоту страницы на 5 и после того как прокрутка станет больше этой цифры , применить css свойства.
    var Height =  Math.floor(scrollHeight / 5 );
    
    if(window.pageYOffset > Height){
        linkToTop.style.display = "block"
    } else{
        linkToTop.style.display = "none"
    }
    
//    высота header
    var headerNavHeight = headerNav.getBoundingClientRect().height / 5;
//    присвоение posotion: fixed
    if(window.pageYOffset  > headerNavHeight){
        headerNav.classList.add('headerPadding')
    } else{
         headerNav.classList.remove('headerPadding')
    }
    
})

linkToTop.addEventListener('click' , clickToTop , false);

function clickToTop(){
    
    var header = document.querySelector('.header');
    var headerTop = header.offsetTop;
    
//    нашел стрелу
    var arrow = document.querySelector('.arrow');
//    нашел рокету
    var rocket = document.querySelector('.rocket');
//    спрятал стрелу
    arrow.style.display = "none";
//    показал ракету
    rocket.style.display = "block";
    
    
    
//    если прокрутка страници еще недостигла heaaderTop . то вызывать функцию
    if(window.pageYOffset - 15 >= headerTop){
        window.scrollBy( 0 , -10);
        timer = setTimeout('clickToTop()' , 10);
    } else {
        clearTimeout(timer);
//        показал срелу , но из-за материнского .linkToTop ее и не видно, но так нужно
        arrow.style.display = "block";
//        спрятал ракету , чтобы при прокрутке в низ она не показывалась.
        rocket.style.display = "none";
    }  
    return false;
}
///menu