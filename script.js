let elements = myForm.elements;
let titleName = document.querySelector('#titleName');
let compliment = document.querySelector('.compliment');

elements.button.addEventListener('click', function (event) {
    event.preventDefault();
    titleName.textContent = elements.userName.value;
    compliment.style.backgroundImage = `url(${elements.urlImg.value})`;
    console.log(elements.urlImg.value);
})

button.onclick = function() {
    this.style.backgroundColor = 'red';
}