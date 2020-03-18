function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
function parallax() {
	var $slider = document.getElementById("slider");

	var yPos = window.pageYOffset / $slider.dataset.speed;
	yPos = -yPos;

	var coords = '0% '+ yPos + 'px';

	$slider.style.backgroundPosition = coords;
}


window.addEventListener("scroll", function(){
	parallax();
});
