//Add current page to an array and display is for testing purposes
var adder = function(){
	var ary = $('h4:first-child > a').map(function() {
		return this.href;
	}).toArray();
};
alert(adder());
