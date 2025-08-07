$(document).ready(function(){
    $('#hamburder-search-btn').click(function(){
        $('.search-box').slideToggle(300);
        $('.search-box').css('display', 'flex');
    });

    $('.category').click(function() {
        $('.category').removeClass('category-active');  
        $(this).addClass('category-active');        
    });

    $('#menu-catalog-btn').click(function(){
        $('.categories').toggleClass('categories-active');
    });

    $('#hamburder-catalog-btn').click(function(){
        // $('.categories').toggleClass('categories-active');
        if ($(window).width() < 525) {
        $('.categories').toggleClass('categories-active');
    }
    });

    $('.vip-ad').mouseover(function(){
        $('.vip-ad').removeClass('vip-ad-hovered');  
        $(this).addClass('vip-ad-hovered');  
    });
   
    $(document).ready(function () {
    const items = [
        {
            text: "Bölgəmizin ilk online alış-satış platformasına xoş gəlmisiniz!",
            img: "/images/mountain.png"
        },
        {
            text: "Minlərlə məhsul sizi gözləyir",
            img: "/images/all-goods.png"
        },
        {
            text: "Elanını cəmi 1 dəqiqəyə yarat",
            img: "/images/alert.png"
        },
        {
            text: "Rahat axtarış – sənə lazım olanı tap",
            img: "/images/search-image.png"
        },
        {
            text: "Yüzlərlə fərqli məhsul – hamısı bir arada!",
            img: "/images/all-goods.png"
        }
    ];

    let index = 0;

    function updateCarousel() {
        const nextItem = items[index];
        const $text = $('.carousel-box-text h3');
        const $img = $('.carousel-box-img img');

        // Плавно скрыть текст и картинку
        $text.fadeOut(300);
        $img.fadeOut(300, function () {
            // После скрытия — заменить контент
            $text.text(nextItem.text);
            $img.attr('src', nextItem.img);

            // Плавно показать обратно
            $text.fadeIn(300);
            $img.fadeIn(300);
        });

        index = (index + 1) % items.length;
    }

    // Первоначальная загрузка
    updateCarousel();

    // Каждые 4 секунды обновлять
    setInterval(updateCarousel, 5000);
   });




});

