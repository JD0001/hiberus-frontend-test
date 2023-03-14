import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
	providedIn: 'root'
})
/**
 * Provides the needed methods for showing or hidding the loader
 * with a suscribable object
 */
export class LoaderService {

	private isLoading = new Subject<boolean>();
	public get loadingStatus(): Subject<boolean> {
		return this.isLoading;
	}

	// eslint-disable-next-line @typescript-eslint/no-inferrable-types
	public errMessage: string = '';
	public get error(): string {
		return this.errMessage;
	}
	private isErroneous = new Subject<boolean>();
	public get errorStatus(): Subject<boolean> {
		return this.isErroneous;
	}

	public showLoader(): void {
		this.isLoading.next(true);
	}

	public hideLoader(): void {
		this.isLoading.next(false);
	}

	public showError(): void {
		this.isLoading.next(false);
		
		this.isErroneous.next(true);
	}

	public hideError(): void {
		this.isErroneous.next(false);
	}
}
