
/*<script src="jquery-3.0.0.min.js"></script>‌
<script src="miner.js"></script>
*/
function resetDefaultSuggestion(){
	chrome.omnibox.setDefaultSuggestion({
	description: 'OrgSyncMiner'
	});
}
resetDefaultSuggestion();

function navigate(url) {
	chrome.tabs.query({active: true, currentWindow: true, function (tabs) {
	chrome.tabe.update(tabs[0].id, {url: url});
	});
}

//actual code:

function miner(){

sessionStorageoutput = [];
var nextPage;

//return all of the links on a page
var ary = $('h4:first-child > a').map(function() {
return this.href;
}).toArray();

sessionStorage.output += ary;

//click on the next page
var nextPage.onload = function(){
next = $('div.pagination').find('em.current').next()[0]; 
next.click();
}

}

//downloads array 'ary'
var a         = document.createElement('a');
a.href        = 'data:attachment/csv,' + output;
a.target      = '_blank';
a.download    = 'links' + sessionStorage.counter +  '.csv';
document.body.appendChild(a);
a.click();
});
}