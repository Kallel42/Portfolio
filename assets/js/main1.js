// script.js
const images = document.querySelectorAll('.image');
const tooltip = document.getElementById('tooltip');

images.forEach(image => {
    image.addEventListener('mouseover', () => {
        const tooltipText = image.getAttribute('data-tooltip');
        tooltip.textContent = tooltipText;
        tooltip.style.display = 'block';
        tooltip.style.top = `${image.offsetTop + image.offsetHeight}px`;
        tooltip.style.left = `${image.offsetLeft + image.offsetWidth / 2 - tooltip.offsetWidth / 2}px`;
    });

    image.addEventListener('mouseout', () => {
        tooltip.style.display = 'none';
    });
});
