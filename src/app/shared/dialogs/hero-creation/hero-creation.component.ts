import { Component, Inject } from '@angular/core';
import { Hero } from '@app/shared/pojos/Hero';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HeroService } from '@app/shared/services/hero.service';
import { catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
	selector: 'app-hero-creation-dialog',
	templateUrl: './hero-creation.component.html',
	styleUrls: ['./hero-creation.component.scss']
})

/**
 * This form contains the neccesary data validations to keep the object fields consistents
 */
export class HeroCreationComponent {
	public readonly _ALIAS_MIN_LENGHT: number = 5;
	public readonly _ALIAS_MAX_LENGHT: number = 20;

	public readonly _NAME_MIN_LENGHT: number = 5;
	public readonly _NAME_MAX_LENGHT: number = 20;

	public readonly _ISO_CODE_REGEXP: string = '[A-Z]{2}';
	public readonly _TEXT_REGEXP: string = '[a-zA-Z]+$';

	public heroFormGroup: FormGroup = new FormGroup({
		alias: new FormControl('', [
			Validators.required,
			Validators.minLength(this._ALIAS_MIN_LENGHT),
			Validators.maxLength(this._ALIAS_MAX_LENGHT),
			Validators.pattern(this._TEXT_REGEXP)
		]),
		name: new FormControl('', [
			Validators.required,
			Validators.minLength(this._NAME_MIN_LENGHT),
			Validators.maxLength(this._NAME_MAX_LENGHT),
			Validators.pattern(this._TEXT_REGEXP)
		]),
		country: new FormControl('', [
			Validators.required,
			Validators.pattern(this._ISO_CODE_REGEXP)
		])
	});

	public constructor(private heroService: HeroService, private matDiagRef: MatDialogRef<Hero>, @Inject(MAT_DIALOG_DATA) public hero: Hero) { }

	/**
	 * Updates the displayed hero. In case it doesn't exists, it's then created.
	 */
	public operate(): void {

		this.heroService.update(this.hero)
			.pipe(
				catchError((err: HttpErrorResponse) => {
					if (err.status == 404) { //Not found
						//If update fails, create
						return this.heroService.create(this.hero);
					}
					throw err;
				}))
			.subscribe(() => {
				this.matDiagRef.close(true);
			});

	}
}