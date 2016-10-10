$(document).ready(function() {
	$("#js-shopping-list-form button").attr("type","button").click(function() {
		var inputval = $("#js-shopping-list-form input");
		if(inputval.val()) {
			$("ul.shopping-list").prepend(addItem(inputval.val()));
			inputval.val("");
		};
	});
	$("ul").on("click","button.shopping-item-toggle",function() {
		$(this).parents(".shopping-item-controls").siblings(".shopping-item").toggleClass("shopping-item__checked");
	});
	$("ul").on("click","button.shopping-item-delete", function() {
		$(this).parents("li").remove();
	});
});

function addItem(inputval) {
	return "<li><span class='shopping-item'>"+inputval+
		"</span><div class='shopping-item-controls'>"+
          "<button class='shopping-item-toggle'>"+
            "<span class='button-label'>check</span>"+
          "</button><button class='shopping-item-delete'>"+
            "<span class='button-label'>delete</span>"+
          "</button></div></li>"
};