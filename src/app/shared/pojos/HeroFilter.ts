/**
 * Helps to provide predefined concepts for filtering the heroes list. It also can be used in other
 * application areas where the heroes need to be filtered.
 */
export interface HeroFilter {
	alias: string;
	name: string;
	country: string;
}