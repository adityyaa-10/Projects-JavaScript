const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

//To show PopUp when the button is clicked
button.addEventListener('click', () => {
    popup.style.display = 'block';
});

//To close the PopUp when the cross button is clicked
close.addEventListener('click', () => {
    popup.style.display = 'none';
});

//To close the PopUp when we click anywhere outside the PopUp Card
popup.addEventListener('click', () => {
    popup.style.display = 'none';
});