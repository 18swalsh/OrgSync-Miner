/*window.addEventListener("load", function() {
    chrome.extension.sendMessage({
        type: "dom-loaded", 
        data: {
            myProperty: //enter message here
        }
    });
}, true); 

The code above will send a message when the extension is clicked
*/




var port = chrome.runtime.connect({name: "my-channel"});
port.postMessage({myProperty: "value"});
port.onMessage.addListener(function(msg) {
    function test(){
    confirm("something");
}
});

chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    switch(message.type) {
        case "runOSM":
        confirm("hoopla");
        var ary = $('h4:first-child > a').map(function() {
return this.href;
}).toArray();

var result = ary;
        //  var Steve = "whatup";
        //  chrome.extension.sendMessage({
        //    data: Steve;
        //});
           //$('div.pagination').find('em.current').next()[0]; 
         // sendResponse(Steve);
         // confirm('hello');
   /*         var nextPage.onload = function(){
              next = $('div.pagination').find('em.current').next()[0]; 
              next.click();
            }     	
*/
        break;
    }
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      confirm('hola');
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);

      // This line is new!
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
);

//return all of the links on a page
