$joke = $("#joke");
$counter = "0";

console.log($counter);

$joke.on("click", function(){
	$counter++;
	console.log($counter);

	 if ($counter == "1"){
 	$joke.text("Why do potatoes make good detectives?");
 	$("body").css("background-color","pink");
 }
 	else if ($counter == "2"){
 	$joke.text("Because they keep their eyes peeled.");
 	$("body").css("background-color","#B11D1D");
 }
 	else if ($counter == "3"){
 	$joke.text("What do you get if you divide the circumference of a pumpkin by its diameter?");
 	$("body").css("background-color","#6EC907");
 }

	else if ($counter == "4"){
 	$joke.text("Pumpkin pi");
 	$("body").css("background-color","#0C790F");
 }

	else if ($counter == "5"){
 	$joke.text("Everyone has these on their face?");
 	$("body").css("background-color","#238EE1");
 }

	else if ($counter == "6"){
 	$joke.text("Tulips");
 	$("body").css("background-color","#7E189F");
 }
 	else if($counter > "6"){
 	$joke.text("Reset the page to start again!");
 	$("body").css("background-color","#961C32");
 };
});

