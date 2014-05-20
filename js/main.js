(function(){
	var app = angular.module("fpf",[]);
	app.controller("BlogController",function(){
		this.entries = entries;
	});
	app.controller("WorksController",function(){
		this.books = works;
	});
	app.controller("PostController",function(){
		this.post = {};
		this.addPost = function(){
			this.post.date = Date.now();
			entries.push(this.post);
			this.post = {};
			//TODO 
			//Add Class Color Removal
		}
	});
	app.directive("post",function(){
		return{
			restrict: 'E',  //A for attribute, E for element
			templateUrl: "post-format.html"
		};
	});

	app.directive("blog",function(){
		return{
			restrict: 'E',  //A for attribute, E for element
			templateUrl: "blog-format.html",
			controller: function(){
				this.entries = entries;
			},
			controllerAs: "blog"
		};
	});


	function Post(title,date){
		this.title = title;
		this.date = date;
		this.content = "";
	};
	function Work(title,date,image){
		this.title = title;
		this.date = date;
		this.image = image
		this.description = "";
	};
	Post.prototype.hasContent = function() {
		if(this.content){
			return true;
		} else{
			return false;
		}
	};
	Work.prototype.addDescription = function(){

	}
	var entry1 = new Post("Sample Post", "May 19th, 6:29 PM");
	entry1.content = "This is a sample post to help me learn angular."
	var entry2 = new Post("Sample Post", Date.now());
	entry2.content = "Just another sample post."
	var entries = [entry1,entry2];
	var work1 = new Work("Book 1", Date.now(), "img/1.jpg");
	work1.description = "Pretty good, by me."
	var work2 = new Work("Book 2", Date.now(), "img/2.jpg");
	work2.description = "Pretty good, by me."

	var works =  [work1,work2]
}());