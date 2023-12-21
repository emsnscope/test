// JavaScript to handle accordion functionality
document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        item.addEventListener('click', function () {
            // Toggle the active class to show/hide content
            this.classList.toggle('active');
        });
    });
});
