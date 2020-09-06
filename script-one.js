// Main Angular Application
var App = angular.module("myApp", []);
  
// Master Angular Controller
App.controller('masterCtrl', function($scope) {

	
	
});
 
function answer() {
	alert("You can also search other Countries as well! Just put the city and then region/country! Also, you don't have to submit a street address. Submit a city and state (or other location in the world) to mark the map and get news about it, as well as a twitter feed!");
}

function fqAnswer() {
	$('#fq-text').text('Please be normal with your search. \
	You can click the list item to show it on the map');
	
	setTimeout(function(){ 
		$('#fq-text').text('');
	}, 5000);
	
}

function webInfo() {
	alert(
		'Welcome to this web application. This web app is using 3 APIs: \
		Google Maps, Google StreetView, and FourSquare! \
		Search for a specific location, a category (Search literally anything, including brand names) and locations from four square! \
		Please use proper words for your search. Have fun and enjoy!'
	);	
}
