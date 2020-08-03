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
			'3 green onions',
			'1 tablespoon Oyster Sauce',
			'1 tablespoon low sodium Soy Sauce',
			'1 tablespoon low sodium dark Soy Sauce',
		],
		steps: [
			'In a large saucepan, heat the chicken stock and bring to a boil.',
			'Reduce the heat',
			'And cook according to noodle package instructions.',
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
		title: 'Fried potatoes',
		picture: 'https://bit.ly/2Do256h',
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
const addNewRecipe = document.querySelector('.add-button');
const nameInput = document.querySelector('#name');
const urlInput = document.querySelector('#url');
const chefInput = document.querySelector('#chef');


// Generate recipes
const renderCard = (e) => {
	e.preventDefault();
	// check the recipes collection
	for (let i = 0; i < recipes.length; i++) {
		let title = recipes[i].title;
		let picture = recipes[i].picture;
		let author = recipes[i].author;
		let difficulty = recipes[i].difficulty;
		let timing = recipes[i].timing;
		let id = recipes[i].id;
		// generate the HTML
		const myHtml = `
		<div class="newRecipe" data-id="${id}">
			<h2 class="recipe-name">${title}</h2>
			<img src="${picture}"alt>
			<div class="tim-diff">
				<p class="timing">${difficulty}</p>
				<p class="difficulty">${timing}</p>
			</div>
			<button class="more-info">More info</button>
		</div>
	`;
		// put it in the DOM
		myCard.insertAdjacentHTML('beforeend', myHtml);
	};
};


// Generate modal

// Open modal
const openModal = (event) => {
	outerModal.classList.add('open');
	// generate the HTML
	const myNewHtml = `
		<div class="newRecipe">
			<h2 class="recipe-name">${event.title} by ${event.author}</h2>
			<img src="${event.picture}" alt>
			<div class="tim-diff">
				<p class="timing"><b>Timing:</b> ${event.difficulty}</p>
				<p class="difficulty"><b>Difficulty:</b> ${event.timing}</p>
			</div>
			<div class="preparation">
				<p class="ingredients"><b>Ingredients:</b> ${event.ingredients}</p>
				<p class="steps"><b>Steps:</b> ${event.steps}</p>
			</div>
	`;
	innerModal.innerHTML = myNewHtml;
};

// Close modal
const closeModal = event => {
	const isOutside = !event.target.closest('.inner-modal');
	if (isOutside) {
		outerModal.classList.remove('open');
	}
};

// Escape modal
const escapeModal = event => {
	if (event.key === 'Escape') {
		outerModal.classList.remove('open');
	}
}


const handleClick = e => {
	if (e.target.matches('button.more-info')) {
		const div = e.target.closest('.newRecipe');
		const id = Number(div.dataset.id);
		const recipe = recipes.find(recipe => recipe.id === id);
		openModal(recipe);
	}
};

const addOpenModal = (e) => {
	e.preventDefault();
	outerModal.classList.add('open');

	const myForm = `
		<form>
			<h1>Onja Cookbook</h1>
			<h3>What's the recipe name?</h3>
			<label for="name" class="recipe-name">
				<input name="title" type="text" id="name">
			</label>
			<h3>Picture of the result (URL)</h3>
			<label for="url" class="food-picture">
				<input name="picture" type="url" id="url">
			</label>
			<h3>Who is the cook?</h3>
			<label for="chef" class="recipe-chef">
				<input name="author" type="text" id="chef">
			</label>
			<h3>What's the difficulty?</h3>
			<select name="difficulty" id="difficulty">
			<option value="easy">Easy</option>
			<option value="medium">Medium</option>
			<option value="hard">Hard</option>
			</select>
			<h3>How much time doeas it takes?</h3>
			<select name="timing" id="timing">
			<option value="less than 15min">Less than 15 min</option>
			<option value="15min">15min</option>
			<option value="30min">30min</option>
			<option value="45min">45min</option>
			<option value="60min">60min</option>
			<option value="more than 1h">More than 1h</option>
			</select>
			<h3>Ingredients</h3>
			<label for="ingredients 1" class="ingredients"></label>
			<ul id="ingredientList">
			<li>
				<input type="text" id="ingredients-input" value="Ingredients 1">
			</li>
			</ul>
			<button class="ingredients-button">Add a new ingredient to the list</button>
			<h3>Steps</h3>
			<label for="step1" class="steps"></label>
			<ul id="stepList">
			<li>
				<input type="text" id="steps-input" value="Step 1">
			</li>
			</ul>
			<button class="steps-button">Add a new step tot he list</button>
		</form>
		<button type="submit" class="submit-button">Submit</button>
`;
	innerModal.innerHTML = myForm;
};


// Add event listener
generateButton.addEventListener('click', renderCard);
window.addEventListener('click', handleClick);
window.addEventListener('keydown', escapeModal);
outerModal.addEventListener('click', closeModal);
addNewRecipe.addEventListener('click', addOpenModal);

