console.log("hello");

$(".joke").text("lol");

var $one = $("#l1");
var $two = $("#l2");

$one.on("click", function(){
	$(this).hide();
	$two.show();
});

$two.on("click", function(){
	$(this).hide();
	$one.show();
});