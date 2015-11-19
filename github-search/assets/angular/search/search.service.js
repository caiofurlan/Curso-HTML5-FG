'use strict';

angular
	.module('github-search')
	.service('SearchService', SearchService);

function SearchService($resource){
	return {
		repositories: $resource('https://api.github.com/search/repositories')
	};
}