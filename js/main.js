$(function() {
  $('nav li[data-content]').on('click', function(){
    currentSrc = $(this).find('img').attr('src');
    currentSrc2 = currentSrc.substring(0, currentSrc.length - 4);
      if($(this).hasClass('active')){
      return;
      }else{
        $('article div').hide();
        $('nav li').removeClass('active');
        $('nav li').each(function(k, v){
          $(v).find('img').attr('src', $(v).find('img').attr('src').replace("_active",""))
        })
        $(this).addClass('active');
        $(this).find('img').attr('src', currentSrc2+'_active.png')
        varAttr = $(this).attr('data-content')
        $('article div[data-page="'+varAttr+'"]').show() 
       }

  })

})



