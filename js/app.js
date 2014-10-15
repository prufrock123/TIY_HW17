_.templateSettings.interpolate = /{([\s\S]+?)}/g;


var someHtmlString = [
	"<div id='profile'>",	
		"<img src='{avatar_url}'>",
		"<h1>{name}</h1>",
		"<ul>",
			"<li> blog: {blog} </li>",
			"<li> location: {location} </li>",
			"<li> email: {email} </li>",
		"</ul>",
	"</div>"
].join("");


// var someHtmlString = [
// 	"<div id='profile'>
// ]

function writeToDOM(data){
	document.body.innerHTML = _.template(someHtmlString, data);
}

$.getJSON("https://api.github.com/users/prufrock123").then(writeToDOM)

// $.getJSON("https://api.github.com/users/prufrock123").then(function(data){
// 	console.log(data);
// })