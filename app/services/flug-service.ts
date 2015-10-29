import {Injectable, Inject} from 'angular2/angular2';
import {Http, URLSearchParams} from 'angular2/http';

import { BASE_URL } from './../token'

declare function fetch(url): any;

@Injectable()
export class FlugService {
	baseUrl;
	http: Http;
	
	constructor(@Inject(BASE_URL) baseUrl, http: Http) {
		this.baseUrl = baseUrl;	
		this.http = http;
	}
	
	find(von, nach) {
		
		var url = this.baseUrl + "/api/flug";
		var params = new URLSearchParams();
		params.append('abflugOrt', von);
		params.append('zielOrt', nach);
		
		return this
				.http
				.get(url, {search: params})
				.map(r => r.json());
		
		/*
		var url = this.baseUrl + "/api/flug"
			+ "?abflugOrt=" 
			+ encodeURIComponent(von) 
			+ "&zielOrt=" 
			+ encodeURIComponent(nach);
		
		return fetch(url).then(r => r.json());
		*/
		
		
	}
	
}