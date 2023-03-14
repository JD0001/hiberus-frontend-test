/**
 * Hero interface type for managing hero instances
 */
export interface Hero {
    /**
     * Numeric identifier
     */    
    id: number;
    /**
     * Hero alias used in the films
     */
    alias: string;
    /**
     * Character name
     */
    name: string;
    /**
     * Country of origin
     */
    country: string;
}