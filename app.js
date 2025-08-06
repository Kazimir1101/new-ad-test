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
        $('.categories').toggleClass('categories-active');
    });

    $('.vip-ad').mouseover(function(){
        $('.vip-ad').removeClass('vip-ad-hovered');  
        $(this).addClass('vip-ad-hovered');  
    });

});

