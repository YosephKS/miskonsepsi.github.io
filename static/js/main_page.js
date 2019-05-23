$(window).scroll(function() {
	var $height = $(window).scrollTop();
  if($height > 20) {
		document.getElementById("header").style.boxShadow = "10px 5px 5px black";
	} else {
    document.getElementById("header").style.boxShadow = "0px 0px 0px black";
  }
});