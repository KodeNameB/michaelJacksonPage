$(document).ready(function() {
	$(".btn420").click(function() {
		$("#id2").toggle(500);
		$(function(){
  $("#img1").on({
   mouseover: function(){
    $(this).attr('src','http://www.happybirthdayvinyl.co.uk/images/album-artwork/big/michael-jackson-got-to-be-there-back.jpg');
  },
  mouseout: function(){
    $(this).attr('src','https://upload.wikimedia.org/wikipedia/en/b/b2/Mj1971-got-to-be-there.jpg');
  }
  });
  
});
	});
});


$(function() {
	$(".btn4201").click(function() {
		("#id4").toggle(500);
	});
});

function show() {
    document.getElementById("id1").style.display="show";
}

