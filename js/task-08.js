// Напиши скрипт создания и очистки коллекции элементов.
//Пользователь вводит количество элементов в input и
//нажимает кнопку Создать, после чего рендерится коллекция.
//При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
//Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.


const inputRef = document.querySelector('input');
const galleryRef = document.querySelector('#boxes');
const creatBtn = document.querySelector('button[data-action="render"]');
const clearBtn = document.querySelector('button[data-action="destroy"]')

let a = 20;
let b = 20;
const createBoxes = () => {
    const amount = Number(inputRef.value);

    for (let i = 1; i <= amount; i += 1) {

        const boxRef = document.createElement('div');
        boxRef.style.backgroundColor = `rgb(${Math.random() * 100}, ${Math.random() * 100}, ${Math.random() * 100})`;
        boxRef.classList.add('design');
        galleryRef.append(boxRef);
        boxRef.style.width = `${a += 10}px`;
        boxRef.style.height = `${b += 10}px`;
    };
};

const destroyBoxes = () => {
    galleryRef.innerHTML = '';
    inputRef.value = '';
    a = 20;
    b = 20;
};

creatBtn.addEventListener('click', createBoxes);
clearBtn.addEventListener('click', destroyBoxes);
