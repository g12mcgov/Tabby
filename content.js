/*
	Get the html body
*/

var links = new Array();

if(document.getElementById("rso")) {
	html_collection = document.getElementsByClassName("g");
	for(i = 0; i < html_collection.length; i++) {
		r_block = html_collection[i].getElementsByClassName("r")[0];
		links.push(r_block.firstChild.href);
	}
}
else {
	console.log("Error: Element does not exist");
}

chrome.runtime.sendMessage({greeting: links}, function(response) {
  console.log(response.farewell);
});
//sconsole.log(html_body);             //Gives you the whole HTML of the page