jQuery(window).load(function() {
  // The slider being synced must be initialized first
  jQuery('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 200,
    asNavFor: '#slider'
  });
 
  jQuery('#slider').flexslider({
    animation: "slide",
    directionNav: false, 
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });
});