chrome.tabs.executeScript({
	code:

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