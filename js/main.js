$(document).ready(function(){
  var pages;
  $('.main h2').each(function(e,i) {
    pages[i] = this.offsetTop;
  });
  console.log(pages);
  $(window).scroll(function(e) {

  })
  $("#lazynav").click(
    function(event) {
      event.stopPropagation();
      $(this).find('a').removeClass('active');
      $(event.target).addClass('active');
      var top = $(event.target.hash).offset().top - 120;
      $("html, body").animate({ scrollTop: top}, 700);
    });
  }); 
