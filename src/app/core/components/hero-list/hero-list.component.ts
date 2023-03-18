import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmDialogComponent } from '@app/shared/dialogs/confirm-dialog/confirm-dialog.component';
import { Hero } from '@app/shared/pojos/Hero';
import { HeroFilter } from '@app/shared/pojos/HeroFilter';
import { HeroService } from '@app/shared/services/hero.service';
import { HeroCreationComponent } from '../../../shared/dialogs/hero-creation/hero-creation.component';
import { TranslateService } from '@ngx-translate/core';


@Component({
	selector: 'hero-list',
	templateUrl: './hero-list.component.html',
	styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit, AfterViewInit {

	/**
	 * Table data source, with extra elements related to material for interactions
	 */
	public heroesList: MatTableDataSource<Hero> = new MatTableDataSource<Hero>();

	/**
	 * Shown columns
	 */
	public columnsList: string[] = ['alias', 'name', 'country', 'actions'];


	private readonly emptyHeroesFilter: HeroFilter = { alias: '', name: '', country: '' };

	/**
	 * Will contains the information set in the filters input
	 */
	public heroesFilter: HeroFilter = Object.assign({}, this.emptyHeroesFilter);


	@ViewChild(MatSort) private tableSort!: MatSort;
	@ViewChild('listPaginator') private tablePaginator!: MatPaginator;
	private matPagLocalization: MatPaginatorIntl = new MatPaginatorIntl();

	public constructor(private heroService: HeroService, private heroFormDialog: MatDialog, private translate: TranslateService) { }


	public ngOnInit(): void {
		this.heroService.getAll().subscribe(heroes => {
			this.heroesList.data = heroes;
		});

		//Localize the paginator
		this.translate.get([
			'HERO_LIST.PAGINATOR_ITEMS_PER_PAGE',
			'HERO_LIST.PAGINATOR_NEXT_PAGE',
			'HERO_LIST.PAGINATOR_PREV_PAGE']) 
			.subscribe((result) => {
				this.matPagLocalization.itemsPerPageLabel = result['HERO_LIST.PAGINATOR_ITEMS_PER_PAGE'];
				this.matPagLocalization.nextPageLabel = result['HERO_LIST.PAGINATOR_NEXT_PAGE'];
				this.matPagLocalization.previousPageLabel = result['HERO_LIST.PAGINATOR_NEXT_PAGE'];
			});


		this.tablePaginator._intl = this.matPagLocalization;
	}

	public ngAfterViewInit(): void {

		//Assign extra properties to the table
		this.heroesList.sort = this.tableSort;
		this.heroesList.paginator = this.tablePaginator;
	}

	/**
	 * Updates the hero list with all the information stored in the database
	 */
	public updateFromDB(): void {
		this.heroService.getAll().subscribe(heroes => {
			this.heroesList.data = heroes;

			//Empty the filter object
			this.heroesFilter = Object.assign({}, this.emptyHeroesFilter);

		});
	}

	/**
	 * Updates the hero list using the filters specified with the object heroesFilter
	 */
	public updateFromDBFiltered(): void {
		this.heroService.getByFilter(this.heroesFilter).subscribe(heroes => {
			this.heroesList.data = heroes;
		});
	}

	/**
	 * Opens the hero dialog form for creation
	 */
	public createHero(): void {

		const diagRef = this.heroFormDialog.open(HeroCreationComponent, {
			disableClose: true,
			data: {}
		});
		diagRef.afterClosed().subscribe((update: boolean) => {
			if (update) {
				//Should update the list with the filter
				this.updateFromDB();
			}
		});
	}

	/**
	 * Shows the proper user interface for editing a hero properties
	 * @param hero target for edition
	 */
	public editHero(hero: Hero): void {

		const heroCopy: Hero = Object.assign({}, hero);

		const diagRef: MatDialogRef<HeroCreationComponent> = this.heroFormDialog.open(HeroCreationComponent, {
			disableClose: true,
			data: heroCopy
		});
		diagRef.afterClosed().subscribe((update: boolean) => {
			//Should update the list with the filter
			if (update) {
				this.updateFromDBFiltered();
			}
		});
	}

	/**
	 * Allows to delete a Hero with confirmation 
	 * @param hero target for deletion
	 */
	public deleteHero(hero: Hero): void {

		const heroCopy: Hero = Object.assign({}, hero);

		const diagRef: MatDialogRef<ConfirmDialogComponent> = this.heroFormDialog.open(ConfirmDialogComponent, {
			disableClose: true,
			data: heroCopy
		});
		diagRef.afterClosed().subscribe((update: boolean) => {
			//Should update the list with the filter
			if (update) {
				this.updateFromDBFiltered();
			}
		});
	}
}
