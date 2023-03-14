import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogComponent } from './confirm-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ConfirmDialogComponent', () => {
	let component: ConfirmDialogComponent;
	let fixture: ComponentFixture<ConfirmDialogComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ConfirmDialogComponent],
			imports: [
				HttpClientModule, 
				MatDialogModule, 
				MatInputModule,
				MatCardModule,
				MatFormFieldModule,
				FormsModule,
				ReactiveFormsModule,
				BrowserAnimationsModule
			],
			providers: [
				{ provide: MatDialogRef, useValue: {} },
				{ provide: MAT_DIALOG_DATA, useValue: [] },
			]
		})
			.compileComponents();

		fixture = TestBed.createComponent(ConfirmDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
