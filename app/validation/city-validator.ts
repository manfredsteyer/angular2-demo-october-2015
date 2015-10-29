import { Control, Directive, Provider, NG_VALIDATORS } from 'angular2/angular2';

@Directive({
	selector: '[city]',
	bindings: [new Provider(NG_VALIDATORS, {useValue: CityValidator.validate, multi: true})]
}) 
export class CityValidator {
	
	static validate(control: Control): any {
		
		var cities = ['Graz', 'Hamburg', 'Flagranti'];
		
		if (!control.value) return {};
		if (cities.find(c => c == control.value)) return {};
		
		return {
			city: true
		}
		
	}
	
}