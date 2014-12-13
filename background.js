/* 
*	Author: Grant McGovern
*	Date: 13 December 2014
*
*
*	Purpose: Analyze Google results page for links.
*/

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
	if(message) {
		console.log(message);
	}
	else {
		console.log("Error: No links recieved.");
	}
  sendResponse({farewell:"handshake completed"});
});