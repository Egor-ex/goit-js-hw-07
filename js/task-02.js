//В HTML есть пустой список ul#ingredients.

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
// после чего вставит все li за одну операцию в список ul.ingredients.

//Для создания DOM - узлов используй document.createElement().


const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];


//////1

const ingredientsRef = document.querySelector('#ingredients');

const makeIngredients = option => {
    return option.map(option => {
        const liRef = document.createElement('li');
        liRef.textContent = option;
        console.log(liRef);

        return liRef;
    });
};

const elements = makeIngredients(ingredients);
ingredientsRef.append(...elements);




///////2

// const ulEl = document.querySelector('#ingredients');

// const liEl = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');
// ulEl.innerHTML = liEl;


///////3

// const ingredientsRef = document.querySelector('#ingredients');

// const elements = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//     const option = ingredients[i];

//     const liRef = document.createElement('li');
//     liRef.textContent = option;
//     console.log(liRef);

//     elements.push(liRef);
// }

// console.log(elements);
// ingredientsRef.append(...elements);