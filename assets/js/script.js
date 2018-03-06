// thing done when clicked
$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});
// delete li when clicked on trash
$("ul").on("click", "span", function(event){
	 //no event bubbling
	event.stopPropagation();            
	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
	});
});
//input listener
$("input").on("keypress", function(event){
	if (event.which == 13) {
		$("ul").append(`<li><span><i class="fas fa-trash-alt"></i></span> ${$(this).val()}</li>`);
		$(this).val("");

	}
});
//icon listener
$(document).on('click','.fa-plus',function(){
	$('input').fadeToggle('fast','linear');
})