import { Component, View, CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/angular2';
import { RouteParams } from 'angular2/router';
import { EditDialog} from './../edit-dialog/edit-dialog';

@Component({})
@View({
	 templateUrl: 'app/components/flug-edit/flug-edit.html',
	 directives: [EditDialog, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class FlugEdit {
	
	id;
	info;
	flug = {
		id: 17,
		von: 'Graz'
	}
	
	constructor(params: RouteParams) {
		this.id = params.get('id');
		this.info = 'Flug: #' + this.id;
	}
	
	save() {
		console.debug(this.flug.von);
	}
	
}