// JS Scripts

$(document).ready(function() {

  $("#the-force").owlCarousel({

      navigation: true,
       navigationText: [
        "<i class='fa fa-angle-left fa-4x'></i>",
        "<i class='fa fa-angle-right fa-4x'></i>"
        ], // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      responsive: true,
      pagination : false,
      autoPlay : false,
      stopOnHover : false,

      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });


	$("#rebel-alliance").owlCarousel({

      navigation: true,
	     navigationText: [
	      "<i class='fa fa-angle-left fa-4x'></i>",
	      "<i class='fa fa-angle-right fa-4x'></i>"
	      ],
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      responsive: true,
      pagination : true

      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });

  var owl = $("#ewoks");

  owl.owlCarousel({
      items : 10, //10 items above 1000px browser width
      itemsDesktop : [992,7], //5 items between 1000px and 901px
      itemsDesktopSmall : [768,5], // betweem 900px and 601px
      itemsTablet: [600,3], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });

  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  })
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  })

  $("#storm-troopers").owlCarousel({
    jsonPath : "json/data.json"
  });

});
