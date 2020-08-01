console.log('HELLO');

const recipes = [
	{
		title: 'Chinese soup',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Natacha',
		difficulty: 'easy',
		timing: '10 minutes',
		ingredients: [
			'4 cups chicken stock',
			'3 green onions (finely sliced into rounds)',
			'1 tablespoon Oyster Sauce',
			'1 tablespoon low sodium Soy Sauce',
			'1 tablespoon low sodium dark Soy Sauce ((this can be held until the end and added',
		],
		steps: [
			'In a large saucepan, heat the chicken stock and bring to a boil.',
			'Add the green onions, Bok Choy or Chinese greens, soy sauces, oyster sauce & the noodles.',
			'Reduce the heat and cook according to noodle package instructions (just until tender).',
			'Serve hot!',
		],
		id: 1,
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
		id: 2,
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
		id: 3,
	},
];

const myCard = document.querySelector('.container');
const generateButton = document.querySelector('button.generate');
const moreInfo = document.querySelector('.more-info');
const outerModal = document.querySelector('.outer-modal');
const innerModal = document.querySelector('.inner-modal');


const renderCard = (e) => {
	e.preventDefault();
	for (let i = 0; i < recipes.length; i++) {
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
		const myHtml = `
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

const openModal = event => {
	outerModal.classList.add('open');
		for (let i = 0; i < recipes.length; i++) {
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
			const myNewHtml = `
		<div class="newRecipe">
			<h2 class="recipe-name">${title}</h2>
			<img src="${picture}" width="200" height="200" alt>
			<p class="timing">${difficulty}</p>
			<p class="difficulty">${timing}</p>
			<button class="more-info">More info</button>
		</div>
	`;
			innerModal.innerHTML = myNewHtml;
		};
};

const closeModal = event => {
	const isOutside = !event.target.closest('.inner-modal');
	if (isOutside) {
		outerModal.classList.remove('open');
	}
};

const escapeModal = event => {
	if (event.key === 'Escape') {
		outerModal.classList.remove('open');
	}
}

generateButton.addEventListener('click', renderCard);

	const handleClick = e => {
		if (e.target.matches('button.more-info')) {
			const div = e.target.closest('.newRecipe');
			const id = Number(div.dataset.id);
			const recipe = recipes.find(recipe => recipe.id === id);
			openModal();
		}
	};
	//console.log(handleClick());	
	window.addEventListener('click', handleClick);

window.addEventListener('keydown', escapeModal);
outerModal.addEventListener('click', closeModal);

