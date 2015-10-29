import {Component, bootstrap, FORM_PROVIDERS, provide} from 'angular2/angular2';
import {View} from 'angular2/angular2';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { RouteConfig, ROUTER_DIRECTIVES, Location } from 'angular2/router';

import {FlugSuchen} from './components/flug-suchen/flug-suchen';
import {FlugEdit} from './components/flug-edit/flug-edit';
import {Home} from './components/home/home';

import {FlugService} from './services/flug-service';
import {BASE_URL} from './token';


@Component({
	selector: 'app'
})
@View({
	directives: [ROUTER_DIRECTIVES],
	templateUrl: 'app/app.html'
})
@RouteConfig([
	{ path: '/', component: Home, as: 'Home' },
	{ path: '/flug-suchen', component: FlugSuchen, as: 'FlugSuchen' },
	{ path: '/flug-edit/:id', component: FlugEdit, as: 'FlugEdit' }	
])
export class App {
	title;
	location: Location;
	
	constructor(location: Location) {
		this.title = "Flug-Demo-App";
		this.location = location;
	}
	
	isActive(path): boolean {
		return (this.location.path() == path);
	}
}

var provider = [
	FORM_PROVIDERS,
	HTTP_PROVIDERS,
	ROUTER_PROVIDERS,
	Location,
	provide(FlugService, {useClass: FlugService}),
	provide(BASE_URL, {useValue: 'http://www.angular.at'}),
	provide(LocationStrategy, {useClass: HashLocationStrategy})
]

bootstrap(App, provider);
