// Dynamic Greeting
const greetingElement = document.getElementById('greeting');
const currentHour = new Date().getHours();
let greetingMessage = "Hello!";
if (currentHour < 12) {
    greetingMessage = "Good Morning!";
} else if (currentHour < 18) {
    greetingMessage = "Good Afternoon!";
} else {
    greetingMessage = "Good Evening!";
}
greetingElement.textContent = greetingMessage;

// Toggle Theme with Sun and Moon Icons
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    // Change icon based on theme
    if (document.body.classList.contains('dark-theme')) {
        themeToggle.textContent = 'dark_mode'; // Moon icon
    } else {
        themeToggle.textContent = 'light_mode'; // Sun icon
    }
});
