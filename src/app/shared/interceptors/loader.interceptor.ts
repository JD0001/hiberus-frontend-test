import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpErrorResponse
} from '@angular/common/http';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

	/**
	 * Helps to time operations past certain time which will be considered
	 * as long operations
	 */
	private timer?: NodeJS.Timeout;

	/**
	 * 
	 * @param loaderSerivce service which implements the current status of the loader
	 */
	public constructor(private loaderSerivce: LoaderService) { }

	public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

		//Show the loader component only for long operations
		const timeThreshold = 200; //ms
		if(this.timer){
			clearTimeout(this.timer);
		}

		this.timer = setTimeout(()=> this.loaderSerivce.showLoader(), timeThreshold);

		//Add pipe with extra function for hidding the loader
		return next.handle(request).pipe(finalize(()=> {
			this.loaderSerivce.hideLoader();
			if(this.timer){
				clearTimeout(this.timer);
			}
		})).pipe(
			catchError((reqError: HttpErrorResponse) =>{
				//Show error only for server errors								
				if(reqError.status > 500 || reqError.status == 0){
					this.loaderSerivce.showError();		
				}		
				return throwError(() => reqError);
			}
			));
	}

}
