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
/////menu
//
//var menu = document.querySelectorAll('.header_nav_menu_item_link');
//var timer;
////ТУТ закоментил из-за того ,что не смог реализовать плавную прокрутку на ВСЕ элементы. проблема в том , что не хватает высоты элементов для прокрутки в топ. сделал анимацию только на первый элемент меню.
////for(var i = 0 ; i < test.length ; i++){
////    test[i].addEventListener('click' , clickToBottom , false);
////}
//menu[0].addEventListener('click', clickToBottom, false);
//
//function clickToBottom(event) {
//    event.preventDefault();
//    //    нашел в ссылках - куда они ссылаются
//    var link = document.querySelector(this.getAttribute('href'));
//    //    высота header
//    var headerNav = document.querySelector('.header');
//
//    var headerNavHeight = headerNav.getBoundingClientRect().height;
//    //    отнимаю у link высоту headera
//    var heightElement = link.offsetTop - headerNavHeight;
//    //собсттвенна сама функция которая вызывается в setTimeout.доступ к переменным из-за замыкания
//    function testFunction() {
//
//        if (heightElement >= window.pageYOffset) {
//            window.scrollBy(0, 10);
//            timer = setTimeout(testFunction, 10);
//        } else {
//            clearTimeout(timer);
//        }
//    }
//    testFunction();
//}
//Mobile Menu
var clickToClose = document.querySelectorAll('.clickToClose');

for(var i = 0 ; i < clickToClose.length; i++ ){
    clickToClose[i].addEventListener('click' , visibleMenu , false);
}

function visibleMenu(e){
    e.preventDefault();
    var headerNav = document.querySelector('.header_nav');
    headerNav.classList.toggle('header_nav_visible');
}