import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '@app/shared/pojos/Hero';
import { restHeroURL } from '@app/shared/constants/rest.endpoints';
import { Observable } from 'rxjs/internal/Observable';
import { HeroFilter } from '../pojos/HeroFilter';

@Injectable({
	providedIn: 'root',
})

/**
 * Service to manage hero items from the database through REST 
 */
export class HeroService {

	private constructor(private httpclient: HttpClient) { }
	/**
   * Returns all heros stored in the datasource
   */
	public getAll(): Observable<Hero[]> {
		return this.httpclient.get<Hero[]>(restHeroURL);
	}

	/**
	 * Returns the specified Hero.
	 * @param id unique identifier per hero
	 * @returns the queried Hero item
	 */
	public get(id: number): Observable<Hero> {
		const finalUrl = restHeroURL + '/' + id;
		return this.httpclient.get<Hero>(finalUrl);
	}

	/**
	 * Allows to return a specific Hero filtered by his name. The name
	 * can be a simple string or a regex.
	 * @param name string to filter the heroes with
	 * @returns a specific heroe that complies with the filter
	 */
	public getByNameWith(text: string): Observable<Hero[]> {
		const finalUrl = restHeroURL + '?name_like=' + text;
		return this.httpclient.get<Hero[]>(finalUrl);
	}

	/**
	 * Allows to return a specific Hero filtered by his alias. The alias
	 * can be a simple string or a regex.
	 * @param name string to filter the heroes with
	 * @returns a specific heroe that complies with the filter
	 */
	public getByFilter(heroFilter: HeroFilter): Observable<Hero[]> {
		const aliasPredicate = 'alias_like=' + heroFilter.alias;
		const namePredicate = 'name_like=' + heroFilter.name;
		const countryPredicate = 'country_like=' + heroFilter.country;
		const finalUrl = restHeroURL + '?' + aliasPredicate + '&' + namePredicate + '&' + countryPredicate;
		return this.httpclient.get<Hero[]>(finalUrl);
	}

	/**
	 * Allows to update a specified hero by his identifier.
	 * @param hero target to update
	 * @returns result of the operation
	 */
	public update(hero: Hero): Observable<Hero>{
		
		const finalUrl = hero.id ? restHeroURL + '/' + hero.id : restHeroURL;
		
		return this.httpclient.put<Hero>(finalUrl, hero);
	}

	/**
	 * Allows to create a hero.
	 * @param hero target to create
	 * @returns result of the operation
	 */
	public create(hero: Hero): Observable<Hero> {
		return this.httpclient.post<Hero>(restHeroURL, hero);
	}

	/**
	 * 
	 * @param id target ID to delete
	 * @returns result of the operation
	 */
	public deleteByID(id: number): Observable<unknown> {
		const finalUrl = restHeroURL + '/' + id;
		return this.httpclient.delete<HttpResponse<unknown>>(finalUrl);
	}
}
