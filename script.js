//script.js

//This makes sure the html loads before performing any of the functions
document.addEventListener('DOMContentLoaded', () => {

    //Create objects here
    const jobForm = document.getElementById('job-form');
    const titleInput = document.getElementById('job-title-input');
    const descriptionInput = document.getElementById('job-description-input');
    const imageInput = document.getElementById('imageInput');
    const imageWrapper = document.querySelector('.image-wrapper');

    //Create functions here
    if (!jobForm || !titleInput || !descriptionInput || !imageInput || !imageWrapper) {
        console.error('Missing elements');
        return;
    }

    const resetPreview = () => {
        imageWrapper.innerHTML = '<div class="placeholder">Upload Photo Here</div><label for="imageInput" class="add-photo-btn">Add</label>';
        imageInput.value = '';
    }

    imageInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
    });

});