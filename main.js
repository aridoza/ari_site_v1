console.log("main js file linked")

window.onload = function(e) {
  e.preventDefault();
  $(".button-collapse").sideNav();

  const header = $('#header');
  const navText = $('#mainnavText');
  const scrollHeight = header.outerHeight();
  const textColor = 'orange';
  const gclef = $('#gclef');

  // $(document).scroll(function(e) {
  //   const scrollPct = (scrollHeight - window.scrollY) / scrollHeight;
  //   if(scrollPct >= 0){
  //     // header.css('opacity', scrollPct);
  //     header.css('opacity', 0.4);
  //     gclef.css('color', 'white');
  //     gclef.css('opacity', 1.0);
  //     navText.css('color', textColor); //trying to get text in nav to change when it fades out [1169 scrollY when About header comes in under Nav]
  //   } else if(scrollHeight == 100){
  //     header.css('opacity', 1.0);
  //   }
  // });
  console.log($(window).width());

  $(document).scroll(function(e) {
    const vScroll = 1169;
    for(i = 0; i <= vScroll; i++){
      const scrollPct = (window.scrollY / vScroll);
      header.css('opacity', (1 - scrollPct));
      if ($(window).width() <= 992){
        header.css('opacity', 1.0);
      } else if (window.scrollY == vScroll){
        $('#topnavText').hide();
      }
    }
  })


};//end window onload
