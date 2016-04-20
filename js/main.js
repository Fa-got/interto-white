$(function() {

   $('nav li[data-content="home"]').on('click', function(){
    var currentSrc1 = $(this).find('img').attr('src');
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('article div[data-page="home"]').removeClass('none')
     $(this).find('img').attr('src','img/home.png' )
      
    }else{
      $('nav li[data-content="catalog"]').removeClass('active')
      $('nav li[data-content="stock"]').removeClass('active')
      $('nav li[data-content="brand"]').removeClass('active')
      $('nav li[data-content="home"]').removeClass('active');
       
        $(this).find('img').attr('src','img/home_active.png' )
          $('nav li[data-content="catalog"]').find('img').attr('src','img/catalog.png' )
          $('nav li[data-content="stock"]').find('img').attr('src','img/sale.png' )
          $('nav li[data-content="brand"]').find('img').attr('src','img/brand.png' )
       $(this).addClass('active');

       $('article div[data-page="home"]').removeClass('none')
       $('article div[data-page="catalog"]').addClass('none')
       $('article div[data-page="sale"]').addClass('none')
       $('article div[data-page="brend"]').addClass('none')
    }
  }) 

    $('nav li[data-content="catalog"]').on('click', function(){
    var currentSrc2 = $(this).find('img').attr('src');
    if($(this).hasClass('active')){
      $(this).removeClass('active');
     $(this).find('img').attr('src','img/catalog.png' )
     
    }else{
      $('nav li[data-content="home"]').removeClass('active')
      $('nav li[data-content="stock"]').removeClass('active')
      $('nav li[data-content="brand"]').removeClass('active')
      $('nav li[data-content="catalog"]').removeClass('active');
       
        $(this).find('img').attr('src','img/catalog_active.png' )
          $('nav li[data-content="home"]').find('img').attr('src','img/home.png' )
          $('nav li[data-content="stock"]').find('img').attr('src','img/sale.png' )
          $('nav li[data-content="brand"]').find('img').attr('src','img/brand.png' )
       $(this).addClass('active');
  $('article div[data-page="catalog"]').removeClass('none')
        $('article div[data-page="home"]').addClass('none')
      
       $('article div[data-page="sale"]').addClass('none')
       $('article div[data-page="brend"]').addClass('none')
    }
  }) 

    $('nav li[data-content="stock"]').on('click', function(){
    var currentSrc3 = $(this).find('img').attr('src');
    if($(this).hasClass('active')){
      $(this).removeClass('active');
    
      $(this).find('img').attr('src','img/sale.png' )
       $('article div[data-page="sale"]').removeClass('none')
    }else{
      $('nav li[data-content="catalog"]').removeClass('active')
      $('nav li[data-content="home"]').removeClass('active')
      $('nav li[data-content="brand"]').removeClass('active')
      $('nav li[data-content="stock"]').removeClass('active');
        $(this).find('img').attr('src','img/sale_active.png' )
           $('nav li[data-content="home"]').find('img').attr('src','img/home.png' )
          $('nav li[data-content="catalog"]').find('img').attr('src','img/catalog.png' )
          $('nav li[data-content="brand"]').find('img').attr('src','img/brand.png' )
       $(this).addClass('active');
 $('article div[data-page="sale"]').removeClass('none')
           $('article div[data-page="home"]').addClass('none')
       $('article div[data-page="catalog"]').addClass('none')
      
       $('article div[data-page="brend"]').addClass('none')
    }
})

    $('nav li[data-content="brand"]').on('click', function(){
    var currentSrc4 = $(this).find('img').attr('src');
    if($(this).hasClass('active')){
      $(this).removeClass('active');
       $(this).find('img').attr('src','img/brand.png' )
        $('article div[data-page="brand"]').removeClass('none')
    }else{
      $('nav li[data-content="catalog"]').removeClass('active')
      $('nav li[data-content="stock"]').removeClass('active')
      $('nav li[data-content="home"]').removeClass('active')
      $('nav li[data-content="brand"]').removeClass('active');
    
       $(this).find('img').attr('src','img/brand_active.png' )
        $('nav li[data-content="home"]').find('img').attr('src','img/home.png' )
          $('nav li[data-content="stock"]').find('img').attr('src','img/sale.png' )
          $('nav li[data-content="catalog"]').find('img').attr('src','img/catalog.png' )
       $(this).addClass('active');
        
        $('article div[data-page="brand"]').removeClass('none')
        $('article div[data-page="home"]').addClass('none')
       $('article div[data-page="catalog"]').addClass('none')
       $('article div[data-page="sale"]').addClass('none')
     
    }
    })

})



