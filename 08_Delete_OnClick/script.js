const images = document.getElementById("images");

// Add click event listener;

images.addEventListener('click', (e) => {
    console.log(e);
    let tagName = e.target.tagName;
    // console.log(tagName);

    if (tagName === "IMG") {
        let toBeDeleted = e.target.parentNode;
        toBeDeleted.remove();
    }
})