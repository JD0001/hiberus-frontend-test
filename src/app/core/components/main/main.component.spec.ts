import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
	let component: MainComponent;
	let fixture: ComponentFixture<MainComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [MainComponent],
			imports: [MatIconModule, MatMenuModule, MatCardModule, MatListModule]
		})
			.compileComponents();

		fixture = TestBed.createComponent(MainComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
