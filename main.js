console.log("main js file linked")

window.onload = function(e) {
  e.preventDefault();
  $(".button-collapse").sideNav();

  const header = $('#header');
  const navContent = $('#topnavText');
  const navText = $('#navTextLi');
  const scrollHeight = header.outerHeight();
  const textColor = 'orange';
  const gclef = $('#gclef');

  // $(document).scroll(function(e) {
  //   const vScroll = 1169;
  //   for(i = 0; i <= vScroll; i++){
  //     const scrollPct = (window.scrollY / vScroll);
  //     if ($(window).width() <= 992){
  //       header.css('opacity', 1.0);
  //     } else if (window.scrollY <= vScroll){
  //       header.css('opacity', (0 + scrollPct));
  //     }
  //     if (window.scrollY >= 1170){
  //       header.css({'opacity': 1.0, 'background-color': 'rgba(0,0,0,0)'});
  //     }
  //   }
  // })


};//end window onload
