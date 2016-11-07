import {Component} from "@angular/core";

@Component({
	selector: 'angular2-app',
	templateUrl: './templates/angular2-app.php'
})

export class AppComponent {
	navCollapse = true;

	toggleCollapse() {
		this.navCollapse = !this.navCollapse;
	}
}