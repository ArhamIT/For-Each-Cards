// script.js

document.querySelectorAll('.card').forEach(card => {
    const editButton = card.querySelector('.edit-btn');
    const deleteButton = card.querySelector('.delete-btn');
    
    editButton.addEventListener('click', () => {
        const newTitle = prompt("Enter new title:");
        const newDescription = prompt("Enter new description:");
        const newImageUrl = prompt("Enter new image URL:");

        if (newTitle && newDescription && newImageUrl) {
            const cardContent = card.querySelector('.card-content');
            const cardImg = card.querySelector('img');

            cardContent.querySelector('h2').textContent = newTitle;
            cardContent.querySelector('p').textContent = newDescription;
            cardImg.src = newImageUrl;
        }
    });

    deleteButton.addEventListener('click', () => {
        card.remove();
    });
});
