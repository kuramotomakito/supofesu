const ham = $('#js-hamburger');
const nav = $('#js-nav');
ham.on('click', function () { //ハンバーガーメニューをクリックしたら
  ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
  nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し

});
$(function () {
  // スクロールしたら「トップに戻る」ボタンが表示される
  const toTopButton = $(".jump");
  const scrollHeight = 100;
  toTopButton.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      toTopButton.fadeIn();
    } else {
      toTopButton.fadeOut();
    }
  });

  // 「トップに戻る」ボタンをクリックしたらスクロールで戻る
  toTopButton.click(function () {
    $("body,html").animate({ scrollTop: 0 }, 20);
    return false;
  });
});

/*pop1*/
$(function(){
    $('.js-modal1-open').on('click',function(){
        $('.js-modal1').fadeIn();
        return false;
    });
    $('.js-modal1-close').on('click',function(){
        $('.js-modal1').fadeOut();
        return false;
    });
});
/*pop2*/
$(function(){
  $('.js-modal2-open').on('click',function(){
      $('.js-modal2').fadeIn();
      return false;
  });
  $('.js-modal2-close').on('click',function(){
      $('.js-modal2').fadeOut();
      return false;
  });
});
/*pop3*/
$(function(){
  $('.js-modal3-open').on('click',function(){
      $('.js-modal3').fadeIn();
      return false;
  });
  $('.js-modal3-close').on('click',function(){
      $('.js-modal3').fadeOut();
      return false;
  });
});
/*pop4*/
$(function(){
  $('.js-modal4-open').on('click',function(){
      $('.js-modal4').fadeIn();
      return false;
  });
  $('.js-modal4-close').on('click',function(){
      $('.js-modal4').fadeOut();
      return false;
  });
});
/*pop5*/
$(function(){
  $('.js-modal5-open').on('click',function(){
      $('.js-modal5').fadeIn();
      return false;
  });
  $('.js-modal5-close').on('click',function(){
      $('.js-modal5').fadeOut();
      return false;
  });
});
/*pop6*/
$(function(){
  $('.js-modal6-open').on('click',function(){
      $('.js-modal6').fadeIn();
      return false;
  });
  $('.js-modal6-close').on('click',function(){
      $('.js-modal6').fadeOut();
      return false;
  });
});
/*pop8*/
$(function(){
  $('.js-modal8-open').on('click',function(){
      $('.js-modal8').fadeIn();
      return false;
  });
  $('.js-modal8-close').on('click',function(){
      $('.js-modal8').fadeOut();
      return false;
  });
});
/*pop7*/
$(function(){
  $('.js-modal7-open').on('click',function(){
      $('.js-modal7').fadeIn();
      return false;
  });
  $('.js-modal7close').on('click',function(){
      $('.js-modal7').fadeOut();
      return false;
  });
});