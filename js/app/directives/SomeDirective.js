function SomeDirective() {
	return {
		template: [
			'<div>',
				'{{text}}',
			'</div>'
		].join(''),
		link: function ($scope, $elem, $attrs) {
			this.text = "Replace this text!"
		},
		compile: function($scope, $elem, $attrs) {
			this.text = "goodbye!"
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);