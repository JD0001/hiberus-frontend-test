import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public title = 'hiberus-frontend-test';

	public constructor(private translate: TranslateService, private cookies: CookieService) {

		//Set the ngx-languages
		translate.addLangs(['en', 'es']);

		const fallbackLang = 'es';
		translate.setDefaultLang(fallbackLang);

		//Get language from cookies
		translate.use(cookies.get('locale') || fallbackLang);
	}
}
