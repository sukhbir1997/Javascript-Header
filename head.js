
$("li#p").on("click",function(){
	$(this).addClass('active');
	$("#h").removeClass('active');
	$("#m").removeClass('active');
	$("#home").css("display","none");
	$("#messages").css("display","none");
	$("#profile").css("display","unset")
});

$("li#h").on("click",function(){
	$(this).addClass('active');
	$("#p").removeClass('active');
	$("#m").removeClass('active');
	$("#profile").css("display","none");
	$("#messages").css("display","none");
	$("#home").css("display","unset")
});

$("li#m").on("click",function(){
	$(this).addClass('active');
	$("#h").removeClass('active');
	$("#p").removeClass('active');
	$("#home").css("display","none");
	$("#profile").css("display","none");
	$("#messages").css("display","unset")
});


var fulltexth="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus, lorem eget porta rhoncus, lorem metus consequat justo, quis interdum est diam at elit. Quisque sed lobortis sapien. Mauris ultricies faucibus sodales. Quisque ac lectus sed libero mollis faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Integer facilisis nisl eget lorem venenatis, in varius dolor tincidunt. Nullam sed mattis mauris, at lobortis nibh. Vivamus volutpat mauris et euismod volutpat. In pellentesque, massa a suscipit rutrum, justo lectus dictum magna, eget semper justo enim ac ligula. Cras eu arcu orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec eu condimentum tellus. Donec faucibus dolor sit amet mi dignissim, auctor venenatis turpis facilisis. Mauris a bibendum lacus, ut fringilla orci. Integer facilisis nisl eget lorem venenatis, in varius dolor tincidunt. Nullam sed mattis mauris, at lobortis nibh. Vivamus volutpat mauris et euismod volutpat. In pellentesque, massa a suscipit rutrum, justo lectus dictum magna, eget semper justo enim ac ligula. Cras eu arcu orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec eu condimentum tellus. Donec faucibus dolor sit amet mi dignissim, auctor venenatis turpis facilisis. Mauris a bibendum lacus, ut fringilla orci."
var halftexth='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus, lorem eget porta rhoncus, lorem metus consequat justo, quis interdum est diam at elit. Quisque sed lobortis sapien.'


$("div.t button").on("click", function(){
	var z= $(this).attr("class");
	if(z== "viewingless"){
		$("div.t p").text(fulltexth);
		$(this).removeClass("viewingless");
		$(this).addClass("viewingmore");
		$(this).text("View Less");
	}else{
		$("div.t p").text(halftexth);
		$(this).removeClass("viewingmore");
		$(this).addClass("viewingless");
		$(this).text("View More");
	}
})
