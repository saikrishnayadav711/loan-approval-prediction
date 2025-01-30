const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
//type
const words = ["Loan Approval Predictiion Using Machine Learning.", "Machine Learning.", "Tableau Visualization."," 88% Accuracy."];
let wordIndex = 0;
let charIndex = 0;
const typewriter = document.getElementById('typewriter');

function type() {
    if (charIndex < words[wordIndex].length) {
        typewriter.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 150); // Adjust typing speed here
    } else {
        setTimeout(erase, 1000); // Adjust delay before erasing here
    }
}

function erase() {
    if (charIndex > 0) {
        typewriter.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 10); // Adjust erasing speed here
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 100); // Adjust delay before typing next word here
    }
}

document.addEventListener('DOMContentLoaded', () => {
    type();
});
document.getElementById('scrollButton').addEventListener('click', function() {
    document.getElementById('targetSection').scrollIntoView({ behavior: 'smooth' });
});
//loan
