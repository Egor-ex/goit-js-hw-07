// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) и
//изменяет инлайн - стиль span#text обновляя свойство font - size.

//В результате при перетаскивании ползунка будет меняться размер текста.


const controlFontSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

//=====1=====

controlFontSize.addEventListener('input', e => text.style.fontSize = controlFontSize.value + 'px')


//=====2=====

// controlFontSize.oninput = function () {
//     text.style.fontSize = controlFontSize.value + "px";
// };