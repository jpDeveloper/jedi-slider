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

});
