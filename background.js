//background.js
chrome.browserAction.setBadgeText({text: "SGA"});

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
        case "dom-loaded":
            //run OSM?     	
//        var nextPage = function(){
//			next = $('div.pagination').find('em.current').next()[0]; 
//			next.click();
//			}  
//		nextPage();

        break;
    }
    return true;
});

chrome.runtime.onConnect.addListener(function(port) {
    if(port.name == "my-channel"){
        port.onMessage.addListener(function(msg) {
            //stuff here
        });
    }
});


//this function below is receiving the message that 
//the button has been clicked
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
        case "runOSM":
          window.onload = function() {
          document.getElementById("button").onclick = function() {
            chrome.extension.sendMessage({
              type: "runOSM"
            //},
            //function(msg) {
            //  confirm(msg);
            });
          }
        }
          
        break;
    }
    return true;
});

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "open_new_tab" ) {
      chrome.tabs.create({"url": request.url});
    }
  }
);
result = ary;