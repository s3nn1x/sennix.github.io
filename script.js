document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.links a');

    links.forEach(link => {
        link.addEventListener('mouseover', function() {
            link.style.color = '#E9ECEF';
            link.style.fontSize = '18px';

        });

        link.addEventListener('mouseout', function() {
            link.style.color = '#495057';
            link.style.fontSize = '16px';

        });
    });
});

