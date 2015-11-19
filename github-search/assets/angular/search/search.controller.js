'use strict';

angular
	.module('github-search')
	.controller('SearchController', SearchController);

function SearchController(SearchService){
	this.submit = ()=> {
		SearchService
			.repositories
			.get({q: this.value}).$promise
			.then((response)=> {
				//console.log('sucesso', response.items);
				this.results = response.items;
			})
			.catch((err)=> {
				console.log('error', err);
			});
	};
}
