// const addBtn = document.querySelector('.btn');
// const submitBtn = document.querySelector('.submitBtn');
// const closeForm = document.querySelector('.close');

// const addForm = document.querySelector('form');
// const formSection = document.querySelector('.formSection');
// const imagesList = document.querySelector(".images");


// let imagesArray = [];


// // Form for adding new button

// addBtn.addEventListener("click", () => {
//     formSection.style.display = "block";
// })

// function closeFormFunction() {
//     formSection.style.display = "none";
// }

// closeForm.addEventListener("click", closeFormFunction)

// addForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let imgUrl = document.getElementById("imgUrl").value;
//     let imgAlt = document.getElementById("imgAlt").value;

//     imagesArray.push({ imgUrl, imgAlt });
//     console.log(imagesArray);
//     appendImage(imgUrl, imgAlt);
//     addForm.reset();
//     closeFormFunction();

// })

// function appendImage(url, alt) {
//     let li = document.createElement('li');
//     let img = document.createElement('img')

//     img.setAttribute("src", `${url}`)
//     img.setAttribute("alt", `${alt}`)

//     console.log(img);
//     li.appendChild(img);
//     imagesList.appendChild(li);
// }


// Selecting various DOM elements and storing them in variables
const addBtn = document.querySelector('.btn');
const submitBtn = document.querySelector('.submitBtn');
const closeForm = document.querySelector('.close');
const addForm = document.querySelector('form');
const formSection = document.querySelector('.formSection');
const imagesList = document.querySelector(".images");

// Array to store images
let imagesArray = [];
// Variable to keep track of the index of the image being edited
let editIndex = -1;

// Event listener for the "Add a new Image" button to display the form
addBtn.addEventListener("click", () => {
    formSection.style.display = "block";
});

// Function to close the form and reset the form fields
function closeFormFunction() {
    formSection.style.display = "none";
    addForm.reset();
    editIndex = -1;  // Reset the edit index
    submitBtn.textContent = "Add Image";  // Reset the submit button text
}

// Event listener for the form's close button
closeForm.addEventListener("click", closeFormFunction);

// Event listener for the form submission
addForm.addEventListener("submit", (e) => {
    e.preventDefault();  // Prevent the default form submission
    let imgUrl = document.getElementById("imgUrl").value;  // Get the URL from the input field
    let imgAlt = document.getElementById("imgAlt").value;  // Get the alt text from the input field

    // If editIndex is -1, we are adding a new image; otherwise, we are editing an existing image
    if (editIndex === -1) {
        imagesArray.push({ imgUrl, imgAlt });  // Add new image to the array
    } else {
        imagesArray[editIndex] = { imgUrl, imgAlt };  // Update the existing image in the array
        editIndex = -1;  // Reset the edit index
        submitBtn.textContent = "Add Image";  // Reset the submit button text
    }

    updateImagesList();  // Update the displayed list of images
    addForm.reset();  // Reset the form fields
    closeFormFunction();  // Close the form
});

// Function to append an image and its edit button to the list
function appendImage(url, alt, index) {
    let li = document.createElement('li');  // Create a new list item
    let img = document.createElement('img');  // Create a new img element
    let editBtn = document.createElement('span');  // Create a new span element for the edit button

    img.setAttribute("src", url);  // Set the src attribute of the img element
    img.setAttribute("alt", alt);  // Set the alt attribute of the img element
    editBtn.textContent = "Edit";  // Set the text of the edit button

    // Event listener for the edit button to populate the form with the image data and show the form
    editBtn.addEventListener("click", () => {
        editImage(index);
    });

    li.appendChild(img);  // Append the img element to the list item
    li.appendChild(editBtn);  // Append the edit button to the list item
    imagesList.appendChild(li);  // Append the list item to the images list
}


// Function to update the displayed list of images
function updateImagesList() {
    imagesList.innerHTML = '';  // Clear the images list
    imagesArray.forEach((image, index) => {
        appendImage(image.imgUrl, image.imgAlt, index);  // Append each image to the list
    });
}

// Function to populate the form with the data of the image being edited and show the form
function editImage(index) {
    let image = imagesArray[index];  // Get the image data from the array
    document.getElementById("imgUrl").value = image.imgUrl;  // Set the URL input field with the image URL
    document.getElementById("imgAlt").value = image.imgAlt;  // Set the alt text input field with the image alt text
    formSection.style.display = "block";  // Show the form
    editIndex = index;  // Set the edit index
    submitBtn.textContent = "Update Image";  // Change the submit button text
}

// Initial call to display any images that may already be in the imagesArray
updateImagesList();
