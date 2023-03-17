import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public title = 'hiberus-frontend-test';

	public constructor(private translate: TranslateService) {
		//This avoids showing the ngx keys until the default language from translate.module.ts is loaded
		translate.setDefaultLang('es');
		translate.use('en');
	}
}
