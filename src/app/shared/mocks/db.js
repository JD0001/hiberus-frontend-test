const heroes = [
	{id:1, alias: 'Captain America', name: 'Steve Rogers', country: 'USA'},
	{id:2, alias: 'Black widow', name: 'Natasha Romanova', country: 'RU'},
	{id:3, alias: 'Iron Man', name: 'Anthony Stark', country: 'USA'},
	{id:4, alias: 'Hulk', name: 'Bruce Banner', country: 'BR'},
	{id:5, alias: 'Hawkeye', name: 'Clint Barton', country: 'USA'},
	{id:6, alias: 'Black Phanter', name: 'T\'Challa', country: 'WA'},
	{id:7, alias: 'Spiderman', name: 'Peter Parker', country: 'USA'}
];

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
module.exports = () => {
	const data = {'heroes': heroes};
	return data;
};