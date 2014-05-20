(function(){
	var app = angular.module("fpf",[]);
	app.controller("BlogController",function(){
		this.posts = entries;
	});
	function Post(title,date){
		this.title = title;
		this.date = date;
		this.content = "";
	};
	Post.prototype.hasContent = function() {
		if(this.content){
			return true;
		} else{
			return false;
		}
	};
	var entry1 = new Post("Sample Post", "May 19th, 6:29 PM");
	entry1.content = "This is a sample post to help me learn angular."
	var entry2 = new Post("Sample Post", Date.now());
	entry2.content = "Just another sample post."
	var entries = [entry1,entry2];
}());