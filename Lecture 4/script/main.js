$().ready(function(){
	var i = 0;
	var text = "";

	$("#addGoods").on("click", function() {
		var newGoods = $("#view").val();
		$("#goods").append("<li id='li-" + i + "' class='li' data-id='" + i + "'><span class='span' data-id='" + i + 
			"'><input id='checkbox-" + i +"' type='checkbox' class='checkbox' data-id='" + i + 
			"'/><input type='text' id='" + i + "' readonly='true' class='goods' value='" + newGoods +"'> <button id='button-" + i +
		 "' class='button-delete' data-id='" + i + "'>x</button> </span> </li>");
		i++;
		$("#view").val("");
		$("#aditionalPanel").removeClass("hidden");
		$("#view").focus();
		$("#markAll").removeAttr("checked");

		$(".goods").on("click", function(e) {
			event.preventDefault();
		});

		$(".goods").on("dblclick", function(e) {
			var target = $(e.target);
			text = 	target.val();
			target.removeAttr("readOnly");
			target.focus();
			//console.log(target);
			target.addClass("goods_db");
		});

		$(".goods").on("blur", function(e) {
			var target = $(e.target);
			target.attr("readOnly", "true");
			target.removeClass("goods_db");
		});

		$(".goods").on("keydown", function(e) {
			target = $(e.target);
			var key = e.keyCode;
			//console.log(key);
			if(key == 13) {
				target.blur();
			}	else if(key == 27) {
				target.val(text);
				$(target).blur();
			}
		});

		$(".checkbox").on("click", function(e){
			var target = $(e.target);
			var PR = target.prop('checked')
			var id = target.attr("data-id");
			var li = $("#li-" + id);
			var input = $("#" + id);
			if(PR == true) {
				li.addClass("checked");
				input.css("text-decoration", "line-through");
			} else {
				li.removeClass("checked");
				input.css("text-decoration", "none");
				$("#markAll").removeAttr("checked");
				//target.removeAttr("checked");-------------
			}
		});

		
		$(".li").on("mouseover", function(e) {
			var target = $(e.target);
			var id = target.attr("data-id");
			var button = $("#button-" + id);
			button.css("visibility", "visible");
		});

		$(".li").on("mouseleave", function(e) {
			var target = $(e.target);
			var id = target.attr("data-id");
			var button = $("#button-" + id);
			button.css("visibility", "hidden");
		});

		$(".goods").mouseenter(function(e) {
			var target = $(e.target);
			var id = target.attr("id");
			var button = $("#button-" + id);
			button.css("visibility", "visible");
		});

		$(".goods").mouseleave(function(e) {
			var target = $(e.target);
			var id = target.attr("id");
			var button = $("#button-" + id);
			button.css("visibility", "hidden");
		});

		$(".button-delete").on("click", function(e) {
			var target = $(e.target);
			var id = target.attr("data-id");
			var li = $("#li-" + id);
			li.remove();
		});

	});
	
	$("#markAll").on("click", function(e){
			var target = $(e.target);
			var PR = target.prop('checked')
			var goodsList;
			if(PR == true) {
				goodsList = $(".goods");
				var length = goodsList.length;
				for( var i = 0; i < length; i++) {
					var cur = $(goodsList[i]);
					var id = cur.attr("id");
					$("#li-" + id).addClass("checked");
					$("#" + id).css("text-decoration", "line-through")
					$("#checkbox-" + id).prop('checked', "true");
				}

			} else {
				goodsList = $(".checked");
				var length = goodsList.length;
				for(var i = 0; i < length; i++) {
					var cur = $(goodsList[i]);
					var id = cur.attr("data-id");
					$("#li-" + id).removeClass("checked");
					$("#" + id).css("text-decoration", "none")
					$("#checkbox-" + id).removeAttr("checked");
				}
			}
		});

	$("#deleteAll").on("click", function(e) {
		var goodsList = $(".checked");
		var length = goodsList.length;
		for(var i = 0; i < length; i++) {
			var cur = $(goodsList[i]);
			var id = cur.attr("data-id");
			$("#li-" + id).remove();
		}
		$("#markAll").removeAttr("checked");
	});
	
});