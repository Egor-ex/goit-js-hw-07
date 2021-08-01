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


const ulEl = document.querySelector('#ingredients');

const liEl = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');
ulEl.innerHTML = liEl;

