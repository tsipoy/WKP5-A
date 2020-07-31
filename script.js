console.log('HELLO');

const recipes = [
	{
		title: 'Chinese soup',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Natacha',
		difficulty: 'easy',
		timing: '15',
		ingredients: ['eggs', 'salt', 'water'],
		steps: [
			'Put a pan on the fire',
			'Crack the eggs on it',
			'Wait, put them out',
			'Add some salt on it',
		],
		id: 1596168482053,
	},
	{
		title: 'Malagasy dish',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Natacha',
		difficulty: 'easy',
		timing: '15',
		ingredients: ['eggs', 'salt', 'water'],
		steps: [
			'Put a pan on the fire',
			'Crack the eggs on it',
			'Wait, put them out',
			'Add some salt on it',
		],
		id: 1596168522409,
	},
	{
		title: 'My recipe',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Natacha',
		difficulty: 'easy',
		timing: '15',
		ingredients: ['eggs', 'salt', 'water'],
		steps: [
			'Put a pan on the fire',
			'Crack the eggs on it',
			'Wait, put them out',
			'Add some salt on it',
		],
		id: 1596168522409,
	},
];

const myCard = document.querySelector('.container');
const generateButton = document.querySelector('button.generate');

const renderCard = (e) => {
	e.preventDefault();
	for ( let i = 0; i < recipes.length; i++) {
	// check the recipes collection
	let title = recipes[i].title;
	let picture = recipes[i].picture;
	let author = recipes[i].author;
	let difficulty = recipes[i].difficulty;
	let timing = recipes[i].timing;

	console.log(title);
	console.log(picture);
	console.log(author);
	console.log(difficulty);
	console.log(timing);
	// generate the HTML
	const myHtml =`
		<div class="newRecipe">
			<h2 class="recipe-name">${title}</h2>
			<img src="${picture}" width="200" height="200" alt>
			<p class="timing">${difficulty}</p>
			<p class="difficulty">${timing}</p>
			<button class="more-info">More info</button>
		</div>
	`;
	// put it in the DOM
	myCard.insertAdjacentHTML('beforeend', myHtml);
	console.log(myHtml);
 	};
};
 
generateButton.addEventListener('click', renderCard);
