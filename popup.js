//when the button is clicked, send a message to 

window.onload = function() {
    document.getElementById("button").onclick = function() {
        chrome.extension.sendMessage({
            type: "runOSM"
        });
    }
}

function printResult(result){
//or You can print the result using innerHTML
console.log(result);

}
chrome.tabs.executeScript(null, { file: 'test.js' },function(result){
   printResult(result);
});
