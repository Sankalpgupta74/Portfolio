// Typing effect
const text = ["AI Enthusiast", "Web Developer", "DSA Learner"];
let i = 0, j = 0;
let current = "";
let isDeleting = false;

function type() {
    current = text[i];
    
    if (!isDeleting) j++;
    else j--;

    document.getElementById("typing").innerHTML = current.substring(0, j);

    if (j == current.length) isDeleting = true;
    if (j == 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();

// Dark Mode
function toggleMode() {
    document.body.classList.toggle("light");
}
function openSkills() {
    window.location.href = "skills.html";
}