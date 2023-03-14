import { Component, ViewChild } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';
import { LoaderService } from '@app/shared/services/loader.service';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-loader',
	templateUrl: './loader.component.html',
	styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

	public isLoading: Subject<boolean> = this.loaderService.loadingStatus;
	public errorReceived: Subject<boolean> = this.loaderService.errorStatus;

	// eslint-disable-next-line @typescript-eslint/no-inferrable-types
	public errorBarValue: number = 0;

	@ViewChild('errorBar') public errorBar!: MatProgressBar;

	/**
	 * Error div element managing object
	 */
	@ViewChild('errorBlock') public set errorBlock(element: HTMLDivElement) {
		//Since there isn't any stopper for showing the error, it needs to be recreated
		if (element) {
			const errorBarInterval = setInterval(() => {
				this.errorBarValue += 5;
				if (this.errorBarValue == 100) {
					clearInterval(errorBarInterval);
				}
			}, 100);
		}
	}


	public constructor(private loaderService: LoaderService) { }

	public hideErrorBlock(): void {
		this.errorReceived.next(false);
		this.errorBarValue = 0;
	}
}
