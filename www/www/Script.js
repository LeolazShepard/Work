$(document).ready(
	function (){
$( ".modal-form" ).on("click", ".tab", function(){
//удаляєм класи актів
$(".modal-form").find(".active").removeClass("active"); 
//add class active
$(this).addClass("active");
$(".tab-content").eq($(this) .index() ).addClass("active");
});
});