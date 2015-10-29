import { EventEmitter, Input, Output, CORE_DIRECTIVES } from 'angular2/angular2';
import { Component, View } from 'angular2/angular2';

@Component({
	selector: 'edit-dialog'
})
@View({
	templateUrl: 'app/components/edit-dialog/edit-dialog.html',
	directives: [CORE_DIRECTIVES]
})
// <edit-dialog [data]="flug" (save)="save()" [title]="Flug">...</edit-dialog>
export class EditDialog {
	@Input() title: string;
	@Input() data: any;
	@Output() save: EventEmitter = new EventEmitter();
	
	innerSave() {
		this.save.next(this.data);
	}
	
	
}