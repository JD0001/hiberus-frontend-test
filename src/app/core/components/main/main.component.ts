import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent {

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	public constructor(private translate: TranslateService) { }

	/**
	 * Provides an easy method for setting the locale from the HTML
	 * @param locale language to show information in
	 */
	public setLocaleTo(locale: string): void {
		this.translate.use(locale);
	}
}
