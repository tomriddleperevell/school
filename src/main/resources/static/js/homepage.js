// const handlebar = require("handlebars");

function log(...param){
	console.log(param);
}

function generateHtml(id,jsonData){
	var source   = document.getElementById(id).innerHTML;
	var template = handlebar.compile(source);
	var html = template(jsonData);
	return html;
}

function loadPosts(posts){
	var postContainer = document.getElementById("posts-container");
	for(var index in posts){
		var jsonData = {text:posts[index].text,date:posts[index].createDate,id:posts[index].id,creatorUserName:posts[index].creatorUsername};
		postContainer.innerHTML+=generateHtml("post_template",jsonData);
	}


}

function setPersonalInfo(info){
	document.getElementById("username").innerText = info.userName;
	if(localStorage.getItem("user") == info.userName){
		document.getElementById("already_friends_container").style.display = 'none';
		document.getElementById("add_friend_container").style.display = 'none';

	}
}

function loadFriends(friends){
	var friendContainer = document.getElementById("friends");
	var currentUsername = localStorage.getItem("user");
	friends.forEach(function (friend) {
		var jsonData  = {username:friend.userFrom};
		friendContainer.innerHTML+=generateHtml("friends_template",jsonData);
		if(currentUsername == friend.userFrom){
			document.getElementById("add_friend_container").style.visibility = 'hidden';
		}
	});

}

function  loadStuff  () {
	debugger;
	var xhttp = new XMLHttpRequest();
	var urlParams = window.location.href;

	var username = urlParams.split("/").pop();
	if(username == 'homepage'){
		username = localStorage.getItem("user");
	}
	var parameters = "username="+username;
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);
			var response = JSON.parse(this.responseText);
			log()
			if(response.returnedResponses.errorCode != 0){
				alert(response.returnedResponses.description);
				// window.location.href="/login"
			}else{
				// window.location.href = "homepage.jsp"
				var posts = response.data.object.posts;
				loadPosts(posts);
				setPersonalInfo(response.data.object);
				addEventListenerToComments();
				addCommentToCommenstContainer(posts);
				loadFriends(response.data.object.friends);
				log(JSON.stringify(response.data.object.friendRequests));

				log(localStorage.getItem("friendRequsts"));



			}
		}else if(this.readyState == 4){
			alert("some error happend")
		}
	};
	xhttp.open("POST","User",true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send(parameters);
};
document.getElementById("publishPost").addEventListener("click",function () {

	console.log("here");
	var targetUsername = document.getElementById("username").innerText;
	var postText = document.getElementById("post_text").value;
	var xhttp = new XMLHttpRequest();


	var parameters = "targetUserName="+targetUsername+"&"+"text="+postText;
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);
			console.log(JSON.parse(this.responseText));
			var response = JSON.parse(this.responseText);
			// console.log(returned['returnedResponses']);
			if(response.returnedResponses.errorCode != 0){
				alert(response.returnedResponses.description);
			}else{
				// window.location.href = "homepage.jsp"
				var text = response['data']['object']['text'];
				var date = response['data']['object']['createDate'];
				var  creatorUsername = response['data']['object']['creatorUsername'];
				var jsonData = {creatorUserName:creatorUsername,createDate:date,text:text};
				var postsDiv = document.getElementById("posts-container");
				postsDiv.innerHTML+=generateHtml("post_template",jsonData);

			}
		}else if(this.readyState == 4){
			alert("some error happend")
		}
	};
	xhttp.open("POST","Post",true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	xhttp.send(parameters);

});


function addCommentToCommenstContainer(posts){
	for(var postId in posts){
		var comments = posts[postId].comments;
		var commentContainer = document.getElementById(posts[postId].id).nextElementSibling;
		for(var commentId in comments){
			var text = comments[commentId].commentText;
			var creatorUsername =  comments[commentId].creatorUserName;
			var date = comments[commentId].createDate;
			var jsonData = {creatorUserName:creatorUsername,createDate:date,text:text};
			var html = generateHtml("post_comment_template",jsonData);
			commentContainer.innerHTML+=html;
		}

	}
}

function addComment(event) {
	var comment_container = event.target.nextElementSibling;
	// html = generateHtml("post_comment_template",{creatorUserName:"me",text:"fukc u"});
	// commnet_container.innerHTML+=html;;
	var targetUsername = document.getElementById("username").innerText;
	var commentText = event.target.value;
	log(event.target);
	var postId = event.target.id;
	var xhttp = new XMLHttpRequest();


	var parameters = "targetUserName="+targetUsername+"&"+"text="+commentText+"&"+"postId="+postId;
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);
			console.log(JSON.parse(this.responseText));
			var response = JSON.parse(this.responseText);
			// console.log(returned['returnedResponses']);
			if(response.returnedResponses.errorCode != 0){
				alert(response.returnedResponses.description);
			}else{
				log(this.responseText);
				var text = response['data']['object']['commentText'];
				var creatorUsername = response['data']['object']['creatorUserName'];
				var date = response['data']['object']['createDate'];
				var jsonData = {creatorUserName:creatorUsername,createDate:date,text:text};
				// console.log("text",text);
				comment_container.innerHTML+=generateHtml("post_comment_template",jsonData);
				event.target.value = '';
			}
		}else if(this.readyState == 4){
			alert("some error happend")
		}
	};
	xhttp.open("POST","Comment",true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	xhttp.send(parameters);
}


function addEventListenerToComments(){
	var classes = document.getElementsByClassName("postComment");
	for(var i = 0; i<classes.length;i++){
		classes[i].addEventListener('keypress',function (ev) {
			if(ev.key ==='Enter'){
				addComment(ev);

			}
		});
	}
}

document.getElementById("add_friend").addEventListener("click",function (ev) {
	// html = generateHtml("post_comment_template",{creatorUserName:"me",text:"fukc u"});
	// commnet_container.innerHTML+=html;;
	var targetUsername = document.getElementById("username").innerText;
	var xhttp = new XMLHttpRequest();


	var parameters = "targetUserName="+targetUsername;
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);
			console.log(JSON.parse(this.responseText));
			var response = JSON.parse(this.responseText);
			// console.log(returned['returnedResponses']);
			if(response.returnedResponses.errorCode != 0){
				alert(response.returnedResponses.description);
			}else{
				log(this.responseText);

			}
		}else if(this.readyState == 4){
			alert("some error happend")
		}
	};
	xhttp.open("POST","FriendRequest",true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	xhttp.send(parameters);
});

loadStuff();

// export {loadPosts};