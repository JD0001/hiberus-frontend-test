const heroes = [
	{id:1, alias: 'Captain America', name: 'Steve Rogers', country: 'US'},
	{id:2, alias: 'Black widow', name: 'Natasha Romanova', country: 'RU'},
	{id:3, alias: 'Iron Man', name: 'Anthony Stark', country: 'US'},
	{id:4, alias: 'Hulk', name: 'Bruce Banner', country: 'BR'},
	{id:5, alias: 'Hawkeye', name: 'Clint Barton', country: 'US'},
	{id:6, alias: 'Black Phanter', name: 'T\'Challa', country: 'WA'},
	{id:7, alias: 'Spiderman', name: 'Peter Parker', country: 'US'}
];

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
module.exports = () => {
	const data = {'heroes': heroes};
	return data;
};