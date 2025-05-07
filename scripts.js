document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('h1');
    title.addEventListener('click', function() {
        title.textContent = "أنت ضغطت على العنوان!";
        title.style.color = '#e74c3c';
    });
});
