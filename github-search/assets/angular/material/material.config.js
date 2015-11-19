'use strict';

angular
	.module('github-search')
	.config(materialConfig);

function materialConfig($mdThemingProvider){
	$mdThemingProvider
		.theme('default')
		.primaryPalette('green')
		.accentPalette('green');
}
