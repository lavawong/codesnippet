angular.module('app').directive('myElement', function(){
	return {
		restrict: 'EA',
		replace: true,
		scope: true,
		controllerAs: 'something',
		controller: function () {

		},
		link: function ($scope, $element, $attrs) {
		},
		template: [
			'<div class="some-directive">',
	  		'My directive!',
	  	'</div>'
	 	].join('')
	};	
});
