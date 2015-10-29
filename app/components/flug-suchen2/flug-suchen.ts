import { Component, View, NgIf, NgFor, FORM_DIRECTIVES, Inject } from 'angular2/angular2';
import { FormBuilder, ControlGroup, Validators } from 'angular2/angular2';
import { FlugService } from './../../services/flug-service';
import { ShowError } from './../../validation/show-error';
import { CityValidator } from './../../validation/city-validator';

@Component({
	selector: 'flug-suchen'
})
@View({
	templateUrl:'app/components/flug-suchen2/flug-suchen',
	directives: [NgIf, NgFor, FORM_DIRECTIVES, ShowError]
})
export class FlugSuchen2 {
	
	fluege = [];
	selectedFlug;
	message;
	flugService: FlugService;
	filter: ControlGroup;	
	
	constructor(@Inject(FlugService) flugService, fb: FormBuilder) {
		this.flugService = flugService;
		
		this.filter = fb.group({
			von: ['Graz', Validators.compose([
							Validators.required, 
							Validators.minLength(3), 
							CityValidator.validate])],
			nach: ['Hamburg']
		}); 
		
	}
	
	suchen() {
		
		
		this.flugService
			.find(this.filter.value.von, this.filter.value.nach)
			.then(r => {
				this.fluege = r;
				this.message = r.length + " Flüge geladen";
			});
		
	}
	
	select(flug) {
		this.selectedFlug = flug;
	}
	
	
}