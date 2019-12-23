//link to top
var linkToTop = document.querySelector('.linkToTop');
var timer;
var headerNav = document.querySelector('.header');


window.addEventListener('scroll' , function(){
//    высота страницы
    var scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    
//    здесь поделил высоту страницы на 3 и после того как прокрутка станет больше этой цифры , применить css свойства.
    var Height =  Math.floor(scrollHeight / 3 );
    
    if(window.pageYOffset > Height){
        linkToTop.style.display = "block"
    } else{
        linkToTop.style.display = "none"
    }
    
//    высота header
//    высота header
    var headerNavHeight = headerNav.getBoundingClientRect().height / 5;
//    присвоение posotion: fixed
    if(window.pageYOffset  > headerNavHeight){
        headerNav.classList.add('headerFixed')
    } else{
         headerNav.classList.remove('headerFixed')
    }
    
})

linkToTop.addEventListener('click' , clickToTop , false);

function clickToTop(){
    
    var header = document.querySelector('.header');
    var headerTop = header.offsetTop;
   
    
    if(window.pageYOffset - 15 >= headerTop){
        window.scrollBy( 0 , -20);
        timer = setTimeout('clickToTop()' , 60);
    } else{
        clearTimeout(timer);
    }    
    return false;
}
///menu