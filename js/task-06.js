// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// -Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// -Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

// Для добавления стилей, используй CSS - классы valid и invalid.

const inputRef = document.querySelector('#validation-input');
const inputLength = inputRef.dataset.length++;

const checkValid = document.querySelector('input');
inputRef.addEventListener('change', e => {
    const text = e.target.value;

    if (text.length === inputLength) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    }
});




