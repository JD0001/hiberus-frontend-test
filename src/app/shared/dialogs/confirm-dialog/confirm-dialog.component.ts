import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from '@app/shared/pojos/Hero';
import { HeroService } from '@app/shared/services/hero.service';

@Component({
	selector: 'app-confirm-dialog',
	templateUrl: './confirm-dialog.component.html',
	styleUrls: ['./confirm-dialog.component.scss']
})
/**
 * This dialog doesn't held any type of validations and his only purpose is to display the data while
 * asking to confirm the object deletion
 */
export class ConfirmDialogComponent {
	
	public constructor(private heroService: HeroService, private matDiagRef: MatDialogRef<string>, @Inject(MAT_DIALOG_DATA) public hero: Hero) { }

	/**
	 * Performs the delete action and closes the dialog once completed. In any other case than deletion, it keeps the
	 * dialog at the front
	 */
	public deleteUser(): void{
		this.heroService.deleteByID(this.hero.id).subscribe(() =>{
			//TRUE -> forces update
			this.matDiagRef.close(true);
		});
	}

}
