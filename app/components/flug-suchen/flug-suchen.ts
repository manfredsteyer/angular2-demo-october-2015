import { Component, View, NgIf, NgFor, FORM_DIRECTIVES, Inject } from 'angular2/angular2';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { FlugService } from './../../services/flug-service';
import { ShowError } from './../../validation/show-error';
import { CityValidator } from './../../validation/city-validator';


@Component({
	selector: 'flug-suchen'
})
@View({
	templateUrl:'app/components/flug-suchen/flug-suchen',
	directives: [NgIf, NgFor, FORM_DIRECTIVES, ShowError, CityValidator, ROUTER_DIRECTIVES]
})
export class FlugSuchen {
	
	von = "Graz";
	nach = "Hamburg";
	fluege = [];
	selectedFlug;
	message;
	flugService: FlugService;
	
	constructor(@Inject(FlugService) flugService) {
		this.flugService = flugService;
	}
	
	suchen() {
		
		this.flugService
			.find(this.von, this.nach)
			.subscribe(r => {
				this.fluege = r;
				this.message = r.length + " Flüge geladen";
			});
		
	}
	
	select(flug) {
		this.selectedFlug = flug;
	}
	
	
}