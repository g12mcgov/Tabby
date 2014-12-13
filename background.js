/* 
*	Author: Grant McGovern
*	Date: 13 December 2014
*
*
*	Purpose: Analyze Google results page for links.
*/

/* Regex-pattern to check URLs against. 
  It matches URLs like: http[s]://[...]stackoverflow.com[...] */
var urlRegex = /^https?:\/\/(?:[^\.]+\.)?google\.com/;

/* A function creator for callbacks */
function doStuffWithDOM(domContent) {
    console.log("I received the following DOM content:\n" + domContent);
}

chrome.browserAction.onClicked.addListener(function(tab) {
    if (urlRegex.test(tab.url)) {
        chrome.tabs.sendMessage(tab.id, { text: "report_back" },
                                doStuffWithDOM);
    }
});

chrome.webNavigation.onComplete.addListener(function(e) {
        chrome.tabs.sendRequest(e.tabId, {
            action: 'getSource'
        }, function(r) {
            console.log(r);
        });
});