document.addEventListener('DOMContentLoaded', () => {
    // Create animated background
    const background = document.createElement('div');
    background.id = 'background';
    document.body.appendChild(background);

    for (let i = 0; i < 100; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.style.top = `${Math.random() * 100}vh`;
        dot.style.left = `${Math.random() * 100}vw`;
        dot.style.animationDuration = `${Math.random() * 10 + 5}s`;
        background.appendChild(dot);
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function toggleSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('page').forEach(section => {
        section.style.display = 'none';
    });
    // Show the selected section
    //document.getElementById(sectionId).style.display = 'block';
    fetch(`${sectionId}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById('page').innerHTML = html;
            document.getElementById('page').style.display = 'block';
        })
        .catch(error => {
            console.error('Error loading section: ', error);
            document.getElementById(sectionId).style.display = 'block';
        });
}